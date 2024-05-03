import React from 'react';
import SearchBar from '../search/search';
import styles from './header.module.css';
import logo from '../../assets/square-reddit.png';

const Header = () => {
    return (
        <div className={styles.navbar} >
        <img src={logo} alt='Reddit Logo imgage.'/>
        <h1><span>Reddit</span>Search</h1>
        <SearchBar/>
        </div>
)};

export default Header;