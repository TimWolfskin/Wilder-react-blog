import React from "react";
import AllPosts from "../components/AllPosts";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";

const Wrapepr = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 10px;
`;

const Posts = () => {
  return (
    <div>
      <Header />
      <Wrapepr>
        <AllPosts />
        <Sidebar />
      </Wrapepr>
    </div>
  );
};

export default Posts;
