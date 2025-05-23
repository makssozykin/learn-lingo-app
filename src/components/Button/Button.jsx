import clsx from 'clsx';
import css from './Button.module.css';

export const Button = ({
  title,
  type,
  onClick,
  disabled,
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
      [css.btnReadMore]: title === 'Read more',
      [css.btnBookTrial]: title === 'Book trial',
      [css.btnBook]: title === 'Book',
      [css.btnResetForm]: title === 'Reset',
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
          : title === 'Read more'
          ? onClick
          : title === 'Book trial'
          ? onClick
          : title === 'Reset'
          ? onClick
          : undefined
      }
      className={classes(css.btn)}
      disabled={title === 'Load more' && disabled}
    >
      {children}
    </button>
  );
};
