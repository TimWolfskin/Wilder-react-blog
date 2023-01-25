import React from "react";
import styled from "styled-components";
import "../styles/reset.css";
import "../styles/Global.css";

const BlogItem = styled.div`
  margin-bottom: 80px;
`;
const BlogItemImage = styled.img`
  max-width: 730px;
  border-radius: 5px;
`;
const BlogItemInfo = styled.div`
  padding: 25px 0 10px;
  font-weight: 600;
  font-size: 14px;
  color: #707070;
`;

const BlogItemTitle = styled.h6`
  font-size: 24px;
  line-height: 38px;
  margin-bottom: 6px;
  color: #151c2c;
  font-family: "Roboto Slab", serif;
`;

const BlogItemLink = styled.a`
  text-decoration: none;
`;
const BlogItemDate = styled.span``;

const BlogItemAuthor = styled.a`
  font-weight: 600;
  font-size: 14px;
  color: #707070;
  text-decoration: none;
`;

const BlogItemTheme = styled.a`
  font-weight: 600;
  font-size: 14px;
  color: #707070;
  text-decoration: none;
`;
const BlogItemText = styled.p`
  font-family: "Roboto Slab", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: #5a5a5a;
  max-width: 700px;
`;

const Post = () => {
  return (
    <BlogItem>
      <BlogItemImage
        src="https://www.miamiandbeaches.com/getmedia/460de76a-147f-492e-abdc-926d4a8e0c61/Oleta_State_River_Park_Ecoadventure_1-06-21.jpg"
        alt=""
      />
      <BlogItemInfo>
        <BlogItemDate>August 15, 2020</BlogItemDate> |
        <BlogItemAuthor href="#">by Ann Summers</BlogItemAuthor> |
        <BlogItemTheme href="#">Canoeing, kayaking and rafting</BlogItemTheme>
      </BlogItemInfo>
      <BlogItemLink>
        <BlogItemTitle>
          Red selfies edison bulb four dollar toast humblebrag for the furniture
        </BlogItemTitle>
      </BlogItemLink>
      <BlogItemText>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex,
        architecto? Voluptates ut sunt, quas sint ratione, aspernatur totam
        dolor molestias aliquam optio veritatis ea assumenda! Quidem atque illum
        fugit vero. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Ex, architecto? Voluptates ut sunt, quas sint ratione, aspernatur totam
        dolor molestias aliquam optio veritatis ea assumenda! Quidem atque illum
        fugit vero.
      </BlogItemText>
    </BlogItem>
  );
};

export default Post;
