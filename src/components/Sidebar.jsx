import React from "react";
import styled from "styled-components";
import "../styles/reset.css";
import "../styles/Global.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 10px;
  margin: 20px;
`;

const Aside = styled.aside`
  width: 350px;
  margin-left: 30px;
`;

const AsideSearch = styled.form`
  position: relative;
  margin-bottom: 40px;
`;

const AsideSearchInput = styled.input`
  padding: 6px 45px 6px 18px;
  border: 1px solid #167d23;
  border-radius: 20px;
  display: block;
  width: 100%;
  &::placeholder {
    font-family: "Roboto Slab", serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 27px;
    color: #a1a1a1;
  }
`;

const AsideSearchButton = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 4px;
  right: 3px;
  cursor: pointer;
`;

const BlogCategory = styled.div`
  padding: 60px 0 100px;
`;

const BlogCategoryTitle = styled.h6`
  margin-bottom: 16px;
  color: #151c2c;
  font-family: "Roboto Slab", serif;
  line-height: 23px;
`;

const BlogCategoryList = styled.ul`
  list-style: none;
`;

const BlogCategoryItem = styled.li`
  margin-bottom: 12px;
`;
const BlogCategoryLink = styled.a`
  color: #444;
`;

const RecentPosts = styled.div`
  margin-bottom: 40px;
`;

const RecentPostsTitle = styled.h6`
  margin-bottom: 24px;
  color: #151c2c;
  font-family: "Roboto Slab", serif;
  line-height: 23px;
`;

const RecentPostsList = styled.ul`
  list-style: none;
`;

const RecentPostsItem = styled.li`
  margin-bottom: 11px;
`;

const RecentPostsItemTitle = styled.a`
  font-family: "Roboto Slab", serif;
  display: block;
  color: #444;
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
`;

const RecentPostsDate = styled.span`
  color: #444;
  font-size: 14px;
`;
const RecentPostsAuthor = styled.a`
  color: #444;
  font-size: 14px;
  text-decoration: none;
`;

const BlogTags = styled.div`
  margin-bottom: 50px;
`;

const BlogTagsTitle = styled.h6`
  margin-bottom: 16px;
  color: #151c2c;
  font-family: "Roboto Slab", serif;
  line-height: 23px;
`;

const BlogTagsLink = styled.a`
  color: #444;
  font-weight: 600;
  font-size: 14px;
  padding: 5px 16px;
  margin-bottom: 10px;
  margin-right: 10px;
  display: inline-block;
  border: 1px solid #167d23;
  border-radius: 14px;
  text-decoration: none;
`;

const BlogSocial = styled.div`
  display: flex;
`;

const BlogSocialItems = styled.ul`
  max-width: 730px;
  list-style: none;
  display: flex;
`;
const BlogSocialItem = styled.li`
  margin-bottom: 80px;
`;

const BlogSocialLink = styled.a`
  color: #167d23;
  text-decoration: none;
`;

function Sidebar() {
  return (
    <Container>
      <Aside>
        <AsideSearch>
          <AsideSearchInput type="text" placeholder="Search" />
          <AsideSearchButton class="aside__search-btn" type="submit">
            <SearchOutlinedIcon />
          </AsideSearchButton>
        </AsideSearch>
        <BlogCategory>
          <BlogCategoryTitle>Categories</BlogCategoryTitle>
          <BlogCategoryList>
            <BlogCategoryItem>
              <BlogCategoryLink>Hiking and camping. (1)</BlogCategoryLink>
            </BlogCategoryItem>
            <BlogCategoryItem>
              <BlogCategoryLink>Hunting and fishing. (12)</BlogCategoryLink>
            </BlogCategoryItem>
            <BlogCategoryItem>
              <BlogCategoryLink>Rock Climbing. (2)</BlogCategoryLink>
            </BlogCategoryItem>
            <BlogCategoryItem>
              <BlogCategoryLink>Canoeing, kayaking and rafting (4)</BlogCategoryLink>
            </BlogCategoryItem>
            <BlogCategoryItem>
              <BlogCategoryLink>Photography (1)</BlogCategoryLink>
            </BlogCategoryItem>
          </BlogCategoryList>
        </BlogCategory>
        <RecentPosts>
          <RecentPostsTitle>Recent Posts</RecentPostsTitle>
          <RecentPostsList>
            <RecentPostsItem>
              <RecentPostsItemTitle href="#">
                Cred selfies edison bulb four dollar toast humblebrag
              </RecentPostsItemTitle>
              <RecentPostsDate>August 10, 2020</RecentPostsDate>{" "}|{" "}
              <RecentPostsAuthor href="#">by Ann Summers</RecentPostsAuthor>
            </RecentPostsItem>
            <RecentPostsItem>
              <RecentPostsItemTitle href="#">
                Semiotics fixie four dollar toast, next level woke scenester
                direct trade photo booth
              </RecentPostsItemTitle>
              <RecentPostsDate>September 30 ,2020</RecentPostsDate>{" "}|{" "}
              <RecentPostsAuthor href="#">by Ann Summers</RecentPostsAuthor>
            </RecentPostsItem>
            <RecentPostsItem>
              <RecentPostsItemTitle href="#">
                Cred selfies edison bulb four dollar toast humblebrag
              </RecentPostsItemTitle>
              <RecentPostsDate>May 2, 2020</RecentPostsDate>{" "}|{" "}
              <RecentPostsAuthor href="#">by Ann Summers</RecentPostsAuthor>
            </RecentPostsItem>
          </RecentPostsList>
        </RecentPosts>
        <BlogTags>
          <BlogTagsTitle>Tags</BlogTagsTitle>
          <BlogTagsLink href="#">Food</BlogTagsLink>
          <BlogTagsLink href="#">CampFire</BlogTagsLink>
          <BlogTagsLink href="#">WildCamp</BlogTagsLink>
          <BlogTagsLink href="#">outdoorsskills</BlogTagsLink>
          <BlogTagsLink href="#">bushcraft</BlogTagsLink>
        </BlogTags>
        <BlogSocial>
          <BlogSocialItems>
            <BlogSocialItem>
              <BlogSocialLink href="#">
                <FacebookOutlinedIcon />
              </BlogSocialLink>
            </BlogSocialItem>
            <BlogSocialItem>
              <BlogSocialLink href="#">
                <TwitterIcon />
              </BlogSocialLink>
            </BlogSocialItem>
            <BlogSocialItem>
              <BlogSocialLink href="#">
                <TelegramIcon />
              </BlogSocialLink>
            </BlogSocialItem>
            <BlogSocialItem>
              <BlogSocialLink href="#">
                <InstagramIcon />
              </BlogSocialLink>
            </BlogSocialItem>
          </BlogSocialItems>
        </BlogSocial>
      </Aside>
    </Container>
  );
}

export default Sidebar;
