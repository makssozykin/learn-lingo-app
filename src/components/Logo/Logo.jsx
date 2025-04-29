import React from 'react';
import css from './Logo.module.css';

export const Logo = () => {
  return (
    <div className={css.logoCont}>
      <img className={css.logo} src="/logo/ukraine.png" alt="ukraine" />
      <p className={css.logoText}>LearnLingo</p>
    </div>
  );
};
