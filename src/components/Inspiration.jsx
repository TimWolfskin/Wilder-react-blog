import React from "react";
import styled from "styled-components";
import "../styles/reset.css";
import "../styles/Global.css";
import { inspirationItems } from "../staticData/data";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 10px;
`;

const Wrapper = styled.div`
  margin-bottom: 200px;
`;

const Title = styled.h1`
  color: #319B59;
  font-family: "Roboto Slab", serif;
  font-size: 36px;
  line-height: 51px;
  margin: 0 auto 30px;
  text-align: center;
  max-width: 430px;
  font-weight: 600;
`;

const InspirationItems = styled.div`
  display: grid;
  column-gap: 10px;
  row-gap: 15px;
  justify-items: center;
  grid-template-columns: repeat(3, 2fr);
`;

const InspirationItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const InspirationItemLink = styled.a`
  text-decoration: none;
  position: relative;
  color: #00a650;
  cursor: pointer;
  line-height: 1;
  text-decoration: none;

  &:after {
    display: block;
    position: absolute;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #00a650;
    content: "";
    transition: width 0.3s ease-out;
  }

  &:hover:after,
  &:focus:after {
    width: 100%;
  }
`;

const InspirationImage = styled.img`
  height: 450px;
  width: 450px;
  object-fit: cover;
`;

const InspirationItemTitle = styled.h6`
  color: #151c2c;
  font-family: "Roboto Slab", serif;
  font-size: 24px;
  line-height: 38px;
  max-width: 300px;
`;

const InspirationItemTitleSpan = styled.span`
  display: inline-block;
`;

const Inspiration = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Need more inspiration? Look at this...</Title>
        <InspirationItems>
          {inspirationItems.map((item) => (
            <InspirationItem key={item.id}>
              <InspirationItemLink href="#">
                <InspirationImage src={item.image} />
                <InspirationItemTitle>
                  {item.title}
                  <InspirationItemTitleSpan>
                    <ArrowCircleRightOutlinedIcon
                      style={{ marginBottom: "-5px", marginLeft: "20px" }}
                    />
                  </InspirationItemTitleSpan>
                </InspirationItemTitle>
              </InspirationItemLink>
            </InspirationItem>
          ))}
        </InspirationItems>
      </Container>
    </Wrapper>
  );
};

export default Inspiration;
