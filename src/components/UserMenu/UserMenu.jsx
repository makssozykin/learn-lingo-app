import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebaseConfig.js';
import sprite from '/icons/sprite.svg';
import css from './UserMenu.module.css';
import { Button } from '../Button/Button.jsx';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../redux/auth/slice.js';

export const UserMenu = ({ user }) => {
  console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClickLogOut = () => {
    signOut(auth);
    dispatch(removeUser());
    navigate('/');
  };
  return (
    <nav className={css.userMenu}>
      <p>{user.name.split(' ')[0]}</p>
      <Button title="logout" onClick={handleClickLogOut}>
        <svg
          width="20"
          height="20"
          aria-label="Log out"
          className={css.iconLogOut}
        >
          <use xlinkHref={`${sprite}#icon-log-out`}></use>
        </svg>
        Log out
      </Button>
    </nav>
  );
};
