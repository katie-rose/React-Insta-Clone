import React from "react";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer"
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

  filterResults = e => {
    let currentPosts = [];
    let filteredPosts = [];
    if (e.target.value !== "") {
      currentPosts = this.state.data;
      filteredPosts = currentPosts.filter(item => {
        const lcUsername = item.username.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lcUsername.includes(filter);
      });
    } else {
      filteredPosts = this.state.data;
    }
    this.setState({ filtered: filteredPosts });
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
