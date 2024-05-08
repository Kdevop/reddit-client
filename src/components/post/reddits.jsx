import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostCard from '../cards/postCard';
import Styles from './reddits.module.css';
import Skeleton from 'react-loading-skeleton';
import { fetchredditpost, returnedPost } from '../../reduxstore/postSlice'; 
import { useLocation } from 'react-router-dom';

const Reddits = () => {
    // const posts = popredmock.data.children.map((post) => post.data)
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            dispatch(fetchredditpost());
        }
    }, [dispatch, location.pathname]);

    const reddits = useSelector(returnedPost);
    console.log(reddits)

    return (
        <div className={Styles.postcontiner}>
            {reddits.map((post) => {
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


