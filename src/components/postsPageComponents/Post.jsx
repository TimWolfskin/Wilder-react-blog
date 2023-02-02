import React from "react";
import styled from "styled-components";
import "../../styles/reset.css";
import "../../styles/Global.css";
import { postItems } from "../../staticData/data";
import { Link } from "react-router-dom";

const BlogItems = styled.div``;

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

const Button = styled.button`
  background: #1aab8a;
  color: #fff;
  border: none;
  position: relative;
  font-size: 16px;
  line-height: 24px;
  padding: 5px;
  margin-top: 10px;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
  &:hover {
    background: #fff;
    color: #1aab8a;
  }
`;

const Post = ({ props }) => {
  return (
    <BlogItems>
      {postItems.map((item) => (
        <BlogItem key={item.id}>
          <BlogItemImage src={item.image} alt="" />
          <BlogItemInfo>
            <BlogItemDate>{item.date}</BlogItemDate> |
            <BlogItemAuthor href="#">by {item.author}</BlogItemAuthor> |
            <BlogItemTheme href="#">{item.theme}</BlogItemTheme>
          </BlogItemInfo>
          <BlogItemLink>
            <BlogItemTitle>{item.title}</BlogItemTitle>
          </BlogItemLink>
          <BlogItemText>{item.text}</BlogItemText>
          <Link className="link" to={`/singlepost/${item.id}`}>
            <Button> View Details</Button>
          </Link>
        </BlogItem>
      ))}
    </BlogItems>
  );
};

export default Post;
