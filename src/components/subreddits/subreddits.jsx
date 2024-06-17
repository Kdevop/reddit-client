import React, { useEffect } from 'react';
import SubredditsCard from '../cards/subredditCard';
import Styles from './subreddits.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectedSubreddits, fetchSubreddits } from '../../reduxstore/subredditSlice';

const Subreddits = () => {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectedSubreddits);

    useEffect(() => {
        dispatch(fetchSubreddits());
    }, [dispatch]);
      
    return ( 
        
        <div className={Styles.subred}>
            <h2 className={Styles.SRHeading}>Subreddits</h2>

            <div className={Styles.scardcontainer}>
                <div className={Styles.griditemsc}>
                    {subreddits && subreddits.map((subreddit) => (
                        <SubredditsCard
                            key={subreddit.id}
                            icon={subreddit.iconImg}
                            alt={subreddit.display_name}
                            name={subreddit.display_name}
                            url={subreddit.url}
                            communityImg={subreddit.communityIcon}
                            className={Styles.subcard}
                        />

                    ))

                    }
                </div>
            </div>
        </div>
    )
};

export default Subreddits; 
