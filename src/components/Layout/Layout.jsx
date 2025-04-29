import React, { Children, Suspense } from 'react';
import { AppBar } from '../AppBar/AppBar.jsx';

export const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </>
  );
};
