import React, {useEffect, useState} from 'react';
import Styles from './postCard.module.css';
import ArrowUp from '../../assets/arrow-up-solid.png';
import ArrowDown from '../../assets/arrow-down-solid.png';
import CommentsImg from '../../assets/comment-solid.png';  
import Skeleton from 'react-loading-skeleton';
import Comments from '../comments/comments';
import { fetchPostComments } from '../../reduxstore/commentsSlice';
import { useDispatch } from 'react-redux';


const PostCard = (props) => {
    const dispatch = useDispatch();
    const [showComments, setShowComments] = useState(false);


        const shortenNumber = (num, digits) => {
        const units = ['K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];

        for (let i = units.length -1; i >=0; i--) {
            const decimal = 1000 ** (i + 1);

            if (num <= -decimal || num >= decimal) {
                return +(num / decimal).toFixed(digits) + units[i];
            }
        }

        return num;
    }

    useEffect(() => {
        dispatch(fetchPostComments(props.id));
    }, [showComments]);
    
    const displayComments = () => {
       setShowComments(!showComments);
    };


    return (
            <div className={Styles.postCard}>
                <div>
                    <h2 className={Styles.PostHeading}>{props.title}</h2>
                </div>
                <div className={Styles.imagecontainer}>
                    <aside className={Styles.ratingcontainer}>
                        <img src={ArrowUp} className={Styles.arrow} alt='arrow up'/>
                        <h3>{shortenNumber(props.likes, 1) || <Skeleton/>}</h3>
                        <img src={ArrowDown} className={Styles.arrow} alt='arrow down'/>
                    </aside>
                    <div className={Styles.contentcontainer}>
                        {props.img ? (
                            <img src={props.img ||<Skeleton/>} className={Styles.postimage} alt='Image from post'/>
                        ) : (
                            <p>{props.words || <Skeleton/>}</p>
                        )}
                        
                        
                    </div>
                </div>
                <div className={Styles.author}>
                    <p>{props.author}</p>
                    <button type='button' className={Styles.commentsbutton} onClick={displayComments}><img src={CommentsImg} className={Styles.commentimg} alt='comment button'/></button>
                    
                </div>
                {showComments ? <Comments /> : null}
                
            </div>
            
    )
};

export default PostCard;

// key={comments.id}
// author={comments.data.author}
// comment={comments.data.body}
// created={comments.data.created_utc}
