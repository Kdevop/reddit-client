import React from 'react';
import Styles from './subredditCard.module.css';
import Logo from '../../assets/square-reddit.png';

const SubredditsCard = (props) => {
    return (
// Here is how they did it

        // <div>{props.children}</div>

// Here is how I  tired to do it 
        <div className={Styles.card}>
            <div>{props.name}</div>
            <img src={props.icon} className={Styles.scardimg} alt={`${props.alt}`}/>
        </div>
    )
}; 

export default SubredditsCard