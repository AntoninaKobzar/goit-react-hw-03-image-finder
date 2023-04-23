import React, { Component } from 'react';

import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

class Searchbar extends Component{
    render() {
    return (
        <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.props.onSubmit}>
            <button type="submit" className={css.button}>
            <span className={css.label}>Search</span>
            </button>
            <input
            className={css.input}
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            />
        </form>
        </header>
    );
    }
    };  

    Searchbar.propTypes = {
    onSubmit: PropTypes.func,
    };
    
export default Searchbar;




