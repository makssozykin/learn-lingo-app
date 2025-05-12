import clsx from 'clsx';
import css from './Button.module.css';

export const Button = ({
  title,
  type,
  onClick,
  handleClick,
  closeModal,
  children,
}) => {
  const classes = mainClass => {
    return clsx(mainClass, {
      [css.btnRegistration]: title === 'Registration',
      [css.btnLogIn]: title === 'Log in',
      [css.loginBtn]: title === 'login',
      [css.registerBtn]: title === 'register',
      [css.logOutBtn]: title === 'logout',
      [css.btnClose]: title === 'close',
      [css.btnStart]: title === 'start',
      [css.btnLoadMore]: title === 'Load more',
    });
  };

  return (
    <button
      type={type}
      onClick={
        title === 'Load more'
          ? onClick
          : title === 'Registration' || title === 'Log in'
          ? e => handleClick(e.target.innerText)
          : title === 'logout'
          ? onClick
          : title === 'close'
          ? closeModal
          : title === 'start'
          ? onClick
          : undefined
      }
      className={classes(css.btn)}
    >
      {children}
    </button>
  );
};
