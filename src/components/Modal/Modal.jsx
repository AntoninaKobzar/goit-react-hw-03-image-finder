import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component{
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }
    handleKeyDown = event => {
        if (event.code === 'Escape') {
            this.props.onClose();
        }
    };

    handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    };
    render() {
        return createPortal(
            <div onClick={this.handleBackdropClick}>
                <div>{this.props.children}</div>
            </div>,
            modalRoot,
        );
    }
}

Modal.defaultProps = {
    children: null,
};

Modal.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};
export default Modal;


// Під час кліку на елемент галереї повинно відкриватися модальне вікно з темним оверлеєм і відображатися 
// велика версія зображення.Модальне вікно повинно закриватися по натисканню клавіші ESC або по кліку на оверлеї.

// Зовнішній вигляд схожий на функціонал цього VanillaJS-плагіна, тільки замість білого модального вікна рендериться 
// зображення(у прикладі натисніть Run).Анімацію робити не потрібно!

// <div class="overlay">
//   <div class="modal">
//     <img src="" alt="" />
//   </div>
// </div>