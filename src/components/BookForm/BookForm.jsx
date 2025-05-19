import css from './BookForm.module.css';

export const BookForm = ({ avatar, teacherFullName }) => {
  return (
    <form className={css.bookForm}>
      <h1>Book trial lesson</h1>
      <p>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>
      <div>
        <div>
          <img src={avatar} alt="teacher photo" />
        </div>
        <div>
          <p>Your teacher</p>
          <p>{teacherFullName}</p>
        </div>
      </div>
      <h2>What is your main reason for learning English?</h2>
      <div>
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
    </form>
  );
};
