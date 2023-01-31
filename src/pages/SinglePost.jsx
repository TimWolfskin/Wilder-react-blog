import React from "react";
import styled from "styled-components";
import "../styles/reset.css";
import "../styles/Global.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Single from "../components/postsPageComponents/Single";

const Wrapper = styled.div`
  flex: 9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;



function SinglePost() {
  return (
    <Wrapper>
        <Header />
        <Single />
      <Footer />
    </Wrapper>
  );
}

export default SinglePost;