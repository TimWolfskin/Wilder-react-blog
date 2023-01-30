import React from "react";
import styled from "styled-components";
import "../styles/reset.css";
import "../styles/Global.css";
import AllPosts from "../components/AllPosts";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;


const InnerWrapper = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 10px;
  
`;

const Posts = () => {
  return (
    <Wrapper>
      <Header />
      <InnerWrapper>
        <AllPosts />
        <Sidebar />
      </InnerWrapper>
      <Footer />
    </Wrapper>
  );
};

export default Posts;
