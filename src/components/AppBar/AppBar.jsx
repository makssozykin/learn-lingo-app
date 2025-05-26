import { useState } from 'react';
import { Logo } from '../Logo/Logo.jsx';
import { Navigation } from '../Navigation/Navigation.jsx';
import { UserMenu } from '../UserMenu/UserMenu.jsx';
import { AuthMenu } from '../AuthMenu/AuthMenu.jsx';
import { useModal } from '../../hooks/Toggle.js';
import { GlobalModal } from '../Modal/Modal.jsx';
import { RegistrationForm } from '../RegistrationForm/RegistrationForm.jsx';
import { LoginForm } from '../LoginForm/LoginForm.jsx';
import css from './AppBar.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors.js';

export const AppBar = () => {
  const currentUser = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(currentUser);
  const { isOpenModal, openModal, closeModal } = useModal();
  const [btn, setBtn] = useState('');

  const handleBtnAuth = btn => {
    setBtn(btn);
  };

  return (
    <header className={css.header}>
      <div className={css.headerCont}>
        <Logo />
        <Navigation />
        {isLoggedIn ? (
          <UserMenu user={currentUser} />
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
