import React from 'react';
import dummyData from "./dummy-data";
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';
// import CommentSection from "./src/CommentSection


class App extends React.Component {
   constructor() {
    super();
    this.state = {
      data: dummyData
   };
  }


  render() {
    return (
      <div className="App">
        <h1>This is App.js</h1>
    {this.state.data.map(post => (
    <PostContainer post={post} key={post.id}/>
    ))}
      </div> 
    );
  }
}

export default App;
