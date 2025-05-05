import React, { useEffect, useState } from 'react';
import { Logo } from '../Logo/Logo.jsx';
import { Navigation } from '../Navigation/Navigation.jsx';
import { UserMenu } from '../UserMenu/UserMenu.jsx';
import { AuthMenu } from '../AuthMenu/AuthMenu.jsx';
import { useModal } from '../../hooks/Toggle.js';
import { GlobalModal } from '../Modal/Modal.jsx';
import { RegistrationForm } from '../RegistrationForm/RegistrationForm.jsx';
import { LoginForm } from '../LoginForm/LoginForm.jsx';
import css from './AppBar.module.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebaseConfig.js';

export const AppBar = () => {
  const { isOpenModal, openModal, closeModal } = useModal();
  const [authUser, setAuthUser] = useState(null);
  const [btn, setBtn] = useState('');

  useEffect(() => {
    const listen = onAuthStateChanged(auth, user => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
      return () => {
        listen();
      };
    });
  }, []);

  const handleBtnAuth = btn => {
    setBtn(btn);
  };

  return (
    <header className={css.header}>
      <div className={css.headerCont}>
        <Logo />
        <Navigation />
        {authUser ? (
          <UserMenu user={authUser} setAuthUser={setAuthUser} />
        ) : (
          <AuthMenu openModal={openModal} handleBtnAuth={handleBtnAuth} />
        )}

        {btn === 'Log in' ? (
          <GlobalModal isOpenModal={isOpenModal} closeModal={closeModal}>
            <LoginForm closeModal={closeModal} />
          </GlobalModal>
        ) : (
          <GlobalModal isOpenModal={isOpenModal} closeModal={closeModal}>
            <RegistrationForm closeModal={closeModal} />
          </GlobalModal>
        )}
      </div>
    </header>
  );
};
