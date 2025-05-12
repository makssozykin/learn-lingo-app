import sprite from '/icons/sprite.svg';
import css from './Picture.module.css';

export const Picture = () => {
  return (
    <div className={css.pictureContainer}>
      <img
        className={css.faceSticker}
        src="/images/face-sticker.png"
        alt="face"
      />
      <div className={css.macBook}>
        <svg width="46" height="50" aria-label="iMac" className={css.iconMac}>
          <use href={`${sprite}#icon-imac`}></use>
        </svg>
      </div>
    </div>
  );
};
