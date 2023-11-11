import { useEffect } from 'react';
import 'simplelightbox/dist/simple-lightbox.min.css';
import css from './Modal.module.css';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ isOpen, image, onClose }) => {
  useEffect(() => {
    const body = document.body;

    if (isOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }

    return () => {
      body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={css.modalContainer}>
      {isOpen && (
        <div className={css.overlay} onClick={handleOverlayClick}>
          <div className={css.modal}>
            <div>
              <img src={image} alt="Large" />
              <button
                type="button"
                className={css.closeButton}
                onClick={onClose}
              >
                <FaTimes />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
