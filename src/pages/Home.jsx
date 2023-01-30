import React from "react";
import styled from "styled-components";
import "../styles/reset.css";
import "../styles/Global.css";
import Banner from "../components/Banner";
import Decor from "../components/Decor";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Inspiration from "../components/Inspiration";
import LatestPosts from "../components/LatestPosts";
import Mission from "../components/Mission";
import NewestPhoto from "../components/NewestPhoto";
import Recepies from "../components/Recepies";


const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Banner />
      <LatestPosts />
      <Decor />
      <Inspiration />
      <NewestPhoto />
      <Recepies />
      <Mission />
      <Footer />
    </Wrapper>
  );
};

export default Home;
