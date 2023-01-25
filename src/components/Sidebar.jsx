import React from "react";
import styled from "styled-components";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";

const Container = styled.div`
  flex: 3;
  height: fit-content;
  margin: 20px;
  padding-bottom: 30px;
  background-color: #fdfbfb;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemTitle = styled.span`
  margin: 10px;
  padding: 5px;
  width: 80%;
  border-top: solid 1px #a7a4a4;
  border-bottom: solid 1px #a7a4a4;
  text-align: center;
  font-family: "Varela Round", sans-serif;
  font-size: 12px;
  line-height: 19px;
  color: #222222;
  font-weight: 600;
`;

const ItemImage = styled.img`
  margin-top: 15px;
  width: 250px;
  height: 250px;
`;

const ItemText = styled.div`
  padding: 30px;
`;

const ItemList = styled.ul`
  list-style-type: none;
  margin-bottom: 30px;
`;

const ItemListCategory = styled.li`
  display: inline-block;
  width: 50%;
  margin-top: 15px;
  cursor: pointer;
`;

const ItemSocial = styled.div`
  margin-top: 15px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Sidebar() {
  return (
    <Container>
      <Item>
        <ItemTitle>ABOUT ME</ItemTitle>
        <ItemImage
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <ItemText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
          libero, veniam quis dolores esse minima cumque dolor suscipit delectus
          facere necessitatibus quisquam a, dolorum vel?
        </ItemText>
      </Item>
      <Item>
        <ItemTitle>CATEGORIES</ItemTitle>
        <ItemList>
          <ItemListCategory>Life</ItemListCategory>
          <ItemListCategory>Music</ItemListCategory>
          <ItemListCategory>Style</ItemListCategory>
          <ItemListCategory>Sport</ItemListCategory>
          <ItemListCategory>Tech</ItemListCategory>
          <ItemListCategory>Cinema</ItemListCategory>
        </ItemList>
      </Item>
      <Item>
        <ItemTitle>FOLOW US</ItemTitle>
        <ItemSocial>
          <FacebookOutlinedIcon />
          <TwitterIcon />
          <TelegramIcon />
          <InstagramIcon />
        </ItemSocial>
      </Item>
    </Container>
  );
}

export default Sidebar;
