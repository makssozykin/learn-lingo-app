import React from 'react';
import { TeacherCard } from '../TeacherCard/TeacherCard.jsx';
import css from './TeacherList.module.css';

export const TeacherList = ({ teachers }) => {
  return (
    <ul className={css.teacherList}>
      {teachers.map(teacher => (
        <TeacherCard
          key={`${teacher.name}_${teacher.surname}`}
          teacher={teacher}
        />
      ))}
    </ul>
  );
};
