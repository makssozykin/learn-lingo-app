import css from './Reviews.module.css';
import sprite from '/icons/sprite.svg';

export const Reviews = ({ reviews }) => {
  return (
    <ul className={css.reviewsList}>
      {reviews.map((review, index) => (
        <li key={index} className={css.reviewItem}>
          <div className={css.reviewerInfo}>
            <div className={css.reviewerPhoto}>
              {review.reviewer_name.split('')[0]}
            </div>
            <div className={css.reviewerNameRating}>
              <p>{review.reviewer_name}</p>
              <p>
                <svg
                  width="16"
                  height="16"
                  aria-label="star"
                  className={css.icon}
                >
                  <use href={`${sprite}#icon-Star-2`}></use>
                </svg>
                {review.reviewer_rating.toFixed(1)}
              </p>
            </div>
          </div>
          <p className={css.reviewerComment}>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
};
