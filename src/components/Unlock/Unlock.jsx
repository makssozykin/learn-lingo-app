import { useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button.jsx';
import css from './Unlock.module.css';

export const Unlock = () => {
  const navigate = useNavigate();
  const handleClickStart = () => {
    navigate('/teachers');
  };
  return (
    <div className={css.unlockContainer}>
      <h1>
        Unlock your potential with the best <span>language</span> tutors
      </h1>
      <p>
        Embark on an Exciting Language Journey with Expert Language Tutors:
        Elevate your language proficiency to new heights by connecting with
        highly qualified and experienced tutors.
      </p>
      <Button title="start" onClick={handleClickStart}>
        Get started
      </Button>
    </div>
  );
};
