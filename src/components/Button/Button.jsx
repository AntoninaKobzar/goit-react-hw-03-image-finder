import PropTypes from 'prop-types';
const Button = ({ onClick }) => (
    <div>
        <button type="button" onClick={onClick}>
            Load more
        </button>
    </div>
);

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default Button;
// При натисканні на кнопку Load more повинна довантажуватись наступна порція зображень і рендеритися разом із попередніми.Кнопка повинна 
// рендеритися лише тоді, коли є якісь завантажені зображення.Якщо масив зображень порожній, кнопка не рендериться.