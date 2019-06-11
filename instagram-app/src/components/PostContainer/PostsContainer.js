import React from "react";
import Post from "./Post";
import "./PostContainer.css";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 500px;
  width: 60%;
  margin: 10px auto;
`;

const PostsContainer = props => {
  return (
    <Wrapper>
      {props.posts.map(p => (
        <Post key={p.imageUrl} post={p} />
      ))}
    </Wrapper>
  );
};

export default PostsContainer;


