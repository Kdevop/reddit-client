import React from 'react';
import SubredditsCard from '../cards/subredditCard';
import Styles from './subreddits.module.css';

const Subreddits = () => {
    return (
        <div className={Styles.subred}>
            <h2>Subreddits</h2>
            <div className={Styles.scardcontainer}>
            <SubredditsCard/>
            <SubredditsCard/>
            <SubredditsCard/>
            <SubredditsCard/>
            <SubredditsCard/>
            </div>
        </div>
    ) 
};

export default Subreddits;