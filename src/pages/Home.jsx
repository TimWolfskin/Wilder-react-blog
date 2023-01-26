import React from "react";
import Banner from "../components/Banner";
import Decor from "../components/Decor";
import Header from "../components/Header";
import Inspiration from "../components/Inspiration";
import LatestPosts from "../components/LatestPosts";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <LatestPosts />
      <Decor />
      <Inspiration />
    </div>
  );
};

export default Home;
