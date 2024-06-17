import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, getComments, getStatus } from "../../reduxstore/commentsSlice";
import DisplayComment from '../comments/displayComment';
import Styles from './comments.module.css';
    

const Comments = (props) => {
    const dispatch = useDispatch();
    const comments = useSelector(getComments);
    const status = useSelector(getStatus);

    useEffect(() => {
        dispatch(fetchComments(props.postId))
    },[dispatch,(props.postId)])


  return (
    <div className={Styles.container}>
        {comments && status === 'succeeded'? comments.map(comment => (
            <DisplayComment comments={comment} postId={props.postId} key={props.id} />
        )): null}
    </div>
  )
}

export default Comments;