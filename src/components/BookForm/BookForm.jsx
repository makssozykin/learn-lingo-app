import { Button } from '../Button/Button.jsx';
import css from './BookForm.module.css';

export const BookForm = ({ avatar, teacherFullName }) => {
  return (
    <form className={css.bookForm}>
      <h2 className={css.bookTitle}>Book trial lesson</h2>
      <p className={css.bookText}>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>
      <div className={css.teacherInfo}>
        <div className={css.teacherAvatar}>
          <img src={avatar} alt="teacher photo" />
        </div>
        <div className={css.teacherFullName}>
          <p>Your teacher</p>
          <p>{teacherFullName}</p>
        </div>
      </div>
      <h3 className={css.bookQuestion}>
        What is your main reason for learning English?
      </h3>
      <div className={css.bookAnswer}>
        <label htmlFor="career">
          <input type="radio" id="career" /> Career and business
        </label>
        <label htmlFor="abroad">
          <input type="radio" id="abroad" /> Living abroad
        </label>
        <label htmlFor="coursework">
          <input type="radio" id="coursework" /> Exams and coursework
        </label>
        <label htmlFor="travel">
          <input type="radio" id="travel" /> Culture, travel or hobby
        </label>
      </div>
      <div className={css.bookInputs}>
        <input className={css.bookInput} type="text" placeholder="Name" />
        <input className={css.bookInput} type="email" placeholder="Email" />
        <input
          className={css.bookInput}
          type="text"
          placeholder="Pnone number"
        />
      </div>
      <Button title="Book">Book</Button>
    </form>
  );
};
