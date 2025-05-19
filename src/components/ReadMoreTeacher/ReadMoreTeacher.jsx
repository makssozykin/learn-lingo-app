import React, { useState } from 'react';
import { Button } from '../Button/Button.jsx';
import css from './ReadMoreTeacher.module.css';
import { useModal } from '../../hooks/Toggle.js';
import { GlobalModal } from '../Modal/Modal.jsx';
import { Reviews } from '../Reviews/Reviews.jsx';
import { BookForm } from '../BookForm/BookForm.jsx';

export const ReadMoreTeacher = ({
  avatar,
  teacherFullName,
  experience,
  reviews,
  levels,
}) => {
  const [active, setActive] = useState(false);
  const { isOpenModal, openModal, closeModal } = useModal();
  const handleBookClick = () => {
    openModal();
    setActive(true);
  };
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
      <Button title="Book trial" onClick={handleBookClick}>
        Book trial lesson
      </Button>
      <GlobalModal
        title="Book trial"
        isOpenModal={isOpenModal}
        closeModal={closeModal}
        active={active}
      >
        <BookForm
          closeModal={closeModal}
          avatar={avatar}
          teacherFullName={teacherFullName}
        />
      </GlobalModal>
    </>
  );
};
