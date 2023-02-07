import React from "react";
import videoBg from "../../media/banner-video.mp4";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  margin-top: -62px;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
`;
const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`;
const Title = styled.h1`
  font-size: 80px;
  line-height: 76px;
`;

const Subtitle = styled.p`
  font-size: 60px;
  line-height: 56px;
`;

const Banner = () => {
  return (
    <Container>
      <Overlay> </Overlay>
      <Video src={videoBg} autoPlay loop muted />
      <Content>
        <Title>Find Your Inspiration</Title>
        <Subtitle>Create your own way</Subtitle>
      </Content>
    </Container>
  );
};

export default Banner;