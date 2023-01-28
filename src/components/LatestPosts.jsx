import styled from "styled-components";
import "../styles/reset.css";
import "../styles/Global.css";
import { latestBlogItems } from "../staticData/data";

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 10px;
`;

const BlogBox = styled.div`
  padding-bottom: 50px;
  display: flex;
  position: relative;
  overflow: hidden;
  margin-top: 50px;
  margin-bottom: 100px;
`;

const BlogBoxTitle = styled.h3`
  color: #319B59;
  font-family: "Roboto Slab", serif;
  font-size: 36px;
  line-height: 51px;
  margin: 0 auto 30px;
  text-align: center;
  max-width: 430px;
  font-weight: 600;
`;

const BlogBoxItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 40px;
`;

const BlogBoxImgLink = styled.a`
  margin-bottom: 19px;
  display: inline-block;
`;

const BlogBoxItem = styled.div``;

const BlogBoxImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;

const BlogBoxLinks = styled.div`
  margin-bottom: 9px;
  font-size: 14px;
  font-weight: 600;
  color: #707070;
`;

const BlogBoxDate = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: #707070;
`;

const BlogBoxAuthor = styled.a`
  font-weight: 600;
  font-size: 14px;
  color: #707070;
  text-decoration: none;
`;

const BlogBoxTheme = styled.a`
  font-weight: 600;
  font-size: 14px;
  color: #707070;
  text-decoration: none;
`;

const BlogBoxItemTitleLink = styled.a`
  text-decoration: none;
`;

const BlogBoxItemTitle = styled.h4`
  color: #151c2c;
  font-family: "Roboto Slab", serif;
  font-size: 24px;
  line-height: 38px;
  max-width: 300px;
`;

const LatestPosts = () => {
  return (
    <BlogBox>
      <Container>
        <BlogBoxTitle>Best inspiration posts in this week</BlogBoxTitle>
        <BlogBoxItems>
          {latestBlogItems.map((item) => (
            <BlogBoxItem key={item.id}>
              <BlogBoxImgLink href="#">
                <BlogBoxImage src={item.image} alt="" />
              </BlogBoxImgLink>
              <BlogBoxLinks>
                <BlogBoxDate>{item.date}</BlogBoxDate>|
                <BlogBoxAuthor href="#">{item.Author}</BlogBoxAuthor>|
                <BlogBoxTheme href="#">{item.Theme}</BlogBoxTheme>
              </BlogBoxLinks>
              <BlogBoxItemTitleLink href="#">
                <BlogBoxItemTitle>{item.Title}</BlogBoxItemTitle>
              </BlogBoxItemTitleLink>
            </BlogBoxItem>
          ))}
        </BlogBoxItems>
      </Container>
    </BlogBox>
  );
};

export default LatestPosts;
