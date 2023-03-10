import React from "react";
import styled from "styled-components";
import "../styles/reset.css";
import "../styles/Global.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GalleryPhoto from "../components/GalleryPhoto";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Gallery = () => {
  return (
    <Wrapper>
      <Header />
      <GalleryPhoto />
      <Footer />
    </Wrapper>
  );
};

export default Gallery;
