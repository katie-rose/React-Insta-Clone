import React from "react";
import "./CommentSection.css";
import PropTypes from 'prop-types';

const Comment = ({ comment:{username, text}}) => {
    return (
<div className="comment">
    <div className="commentUser">{username}</div>
    <div className="commentText">{text}</div>
</div>
);
}
Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
};

export default Comment;
