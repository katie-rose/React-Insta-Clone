import React from "react";
import { Form, FormControl } from "react-bootstrap";

class CommentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addNewComment = event => {
    event.preventDefault();
    this.props.addNewComment(this.state.text);
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <Form onSubmit={this.addNewComment}>
        <FormControl
          onChange={this.handleChanges}
          value={this.state.text}
          name="text"
          className="addComment"
          type="text"
          placeholder="Add a comment..."
        />
      </Form>
    );
  }
}


export default CommentForm;
