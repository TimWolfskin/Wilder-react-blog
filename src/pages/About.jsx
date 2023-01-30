import React from "react";
import styled from "styled-components";
import "../styles/reset.css";
import "../styles/Global.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const About = () => {
  return (
    <Wrapper>
      <Header />
      <Footer />
    </Wrapper>
  );
};

export default About;
