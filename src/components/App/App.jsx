import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Layout } from '../Layout/Layout.jsx';
import { RestrictedRoute } from '../RestrictedRoute.jsx';
import { PrivateRoute } from '../PrivateRoute.jsx';
import { NotFoundPage } from '../../pages/NotFoundPage.jsx';
const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const TeachersPage = lazy(() =>
  import('../../pages/TeachersPage/TeachersPage.jsx')
);
const FavouritesPage = lazy(() =>
  import('../../pages/FavouritesPage/FavouritesPage.jsx')
);
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          {/* <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/teachers"
                component={<RegistrationModal />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/teachers"
                component={<LoginModal />}
              />
            }
          />
          <Route
            path="/favourites"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<FavouritesPage />}
              />
            }
          /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
