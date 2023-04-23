
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onClickImage,
}) => {
  return (
    <>
      <li className={css.galleryItem}>
        <img
          onClick={() => onClickImage(largeImageURL)}
          className={css.image}
          src={webformatURL}
          alt={tags}
          largeimage={largeImageURL}
        />
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {
  onClickImage: PropTypes.func,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default ImageGalleryItem;



