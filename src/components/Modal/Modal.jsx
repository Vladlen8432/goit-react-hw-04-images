import { Component } from 'react';
import 'simplelightbox/dist/simple-lightbox.min.css';
import css from './Modal.module.css';
import { FaTimes } from 'react-icons/fa';

class Modal extends Component {
  state = {
    loading: false,
  };

  handleKeyPress = event => {
    if (event.code === 'Escape' && this.props.isOpen) {
      this.props.onClose();
    }
  };

  handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
    document.body.style.overflow = 'auto';
  }

  render() {
    const { isOpen, image, onClose } = this.props;

    if (isOpen) {
      document.body.classList.add('modal-open');
    }

    return (
      <div className={css.modalContainer}>
        {isOpen && (
          <div className={css.overlay} onClick={this.handleOverlayClick}>
            <div className={css.modal}>
              <div>
                <img src={image} alt="Large" onLoad={this.handleImageLoad} />
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
  }
}

export default Modal;
