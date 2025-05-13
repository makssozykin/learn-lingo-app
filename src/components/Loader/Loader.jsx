import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  const color = '#f4c550';
  return (
    <div className={css.loader}>
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        strokeColor={color}
        strokeWidth="5"
        animationDuration="1.00"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
