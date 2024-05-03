import React from 'react';
import PostCard from '../cards/postCard';
import Styles from './reddits.module.css';

const Reddits = () => {
    return (
        <div className={Styles.postcontiner}>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
        </div>
    )
} 

export default Reddits;
