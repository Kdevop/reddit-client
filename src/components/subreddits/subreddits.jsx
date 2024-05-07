import React, { useEffect } from 'react';
import SubredditsCard from '../cards/subredditCard';
import Styles from './subreddits.module.css';
import subredmock from '../../mockdata/mockSubreddits.json';


const Subreddits = () => {
    const subreddits = subredmock.data.children.map((subreddit) => subreddit.data);
      
    return ( 
        // My attempt using my styling

        <div className={Styles.subred}>
            <h2 className={Styles.SRHeading}>Subreddits</h2>

            <div className={Styles.scardcontainer}>
                <div className={Styles.griditemsc}>
                    {subreddits.map((subreddit) => (
                        <SubredditsCard
                            key={subreddit.id}
                            icon={subreddit.icon_img || `https://api.adorable.io/avatars/25/${subreddit.display_name}`}
                            alt={subreddit.display_name}
                            name={subreddit.display_name}
                        />

                    ))

                    }
                </div>
            </div>
        </div>
    )
};

export default Subreddits; 