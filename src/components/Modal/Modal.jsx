import Modal from 'react-modal';
import { Button } from '../Button/Button.jsx';
import sprite from '/icons/sprite.svg';
import css from './Modal.module.css';
import { useEffect } from 'react';

export const GlobalModal = ({ isOpenModal, closeModal, children }) => {
  useEffect(() => {
    if (isOpenModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpenModal]);

  if (!isOpenModal) {
    return null;
  }

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
