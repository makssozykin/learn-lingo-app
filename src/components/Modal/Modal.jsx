import React from 'react';
import Modal from 'react-modal';
import { Button } from '../Button/Button.jsx';
import sprite from '/icons/sprite.svg';
import css from './Modal.module.css';

export const GlobalModal = ({ isOpenModal, closeModal, children }) => {
  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={closeModal}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div className={css.modalContainer}>
        <Button title="close" closeModal={closeModal}>
          <svg
            width="32"
            height="32"
            aria-label="close"
            className={css.iconClose}
          >
            <use xlinkHref={`${sprite}#icon-close`}></use>
          </svg>
        </Button>
        {children}
      </div>
    </Modal>
  );
};
