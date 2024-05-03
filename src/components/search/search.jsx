import React from 'react';
import Styles from './search.module.css';

const SearchBar = () => {
    return (
        <form className={Styles.search}>
        <input type='text' placeholder='Search' name='search'/>
        </form>
    )
};

export default SearchBar;