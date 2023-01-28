import React from "react";
import Banner from "../components/Banner";
import Decor from "../components/Decor";
import Header from "../components/Header";
import Inspiration from "../components/Inspiration";
import LatestPosts from "../components/LatestPosts";
import NewestPhoto from "../components/NewestPhoto";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <LatestPosts />
      <Decor />
      <Inspiration />
      <NewestPhoto />
    </div>
  );
};

export default Home;
