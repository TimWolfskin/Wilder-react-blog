import React from "react";
import styled from "styled-components";
import "../styles/reset.css";
import "../styles/Global.css";
import AllPosts from "../components/postsPageComponents/AllPosts";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Posts = () => {
  return (
    <Wrapper>
      <Header />
      <AllPosts />
      <Footer />
    </Wrapper>
  );
};

export default Posts;
