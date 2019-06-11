import React, { Component } from "react";
import "./PostContainer.css";
import PostsContainer from "./PostsContainer";
import SearchBar from "../SearchBar/SearchBar";
import dummyData from "../../dummy-data.js";

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  logout = () => {
    localStorage.removeItem("Password");
    localStorage.removeItem("Username");
    window.location.reload();
  };

  searchPostsHandler = e => {
    const posts = this.state.posts.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p;
      }
      return null;
    });
    this.setState({ filteredPosts: posts });
  };

  render() {
    return (
      <div>
        <SearchBar
          searchTerm={this.state.searchTerm}
          searchPosts={this.searchPostsHandler}
          logout={this.logout}
        />
        <PostsContainer
          posts={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.posts
          }
        />
      </div>
    );
  }
}
export default PostsPage;
