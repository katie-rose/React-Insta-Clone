import React from "react";
import styled from "styled-components";
import LogoText from "../../img/logo.png";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const LoginInput = styled.div`
  background: white;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  margin-top: 10px;
`;

const Button = styled.button`
  background: black;
  border-radius: 3px;
  border: 2px solid black;
  color: white;
  padding: 0.25em 1em;
  margin-top: 15px;
  width: 100%;

  &:hover {
    border: 2px solid blue;
  }
`;

class Login extends React.Component {
  login = event => {
    localStorage.setItem("Username", event.target.username.value);
    localStorage.setItem("Password", event.target.password.value);
  };

  render() {
    return (
      <LoginContainer>
        <img
          src={`${LogoText}`}
          alt="instagram logo"
          style={{ width: "300px", textAlign: "center" }}
        />
        <form onSubmit={this.login}>
          <LoginInput>
            <input name="username" type="text" placeholder="Username"/>
          </LoginInput>
          <LoginInput>
            <input name="password" type="password" placeholder="Password"/>
          </LoginInput>
          <Button>Login</Button>
        </form>
      </LoginContainer>
    );
  }
}

export default Login;
