import React from "react";
import LogoText from "../../img/logo.png";
import "./SearchBar.css";
import styled from "styled-components";

const SearchBar = props => {
  return (
    <Wrapper>
      <SubWrapper>
        <img src={`${LogoText}`} alt="Instagram" className="logo-text" />
      </SubWrapper>
      <Input
        type="text"
        placeholder="search by username"
        onKeyUp={props.searchPosts}
      />
      <Button onClick={props.logout}>log out</Button>
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div`
  border-bottom: 1px solid #3333;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
`;

const SubWrapper = styled.div`
  height: 50px;
  margin: 0 40px;
`;

const Image = styled.img`
  height: 100%;
`;

const Input = styled.input`
  height: 30px;
  border-radius: 5px;
  margin: 0 40px;
`;

const Button = styled.button`
  font-size: 14px;
  border-radius: 5px;
  background-color: lightgrey;
  height: 30px;
  margin: 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
