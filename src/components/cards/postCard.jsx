import React from 'react';
import Comment from '../comments/comments';
import Styles from './postCard.module.css';
import TestImage from '../../assets/image-solid.png';
import ArrowUp from '../../assets/arrow-up-solid.png';
import ArrowDown from '../../assets/arrow-down-solid.png';
import Comments from '../../assets/comment-solid.png';

const PostCard = () => {
    return (
            <div className={Styles.postCard}>
                <div>
                    <h2>r/this is a post</h2>
                </div>
                <div className={Styles.imagecontainer}>
                    <aside className={Styles.ratingcontainer}>
                    <img src={ArrowUp} className={Styles.arrow} alt='arrow up'/>
                    <h3>5.5K</h3>
                    <img src={ArrowDown} className={Styles.arrow} alt='arrow down'/>
                    </aside>
                    <img src={TestImage} className={Styles.testimage} alt='Image from post'/>
                </div>
                <div className={Styles.author}>
                    <p>posted by</p>
                    <img src={Comments} className={Styles.commentimg} alt='comment button'/>
                </div>
                <div>
                    <Comment/>
                </div>
            </div>
            
    )
};

export default PostCard