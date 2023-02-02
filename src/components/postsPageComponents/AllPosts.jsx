import React from "react";
import styled from "styled-components";
import "../../styles/reset.css";
import "../../styles/Global.css";
import Post from "./Post";
import { postItems } from "../../staticData/data";
import Sidebar from "./Sidebar";

const Container = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 10px;
`;

const Wrapper = styled.div`
  flex: 9;
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
`;

const InnerWrapper = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 10px;
`;

const AllPosts = () => {

  return (
    <Container>
      <InnerWrapper>
        <Wrapper>
          {postItems.map((item) => (
            <Post item={item} key={item.id} />
          ))}
        </Wrapper>
        <Sidebar />
      </InnerWrapper>
    </Container>
  );
};

export default AllPosts;