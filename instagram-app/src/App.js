import React from 'react';
import dummyData from "./dummy-data";
import './App.css';
import SearchBar from "./src/SearchBar";
// import CommentSection from "./src/CommentSection";


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
        <header>
          <SearchBar />
        </header>
        <div className="post-container">
          <dummyData PostContainer={this.state.data} />
          {/* <CommentSection /> */}
        </div>
      </div>
    );
  }
}


export default App;
