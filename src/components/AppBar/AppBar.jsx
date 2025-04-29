import React from 'react';
import { Logo } from '../Logo/Logo.jsx';
import { Navigation } from '../Navigation/Navigation.jsx';
import { UserMenu } from '../UserMenu/UserMenu.jsx';
import { AuthMenu } from '../AuthMenu/AuthMenu.jsx';
import css from './AppBar.module.css';

export const AppBar = () => {
  return (
    <header className={css.header}>
      <div className={css.headerCont}>
        <Logo />
        <Navigation />
        <AuthMenu />
      </div>
    </header>
  );
};
