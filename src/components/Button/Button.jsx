    import React, { Component } from 'react';
    import PropTypes from 'prop-types';
    import css from './Button.module.css';



    class Button extends Component {
    render() {
        return (
        <button
            type="button"
            className={css.button}
            onClick={this.props.onNextPage}
        >
            Load more
        </button>
        );
    }
    }

    Button.propTypes = {
    onNextPage: PropTypes.func,
    };

    export default Button;
