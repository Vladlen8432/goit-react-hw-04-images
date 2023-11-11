import css from './ImageGallery.module.css';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li
      className={css.galleryItem}
      onClick={() => onClick(image.largeImageURL)}
    >
      <img src={image.webformatURL} alt="IMG" className={css.galleryImage} />
    </li>
  );
};

export default ImageGalleryItem;
