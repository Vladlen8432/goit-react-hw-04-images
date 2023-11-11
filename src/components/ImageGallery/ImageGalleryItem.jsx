import { Component } from 'react';
import css from './ImageGallery.module.css';

class ImageGalleryItem extends Component {
  render() {
    const { image, onClick } = this.props;

    return (
      <li
        className={css.galleryItem}
        onClick={() => onClick(image.largeImageURL)}
      >
        <img
          src={image.webformatURL}
          alt="IMG"
          className={css.galleryImage}
        ></img>
      </li>
    );
  }
}

export default ImageGalleryItem;
