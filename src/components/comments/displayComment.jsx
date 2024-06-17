import React from "react";
import Styles from './displayComment.module.css';

const DisplayComment = ({ comments }) => {
     
    return (
        <div className={Styles.container}>
            <div className={Styles.titlecont}>
                {comments.author} {new Date(comments.time * 1000).toLocaleString()}
            </div>
            <div className={Styles.commentbody}>
                {comments.body}
            </div>
        </div>
    );
};


export default DisplayComment;


