import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

export const Navigation = ({ authUser }) => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <nav className={css.navigation}>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={buildLinkClass} to="/teachers">
        Teachers
      </NavLink>
      {authUser && (
        <NavLink className={buildLinkClass} to="/favourites">
          Favourites
        </NavLink>
      )}
    </nav>
  );
};
