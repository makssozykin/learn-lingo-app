import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Layout } from '../Layout/Layout.jsx';
import { RestrictedRoute } from '../RestrictedRoute.jsx';
import { PrivateRoute } from '../PrivateRoute.jsx';
import { NotFoundPage } from '../../pages/NotFoundPage.jsx';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebaseConfig.js';
import { refreshUser } from '../../redux/auth/slice.js';
const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const TeachersPage = lazy(() =>
  import('../../pages/TeachersPage/TeachersPage.jsx')
);
const FavouritesPage = lazy(() =>
  import('../../pages/FavouritesPage/FavouritesPage.jsx')
);
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        console.log(user);
        dispatch(
          refreshUser({
            name: user.displayName,
            email: user.email,
            accessToken: user.accessToken,
          })
        );
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          {/* <Route path="/favourites" element={<FavouritesPage />} /> */}
          <Route
            path="/favourites"
            element={
              <PrivateRoute redirectTo="/" component={<FavouritesPage />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
