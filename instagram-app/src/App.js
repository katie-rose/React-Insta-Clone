import React from "react";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import PropTypes from "prop-types";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    });
  }

  toggleLike = id => {
    const updateData = this.state.data.map(post => {
      if (post.id === id) {
        if (post.liked === true) {
          post.likes -= 1;
          post.liked = false;
          return post;
        } else {
          post.likes += 1;
          post.liked = true;
          return post;
        }
      } else {
        return post;
      }
    });

    this.setState({
      data: updateData
    });

    console.log(this.state.data);
  };

  render() {
    return (
      <div className="App">
        <div>
          <SearchBar />
        </div>
        {this.state.data.map(post => {
          return (
            <PostContainer
              key={post.id}
              post={post}
              toggleLike={this.toggleLike}
            />
          );
        })}
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string
  })
};

export default App;
