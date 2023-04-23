import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

class Searchbar extends Component{
    state = {
        query: '',
    }

    handleSearchInput = event => {
        const { name, value } = event.currentTarget;
        this.setState({
            [name]: value,
        });
    };
    
    handleSubmit = event => {
        event.preventDefault();

        if (!this.state.query) return;
        this.props.onSubmit(this.state.query);
        this.resetForm();
    };
    resetForm = () =>
        this.setState({
            query: '',
        });

    render() {
        return (
        <header className={css.searchbar}>
        <form onSubmit={this.handleSubmit} className={css.searchForm}>
    <button type="submit" className={css.button}>
    <span className={css.label}>Search</span>
    </button>

    <input
    className={css.input}
    type="text"
    name="query"
    value={this.state.query}
    onChange={this.handleSearchInput}
    autoComplete="off"
    autoFocus
    placeholder="Search images and photos"
    />
    </form>
</header>   
        )
    }
}
Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;




