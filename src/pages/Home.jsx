import React from "react";
import styled from "styled-components";
import "../styles/reset.css";
import "../styles/Global.css";
import Banner from "../components/homeComponents/Banner";
import Decor from "../components/homeComponents/Decor";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Inspiration from "../components/homeComponents/Inspiration";
import LatestPosts from "../components/homeComponents/LatestPosts";
import Mission from "../components/homeComponents/Mission";
import NewestPhoto from "../components/homeComponents/NewestPhoto";
import Recepies from "../components/homeComponents/Recepies";


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
