import React, { Suspense } from 'react';
import { AppBar } from '../AppBar/AppBar.jsx';
import { Outlet } from 'react-router-dom';

export const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        {children}
        <Outlet />
      </Suspense>
    </>
  );
};
