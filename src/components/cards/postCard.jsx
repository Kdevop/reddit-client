import React from 'react';
import Comment from '../comments/comments';
import Styles from './postCard.module.css';
import TestImage from '../../assets/image-solid.png';
import ArrowUp from '../../assets/arrow-up-solid.png';
import ArrowDown from '../../assets/arrow-down-solid.png';
import Comments from '../../assets/comment-solid.png';  


const PostCard = (props) => {
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
    
    
    return (
            <div className={Styles.postCard}>
                <div>
                    <h2 className={Styles.PostHeading}>{props.title}</h2>
                </div>
                <div className={Styles.imagecontainer}>
                    <aside className={Styles.ratingcontainer}>
                        <img src={ArrowUp} className={Styles.arrow} alt='arrow up'/>
                        <h3>{shortenNumber(props.likes, 1)}</h3>
                        <img src={ArrowDown} className={Styles.arrow} alt='arrow down'/>
                    </aside>
                    <div className={Styles.contentcontainer}>
                        {props.img ? (
                            <img src={props.img} className={Styles.postimage} alt='Image from post'/>
                        ) : (
                            <p>{props.selftext}</p>
                        )}
                        
                        
                    </div>
                </div>
                <div className={Styles.author}>
                    <p>{props.author}</p>
                    <img src={Comments} className={Styles.commentimg} alt='comment button'/>
                </div>
                <div>
                    <Comment/>
                </div>
            </div>
            
    )
};

export default PostCard;

// code from yesterday when tryin to sort posts.
// const PostCard = (props) => {
//     return (
//         <div className={Styles.postCard}>
//             <div className={Styles.titlecontainer}> 
//                 <h2 className={Styles.PostHeading}>{props.post}</h2>
//             </div>
//             <div className={Styles.imagecontainer}>
//                 <aside className={Styles.ratingcontainer}>
//                     <img src={ArrowUp} className={Styles.arrow} alt='arrow up' />
//                     <h3>{props.likes}</h3>
//                     <img src={ArrowDown} className={Styles.arrow} alt='arrow down' />
//                 </aside>
//                 <div className={Styles.testimage}>
//                     {post.data.url_overridden_by_dest ? (<img src={props.img} className={Styles.postimg}  alt='K TO SORT' />) : <p>{props.words}</p>}
                    
//                 </div>
//             </div>
//             <div className={Styles.author}>
//                 <p>posted by {props.author}</p>
//                 <img src={Comments} className={Styles.commentimg} alt='comment button' />
//             </div>
//             <div>
//                 <Comment />
//             </div>
//         </div>

//     )
// };

// export default PostCard