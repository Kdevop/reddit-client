import React, { useEffect } from 'react';
import PostCard from '../cards/postCard';
import Styles from './reddits.module.css';
import Skeleton from 'react-loading-skeleton';
import popredmock from '../../mockdata/mockRedditsPosts.json';

 
const Reddits = () => {
    const posts = popredmock.data.children.map((post) => post.data)
    
    return (
        <div className={Styles.postcontiner}>
            {posts.map((post) => {
                return (
                <PostCard
                    key={post.id}
                    title={post.title}
                    img={post.url_overridden_by_dest}
                    words={post.selftext}
                    author={post.author}
                    likes={post.ups}
                />
                );
            })}
            
            
        </div>
    )
} 

export default Reddits;


