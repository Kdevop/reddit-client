import React, { useState } from 'react';
import SearchBar from '../search/search';
import styles from './header.module.css';
import logo from '../../assets/square-reddit.png';
import { NavLink } from 'react-router-dom';
import burgermenu from '../../assets/bars-solid.png';
import Subreddits from '../subreddits/subreddits';


// mockdata at the following end point where 'happy' will be the {term}
// https://www.reddit.com/search.json?q=$happy


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const clickButton = () => {
        setIsOpen(!isOpen)
    }

    const display = {
        transition: 'all 0.6s ease-in-out',
        transform: isOpen ? "translateY(0)" : "translateY(-200%)",
        position: 'absolute',
        zIndex: isOpen ? 1000 : -1000
    }


    return (
        <div>
            <div className={styles.navbar} >
                <NavLink to='/'><img src={logo} alt='Reddit Logo imgage.' /></NavLink>
                <h1><span>Reddit</span>Search</h1>
                <SearchBar />
            </div>
            <div className={styles.navbarmob}>
                <button type='button' onClick={clickButton} className={styles.menubtn}><img src={burgermenu} alt='subreddit menu' className={styles.menubtn}/></button>
                <SearchBar className={styles.search}/>
                <NavLink to='/'><img src={logo} alt='Reddit Logo imgage.' /></NavLink>
            </div>
            <div className={styles.subredmob} style={display}>
                <Subreddits />
            </div>
        </div>


    )
};

export default Header;