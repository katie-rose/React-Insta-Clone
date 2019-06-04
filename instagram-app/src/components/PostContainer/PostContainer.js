import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css";

const PostContainer = props => {
    return (
      <div className="post-container">
        <div className="user-info">
          <img
            src={props.post.thumbnailUrl}
            alt="user thumbnail"
            className="user-thumbnail"
          />
          <p className="user-name">{props.post.username}</p>
        </div>
        <img
          src={props.post.imageUrl}
          alt={props.post.username}
          className="post-image"
        />
        <div className="post-icons">
          <i className="far fa-heart" />
          <i className="far fa-comment" />
        </div>
        <b className="post-likes">{props.post.likes} likes</b>
        <CommentSection commentArray={props.post.comments} />
      </div>
    );
};
export default PostContainer;
