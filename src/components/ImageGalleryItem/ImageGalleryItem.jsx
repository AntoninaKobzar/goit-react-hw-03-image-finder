import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onImageClick }) => {
    const fullImage = () => onImageClick(image.largeImageURL);

    return (
    <li className={scc.galleryItem}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        className={css.image}
        onClick={fullImage}
      />
    </li>
  );
};

ImageGalleryItem.defaultProps = {
  tags: '',
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
  }),
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;



