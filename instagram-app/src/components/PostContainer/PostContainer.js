import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css";
import PropTypes from "prop-types";

const PostContainer = ({
  post: { username, thumbnailUrl, imageUrl, likes, liked, timestamp, comments }
}) => (
  <Card className="post-container">
    <div className="post">
      <div className="post-heading">
        <img className="thumbnail" src={`${thumbnailUrl}`} alt="thumbnail" />
        <h2 className="user-name">{username}</h2>
      </div>
      <img src={`${imageUrl}`} alt="" />

      <FontAwesomeIcon
        icon={faHeart}
        className={`like${liked === true ? " liked" : ""}`}
      />
      <FontAwesomeIcon icon={faComment} className="comments" />
      <div className="likes">{`${likes} likes`}</div>
    </div>
    <CommentSection comments={comments} />
    <div className="timestamp">{timestamp}</div>
  </Card>
);

PostContainer.propTypes = {
  post: PropTypes.shape({
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string,
    imageURL: PropTypes.string,
    likes: PropTypes.number,
    comments: PropTypes.arrayOf(PropTypes.object),
    timestamp: PropTypes.string
  })
};

export default PostContainer;


