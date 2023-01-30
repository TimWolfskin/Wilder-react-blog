import React from "react";
import styled from "styled-components";
import "../../styles/reset.css";
import "../../styles/Global.css";
import Post from "./Post";

const Container = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 10px;
`

const Wrapper = styled.div`
    flex: 9;
    display: flex;
    flex-wrap: wrap;
    margin: 20px;
`

const AllPosts = () => {
  return (
    <Container>
      <Wrapper>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Wrapper>
    </Container>
  );
};

export default AllPosts;
