import React from 'react';
import Styles from './subredditCard.module.css';
import Logo from '../../assets/square-reddit.png';

const SubredditsCard = () => {
    return (
        <div className={Styles.card}>
            <div>r/subredditcard</div>
            <img src={Logo} className={Styles.scardimg} alt='Image logo for sunbreddit'/>
        </div>
    )
};

export default SubredditsCard