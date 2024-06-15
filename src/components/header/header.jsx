import React from 'react';
import SearchBar from '../search/search';
import styles from './header.module.css';
import logo from '../../assets/square-reddit.png';
import { NavLink } from 'react-router-dom';


// mockdata at the following end point where 'happy' will be the {term}
// https://www.reddit.com/search.json?q=$happy



const Header = () => {
    return (
        <div className={styles.navbar} >
        <NavLink to='/'><img src={logo} alt='Reddit Logo imgage.'/></NavLink>
        <h1><span>Reddit</span>Search</h1>
        <SearchBar/>
        </div>
)};

export default Header;