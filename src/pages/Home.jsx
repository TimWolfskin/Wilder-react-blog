import React from "react";
import Banner from "../components/Banner";
import Decor from "../components/Decor";
import Header from "../components/Header";
import Inspiration from "../components/Inspiration";
import LatestPosts from "../components/LatestPosts";
import Mission from "../components/Mission";
import NewestPhoto from "../components/NewestPhoto";
import Recepies from "../components/Recepies";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <LatestPosts />
      <Decor />
      <Inspiration />
      <NewestPhoto />
      <Recepies />
      <Mission />
    </div>
  );
};

export default Home;
