import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';


class Modal extends Component{
    componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    const { onModalClose } = this.props;
    if (e.key === 'Escape') {
      onModalClose();
    }
  };

  handleCloseBackdrop = e => {
    const { onModalClose } = this.props;

    if (e.currentTarget === e.target) {
      onModalClose();
    }
  };

  render() {
    const { largeImage,tags } = this.props;
    return (
      <div className={css.overlay} onClick={this.handleCloseBackdrop}>
        <div className={css.modal}>
          <img src={largeImage} alt={tags} width="1000"/>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onModalClose: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
  tags:PropTypes.string.isRequired,
};
export default Modal;


