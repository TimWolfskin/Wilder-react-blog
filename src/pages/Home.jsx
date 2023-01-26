import React from "react";
import Banner from "../components/Banner";
import Decor from "../components/Decor";
import Header from "../components/Header";
import LatestPosts from "../components/LatestPosts";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <LatestPosts />
      <Decor />
    </div>
  );
};

export default Home;
