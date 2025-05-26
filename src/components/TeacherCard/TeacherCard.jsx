import { useState } from 'react';
import { Button } from '../Button/Button.jsx';
import css from './TeacherCard.module.css';
import sprite from '/icons/sprite.svg';
import { ReadMoreTeacher } from '../ReadMoreTeacher/ReadMoreTeacher.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFavouriteTeachers,
  selectTeachers,
} from '../../redux/teachers/selectors.js';
import { removeFavourites, setFavourites } from '../../redux/teachers/slice.js';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';

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
    experience,
    reviews,
  } = teacher;
  const dispatch = useDispatch();
  const [toggleReadMore, setToggleReadMore] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const teachers = useSelector(selectTeachers);
  console.log(teachers);
  const favouriteTeachers = useSelector(selectFavouriteTeachers);
  const isFavourite = favouriteTeachers.some(
    teacher => teacher.avatar_url === avatar_url
  );
  console.log(favouriteTeachers);
  const handleFavouriteClick = () => {
    if (isLoggedIn) {
      isFavourite
        ? dispatch(removeFavourites(teacher))
        : dispatch(setFavourites(teacher));
    } else {
      return alert('first you need to log in');
    }
  };

  const handleClickReadMore = () => {
    setToggleReadMore(!toggleReadMore);
  };
  return (
    <li className={css.teacherCard}>
      <div className={css.iconCont} onClick={handleFavouriteClick}>
        {isFavourite ? (
          <svg className={css.iconFavoriteActive}>
            <use href={sprite + '#icon-heart'} />
          </svg>
        ) : (
          <svg className={css.icon}>
            <use href={sprite + '#icon-heart'} />
          </svg>
        )}
      </div>
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
        <div className={css.teacherInfo}>
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
        <Button title="Read more" onClick={handleClickReadMore}>
          Read more
        </Button>
        {toggleReadMore && (
          <ReadMoreTeacher
            avatar={avatar_url}
            teacherFullName={`${name} ${surname}`}
            experience={experience}
            reviews={reviews}
            levels={levels}
          />
        )}
        {!toggleReadMore && (
          <ul className={css.langList}>
            {levels.map((level, index) => (
              <li key={index} className={css.langItem}>
                {`#${level}`}
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
};
