import clsx from 'clsx';
import css from './Container.module.css';

export const Container = ({ title, children }) => {
  const classes = mainClass => {
    return clsx(mainClass, {
      [css.homePageCont]: title === 'HomePage',
      [css.teachersPageCont]: title === 'TeachersPage',
    });
  };
  return <main className={classes(css.main)}>{children}</main>;
};
