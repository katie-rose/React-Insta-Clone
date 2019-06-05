import React, { Component } from "react";
import CommentForm from "./CommentForm";
import PropTypes from "prop-types";
import Comment from "./Comment";

class CommentSection extends Component {
  constructor() {
    super();
    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    this.setState({
      comments: this.props.comments
    });
  }

  addNewComment = text => {
    const newComment = {
      id: Date.now(),
      username: "doggosrule",
      text: text
    };

    this.setState(prevState => {
      return {
        comments: [...prevState.comments, newComment]
      };
    });
  };

  render() {
    return (
      <div className="commentSection">
        <div>
          {this.state.comments.map(comment => {
            return (
              <div className="commentSection">
                <Comment key={comment.id} comment={comment} />
              </div>
            );
          })}
        </div>
        <CommentForm addNewComment={this.addNewComment} />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default CommentSection;
