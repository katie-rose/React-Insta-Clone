import React, { Component } from "react";
import "./Login.css";
import Posts from "./components/PostContainer/Post";
import Login from "./components/Login/Login";
import Auth from "./components/Authenticate/Auth";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

const ComponentFromWithAuthenticate = Auth(Posts)(Login);

export default LoginPage