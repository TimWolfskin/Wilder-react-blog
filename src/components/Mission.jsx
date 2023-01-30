import React from "react";
import styled from "styled-components";
import "../styles/reset.css";
import "../styles/Global.css";

const Wrapper = styled.div`
  background-image: url("https://www.egov.com/wp-content/uploads/2021/03/iStock-618465922-scaled.jpg");
  background-color: #f6f8fa;
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: left 82%;
  margin-bottom: 200px;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 10px;
`;

const WrapperInner = styled.div`
  max-width: 470px;
  margin-left: auto;
  padding: 100px 0 190px;
`;

const Title = styled.h3`
  font-size: 60px;
  line-height: 75px;
  font-weight: 700;
  letter-spacing: -1.65px;
  color: #319b59;
  font-family: "Roboto Slab", serif;
  text-align: center;
  max-width: 430px;
  margin-bottom: 30px;
`;

const TextWrapper = styled.p`
  margin-bottom: 25px;
`;

const Text = styled.p`
  font-family: "Roboto Slab", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: #5a5a5a;
  margin-bottom: 25px;
`;

const Mission = () => {
  return (
    <Wrapper>
      <Container>
        <WrapperInner>
          <Title>Our Mission</Title>
          <TextWrapper>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              odit corporis doloremque id repudiandae voluptates autem qui nisi
              corrupti est quis suscipit assumenda aperiam, ratione sint? At
              sequi perspiciatis consequuntur? Unde maiores odio dicta fugit
              distinctio ad dolore
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              odit corporis doloremque id repudiandae voluptates autem qui nisi
              corrupti est quis suscipit assumenda aperiam, ratione sint? At
            </Text>
            <Text>Lorem ipsum dolor sit amet consectetur!</Text>
          </TextWrapper>
        </WrapperInner>
      </Container>
    </Wrapper>
  );
};

export default Mission;
