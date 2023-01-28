import React from "react";
import styled from "styled-components";
import { latestRecepies } from "../staticData/data";
import "../styles/reset.css";
import "../styles/Global.css";

const Wrapper = styled.div`
  text-align: center;
  padding: 45px 0 35px;
`;

const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 10px;
`;

const Title = styled.h3`
  color: #319b59;
  font-family: "Roboto Slab", serif;
  font-size: 35px;
  line-height: 51px;
  padding-bottom: 25px;
  margin-bottom: 25px;
  position: relative;
  font-weight: 600;
  &::after {
    content: "";
    position: absolute;
    width: 250px;
    height: 1px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    background: #6d7278;
  }
`;

const Subtitle = styled.p`
  max-width: 730px;
  margin: 0 auto 30px;
`;

const Collection = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 30px;
  padding-bottom: 70px;
`;

//.................

const CollectionImage = styled.img`
  min-height: 350px;
  object-fit: cover;
  max-width: 350px;
  max-height: 350px;
`;

const CollectionInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(#fff, 0.7);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.5s;
`;

const CollectionItem = styled.a`
  text-decoration: none;
  position: relative;
  &:hover ${CollectionInfo} {
    background-color: #a9b9a999;
    opacity: 1;
  }
`;

const CollectionInfoTitle = styled.h6`
  font-size: 20px;
  line-height: 25px;
  color: #000;
  padding-bottom: 19px;
  margin-bottom: 19px;
  position: relative;
  font-weight: 400;
  &::after {
    content: "";
    bottom: 0;
    position: absolute;
    height: 1px;
    background: #000;
    width: 80%;
    margin: 0 auto;
    left: 0;
    right: 0;
  }
`;

const CollectionInfoText = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: #000;
`;

const Recepies = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Great outdoors Recipes</Title>
        <Subtitle>
          Deep v you probably haven't heard of them banh mi synth actually
          affogato. Aesthetic lyft ethical drinking vinegar austint
        </Subtitle>
        <Collection>
          {latestRecepies.map((item) => (
            <CollectionItem key={item.id} href="#">
              <CollectionImage src={item.image} alt="" />
              <CollectionInfo className="collection__Info">
                <CollectionInfoTitle>{item.title}</CollectionInfoTitle>
                <CollectionInfoText>{item.text}</CollectionInfoText>
              </CollectionInfo>
            </CollectionItem>
          ))}
        </Collection>
      </Container>
    </Wrapper>
  );
};

export default Recepies;
