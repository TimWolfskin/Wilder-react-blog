import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import LatestPosts from "../components/LatestPosts";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <LatestPosts />
    </div>
  );
};

export default Home;
