import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider.jsx';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { currentUser } = useContext(AuthContext);
  return !currentUser ? <Navigate to={redirectTo} /> : Component;
};
