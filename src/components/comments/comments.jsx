import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, getComments, getStatus } from "../../reduxstore/commentsSlice";
import DisplayComment from '../comments/displayComment';
    

const Comments = (props) => {
    const dispatch = useDispatch();
    const comments = useSelector(getComments);
    const status = useSelector(getStatus);

    useEffect(() => {
        dispatch(fetchComments(props.postId))
    },[dispatch,(props.postId)])


  return (
    <>
        {comments && status === 'succeeded'? comments.map(comment => (
            <DisplayComment comments={comment} postId={props.postId} />
        )): null}
    </>
  )
}

export default Comments;