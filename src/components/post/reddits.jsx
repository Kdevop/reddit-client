import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostCard from '../cards/postCard';
import Styles from './reddits.module.css';
import { fetchredditpost, returnedPost } from '../../reduxstore/postSlice';
import { useLocation, NavLink } from 'react-router-dom';
import skull from '../../assets/skull-crossbones-solid.png';


const Reddits = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const reddits = useSelector(returnedPost); 
    const redditState = useSelector((state) => state.posts);
    const {error} = redditState;

    useEffect(() => {
        if (location.pathname === '/') {
            dispatch(fetchredditpost());
        }
    }, [dispatch, location.pathname]);



    if (reddits.length === 0 || error) {
        console.log('Current state of reddits:', reddits);
        return (
            <div>
                <NavLink to='/'><img src={skull} alt='skull and crossbones for error'/></NavLink>
                <h3>Oh dear, there appears to be no posts!</h3>
                <p>Hit the skull to go home</p>
            </div>
        )
    }

    return (
        <div className={Styles.postcontiner}>
            {reddits.map((post) => {
                return (
                <PostCard
                    key={post.id}
                    post={post}
                />
                );
            })}
            
            
        </div>
    )
} 

export default Reddits;


