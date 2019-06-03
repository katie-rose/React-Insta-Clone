import React from "react";
import Post from "./Post";
import "./postContainer.css";

const PostContainer = props => {
  return (
    <div className="post-container">
      <Post />
    </div>
  );
}

export default PostContainer;
