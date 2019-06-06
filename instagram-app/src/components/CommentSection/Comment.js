import React from "react";
import "./CommentSection.css";
import PropTypes from "prop-types";
import styled from "styled-components";

const Text = styled.div`
  text-align: left;
  padding: 2px;
  margin-left: 4px;
  font-size: 1rem;
`;

const Comments = styled.span`
  font-weight: normal;
  font-size: 1rem;
`;

const User = styled.span`
  text-align: left;
  font-size: 1rem;
  padding: 1rem 0;
  font-weight: bold;
`;

const Comment = props => {
  return (
    <Text>
      <User>{props.comment.username} </User>
      <Comments>{props.comment.text}</Comments>{" "}
    </Text>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;
