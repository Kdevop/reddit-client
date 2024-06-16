import React from "react";



const DisplayComment = ({ comments }) => {
    return (
        <div>
            <div>
                {comments.author} {comments.time}
            </div>
            <div>
                {comments.body}
            </div>
        </div>
    );
};


export default DisplayComment;