import React from 'react';
import { Logo } from '../Logo/Logo.jsx';
import { Navigation } from '../Navigation/Navigation.jsx';
import { UserMenu } from '../UserMenu/UserMenu.jsx';
import { AuthMenu } from '../AuthMenu/AuthMenu.jsx';

export const AppBar = () => {
  return (
    <header>
      <div>
        <Logo />
        <div>
          <Navigation />
          <AuthMenu />
        </div>
      </div>
    </header>
  );
};
