import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
import styled from "styled-components";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      inputText: ""
    };
  }

  addNewComment = event => {
    event.preventDefault();
    if (this.state.inputText) {
      this.setState({
        comments: [
          ...this.state.comments,
          {
            text: this.state.inputText,
            username: localStorage.getItem("Username")
          }
        ],
        inputText: ""
      });
    }
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <Wrapper>
        {this.state.comments.map((c, i) => (
          <Comment key={i} comment={c} />
        ))}
        <CommentInput
          addNewComment={this.addNewComment}
          handleChange={this.handleChange}
          inputText={this.state.inputText}
        />
      </Wrapper>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

const Wrapper = styled.div``;

export default CommentSection;
