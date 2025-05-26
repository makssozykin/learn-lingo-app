import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
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
      {isLoggedIn && (
        <NavLink className={buildLinkClass} to="/favourites">
          Favourites
        </NavLink>
      )}
    </nav>
  );
};
