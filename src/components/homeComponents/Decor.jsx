import React from "react";
import styled from "styled-components";
import "../../styles/reset.css";
import "../../styles/Global.css";

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 10px;
  margin: 20px;
`;

const Wrapper = styled.div`
  padding: 170px 0 155px;
  background-image: url("https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 100px;
`;
const Title = styled.h1`
  max-width: 730px;
  font-size: 60px;
  line-height: 80px;
  padding-bottom: 22px;
  position: relative;
  color: #151c2c;
  font-family: "Roboto Slab", serif;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 200px;
    height: 1px;
    bottom: 0;
    background: #6d7278;
  }
`;

const Text = styled.h2`
  max-width: 540px;
`;

const Decor = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Aesthetic ethical drinking</Title>
        <Text>
          Deep v you probably haven't heard of them banh mi synth actually
          affogato. Artlyft ethical the one drinking vinegar austint
        </Text>
      </Container>
    </Wrapper>
  );
};

export default Decor;
