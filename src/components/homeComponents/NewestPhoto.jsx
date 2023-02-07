import React, { useState } from "react";
import styled from "styled-components";
import "../../styles/reset.css";
import "../../styles/Global.css";
import { newestPhotoItems } from "../../staticData/data";
import CloseIcon from "@mui/icons-material/Close";

//className model in Global.css file
const Wrapper = styled.div`
  margin-bottom: 100px;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 10px;
`;

const Title = styled.h3`
  color: #319b59;
  font-family: "Roboto Slab", serif;
  font-size: 36px;
  line-height: 51px;
  margin: 0 auto 30px;
  text-align: center;
  max-width: 430px;
  font-weight: 600;
`;

const Subtitle = styled.p`
  color: #0a3a3f;
  font-family: "Roboto Slab", serif;
  margin: 0 auto 30px;
  text-align: center;
  font-weight: 400;
  font-size: 26px;
  line-height: 38px;
`;

const SubtitleSpan = styled.span`
  display: block;
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 30px 35px;
`;


const Image = styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 1150px;
  height: 100%;
  &:first-child {
    grid-column: span 2;
    grid-row: span 2;
  }
`;

const NewestPhoto = () => {
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempimgSrc] = useState("");

  const getImg = (image) => {
    setTempimgSrc(image);
    setModel(true);
  };

  return (
    <Wrapper>
      <Title>Outdoors Photos</Title>
      <Subtitle>
        Take in the beauty of it all – wild rivers, scenic bikeways, mountain
        vistas, abundant farmlands
        <SubtitleSpan>
          – and show your love for the people who make this place so special.
        </SubtitleSpan>
      </Subtitle>
      <>
        <div className={model ? "model open" : "model"}>
          <img src={tempimgSrc} alt="" />
          <CloseIcon onClick={() => setModel(false)} />
        </div>
        <Gallery>
          {newestPhotoItems.map((item, index) => {
            return (
              <Image
                key={index}
                src={item.image}
                onClick={() => getImg(item.image)}
              />
            );
          })}
        </Gallery>
      </>
    </Wrapper>
  );
};

export default NewestPhoto;

//React returns image src as object
