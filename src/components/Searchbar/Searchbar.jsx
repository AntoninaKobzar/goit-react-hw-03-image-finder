import React, { Component } from 'react';
import { Notify } from 'notiflix';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

class Searchbar extends Component{
    state = {
        search: '',
    };
    handleChange = e => {
        this.setState({ search: e.currentTarget.value });
    };
    handleSubmit = e => {
        const { search } = this.state;
        e.preventDefault();
        if (search.trim() === '') {
            return Notify.failure('Value cannot be an empty string!');
        }
        this.props.onSubmit(search);
        this.setState({ search: '' });
    };
    render() {
    return (
        <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={css.button}>
            <span className={css.label}>Search</span>
            </button>
            <input
            className={css.input}
            type="text"
            name="search"
            onChange={this.handleChange}
            value={this.state.search}
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
    onSubmit: PropTypes.func.isRequired,
    };
    
export default Searchbar;




