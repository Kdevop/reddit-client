import React from 'react';
import SearchBar from '../search/search';
import styles from './header.module.css';
import logo from '../../assets/square-reddit.png';


// mockdata at the following end point where 'happy' will be the {term}
// https://www.reddit.com/search.json?q=$happy
// just needed somewhere to put this


const Header = () => {
    return (
        <div className={styles.navbar} >
        <img src={logo} alt='Reddit Logo imgage.'/>
        <h1><span>Reddit</span>Search</h1>
        <SearchBar/>
        </div>
)};

export default Header;