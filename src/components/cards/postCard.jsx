import React, { useEffect, useState } from 'react';
import Styles from './postCard.module.css';
import ArrowUp from '../../assets/arrow-up-solid.png';
import ArrowDown from '../../assets/arrow-down-solid.png';
import CommentsImg from '../../assets/comment-solid.png';
import Skeleton from 'react-loading-skeleton';
import Comments from '../comments/comments';

const PostCard = (props) => {
    const [showComments, setShowComments] = useState(false);

    const shortenNumber = (num, digits) => {
        const units = ['K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];

        for (let i = units.length - 1; i >= 0; i--) {
            const decimal = 1000 ** (i + 1);

            if (num <= -decimal || num >= decimal) {
                return +(num / decimal).toFixed(digits) + units[i];
            }
        }
        return num;
    }

    const displayComments = () => {
        setShowComments(!showComments);
    };

    const renderMedia = () => {
        if (props.post.is_video && props.post.media && props.post.media.reddit_video) {
            return (
                <video
                    className="ratio ratio-16x9 border rounded"
                    src={props.post.media.reddit_video.fallback_url}
                    type='videa/mp4'
                    preload="auto"
                    controls
                    style={{ maxWidth: '100%', maHeight: '100%' }}
                ></video>
            )
        }
        if (props.post.preview && props.post.preview.images && props.post.preview.images[0]) {
            return (
                <img src={props.post.preview.images[0].source.url.replace("&amp;", "&")} className={Styles.postimage} alt={props.post.title} />
            )
        }
        if (props.post.thumbnail && props.post.thumbnail !== "self" && props.post.thumbnail !== "default") {
            <img
                className="post"
                src={props.post.thumbnail.replace("&amp;", "&")}
                alt={props.post.title}
            />
        } else {
            return (
                <p className={Styles.selfText}>{props.post.selftext}</p>
            )
        }
    }


    return (
        <div className={Styles.postCard}>
            <div>
                <h2 className={Styles.PostHeading}>{props.post.title}</h2>
            </div>
            <div className={Styles.imagecontainer}>
                <aside className={Styles.ratingcontainer}>
                    <img src={ArrowUp} className={Styles.arrow} alt='arrow up' />
                    <h3>{shortenNumber(props.post.ups, 1) || <Skeleton />}</h3>
                    <img src={ArrowDown} className={Styles.arrow} alt='arrow down' />
                </aside>
                <div className={Styles.contentcontainer}>
                    {renderMedia()}
                </div>
            </div>
            <div className={Styles.author}>
                <p>{props.post.author}</p>
                <button type='button' className={Styles.commentsbutton} onClick={displayComments}><img src={CommentsImg} className={Styles.commentimg} alt='comment button' /></button>

            </div>
            {showComments ? <Comments postId={props.post.id} /> : null}

        </div>

    )
};

export default PostCard;

