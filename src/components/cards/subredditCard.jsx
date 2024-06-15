import React from 'react';
import Styles from './subredditCard.module.css';
import {fetchSubredditPost} from '../../reduxstore/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, createSearchParams } from 'react-router-dom';

const SubredditsCard = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    
    const getSubRedPost = (e) => {
        e.preventDefault();
                
        dispatch(fetchSubredditPost(props.url))
    

        const subrednav = {
            name: props.name,
        }

        const subNav = createSearchParams(subrednav);

        navigate({
            pathname: '/subreddit',
            search: `?${subNav.toString()}` 
        })
    }

    return (

        <div className={Styles.card}>
            <div>{props.name}</div>
            <button type='button' onClick={getSubRedPost}><img src={props.icon} className={Styles.scardimg} alt={`${props.alt}`}/></button>
        </div>
    )
}; 

export default SubredditsCard