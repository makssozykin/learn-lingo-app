import React from 'react';
import { Button } from '../Button/Button.jsx';
import css from './ReadMoreTeacher.module.css';
import { useModal } from '../../hooks/Toggle.js';
import { GlobalModal } from '../Modal/Modal.jsx';
import { LoginForm } from '../LoginForm/LoginForm.jsx';
import { Reviews } from '../Reviews/Reviews.jsx';

export const ReadMoreTeacher = ({ experience, reviews, levels }) => {
  const { isOpenModal, openModal, closeModal } = useModal();
  return (
    <>
      <p className={css.experienceText}>{experience}</p>
      <Reviews reviews={reviews} />
      <ul className={css.langList}>
        {levels.map((level, index) => (
          <li key={index} className={css.langItem}>
            {`#${level}`}
          </li>
        ))}
      </ul>
      <Button title="Book trial" onClick={openModal}>
        Book trial lesson
      </Button>
      <GlobalModal isOpenModal={isOpenModal} closeModal={closeModal}>
        <LoginForm closeModal={closeModal} />
      </GlobalModal>
    </>
  );
};
