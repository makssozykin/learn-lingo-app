import { Button } from '../Button/Button.jsx';
import css from './TeacherCard.module.css';
import sprite from '/icons/sprite.svg';

export const TeacherCard = ({ teacher }) => {
  const {
    avatar_url,
    name,
    surname,
    lessons_done,
    rating,
    price_per_hour,
    languages,
    lesson_info,
    conditions,
    levels,
  } = teacher;

  return (
    <li className={css.teacherCard}>
      <div className={css.photoContainer}>
        <img
          className={css.teacherPhoto}
          src={avatar_url}
          alt={`${name}_${surname}`}
        />
        <div className={css.circle}>
          <div className={css.circleOnline}></div>
        </div>
      </div>
      <div className={css.teacherMainInfo}>
        <div className={css.teacherNameAndRate}>
          <div className={css.teacherName}>
            <p>Languages</p>
            <h3>{`${name} ${surname}`}</h3>
          </div>
          <ul className={css.teacherRatingList}>
            <li className={css.teacherRatingItem}>
              <svg
                width="16"
                height="16"
                aria-label="book"
                className={css.iconBook}
              >
                <use href={`${sprite}#icon-book-open`}></use>
              </svg>
              <p>Lessons online</p>
            </li>
            <li className={css.teacherRatingItem}>
              <p>{`Lessons done: ${lessons_done}`}</p>
            </li>
            <li className={css.teacherRatingItem}>
              <svg
                width="16"
                height="16"
                aria-label="star"
                className={css.icon}
              >
                <use href={`${sprite}#icon-Star-2`}></use>
              </svg>
              <p>{`Rating: ${rating}`}</p>
            </li>
            <li className={css.teacherRatingItem}>
              <p>
                Price / 1 hour:{' '}
                <span className={css.price}>{`${price_per_hour}$`}</span>
              </p>
            </li>
          </ul>
        </div>
        <div>
          <p>
            Speaks: <span>{`${languages.join(', ')}`}</span>
          </p>
          <p>
            Lessons info: <span>{lesson_info}</span>
          </p>
          <p>
            Conditions: <span>{`${conditions.join(' ')}`}</span>
          </p>
        </div>
        <Button>Read more</Button>
        <ul>
          {levels.map((level, index) => (
            <li key={index}>{level}</li>
          ))}
        </ul>
        <Button>Book trial lesson</Button>
      </div>
    </li>
  );
};
