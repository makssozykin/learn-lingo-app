import React from 'react';
import { TeacherCard } from '../TeacherCard/TeacherCard.jsx';
import css from './TeacherList.module.css';

export const TeacherList = ({ teachers }) => {
  return (
    <ul className={css.teacherList}>
      {teachers.map((teacher, index) => (
        <TeacherCard key={teacher.key || index} teacher={teacher} />
      ))}
    </ul>
  );
};
