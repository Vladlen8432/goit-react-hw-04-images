import { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import css from './ImageGallery.module.css';

class ImageGallery extends Component {
  render() {
    const { images, onClick } = this.props;

    return (
      <ul className={css.gallery}>
        {images.map(image => (
          <ImageGalleryItem key={image.id} image={image} onClick={onClick} />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
