import React from 'react';
import { Button } from '../Button/Button.jsx';
import sprite from '/icons/sprite.svg';
import css from './AuthMenu.module.css';

export const AuthMenu = ({ openModal, handleBtnAuth }) => {
  const handleClick = btn => {
    handleBtnAuth(btn);
    openModal();
  };
  return (
    <ul className={css.authMenu}>
      <li>
        <Button title="Log in" handleClick={handleClick}>
          <svg
            width="20"
            height="20"
            aria-label="Log in"
            className={css.iconLogIn}
          >
            <use xlinkHref={`${sprite}#icon-log-in-01`}></use>
          </svg>
          Log in
        </Button>
      </li>
      <li>
        <Button title="Registration" handleClick={handleClick}>
          Registration
        </Button>
      </li>
    </ul>
  );
};
