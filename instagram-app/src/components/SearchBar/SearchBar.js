import React from "react";
import LogoText from "../../img/logo.png";
import "./SearchBar.css";
import styled from "styled-components";

const Wrapper = styled.div`
  border-bottom: 1px solid #3333;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  width: 100%;
`;

const SubWrapper = styled.div`
  height: 50px;
  margin: 0 40px;
`;

const Input = styled.input`
  height: 30px;
  border-radius: 5px;
  background: white;
  border-radius: 3px;
  border: 1px solid silver;
  margin: 0 40px;
`;

const LogOutButton = styled.button`
  background: white;
  border-radius: 3px;
  border: 2px solid black;
  color: black;
  padding: 0.25em 1em;
  width: 20%;

  &:hover {
    border: 2px solid blue;
  }
`;


const SearchBar = props => {
  return (
    <Wrapper>
      <SubWrapper>
        <img src={`${LogoText}`} alt="Instagram" className="logo-text" />
      </SubWrapper>
      <Input
       type="text" placeholder="Search" value={props.searchValue} onChange={props.searchHandler}
      />
      <LogOutButton onClick={props.logout}>Log out</LogOutButton>
    </Wrapper>
  );
};

export default SearchBar;
