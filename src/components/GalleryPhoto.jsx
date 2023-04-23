import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "../styles/reset.css";
import "../styles/Global.css";
import CloseIcon from "@mui/icons-material/Close";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const Wrapper = styled.div`
  padding: 0 10px;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 50px;
  margin-bottom: 150px;
`;

const Title = styled.h4`
  text-align: center;
  font-size: 60px;
  line-height: 80px;
  color: #151c2c;
  font-family: "Roboto Slab", serif;
  margin-bottom: 60px;
`;

const Span = styled.span`
  display: block;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 5fr);
  grid-gap: 20px;
  grid-auto-flow: dense;
`;

const ImageContainer = styled.div``;

const Image = styled.img`
  width: 500px;
  height: 500px;
  cursor: pointer;
`;

const ButtonsContainer = styled.div`
  padding-top: 50px;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  margin: 0 auto;
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const GalleryPhoto = () => {
  const [query, setQuery] = useState("Nature");

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [photos, setPhotos] = useState([]);

  const getPhotos = async (type) => {
    let url = `https://api.pexels.com/v1/search?query=${query}`;
    if (data?.next_page && type === "next") {
      url = data.next_page;
    }
    if (data.prev_page && type === "back") {
      url = data.prev_page;
    }

    setLoading(true);
    await fetch(url, {
      headers: {
        Authorization:
          "Qe8jQq7AaWpcAqJWGJqXmrl3hywqXTv0idjNYux1MlADs0KEzzgTWhoz",
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((res) => {
        setLoading(false);
        setData(res);

        setPhotos(res.photos);
      });
  };

  useEffect(() => {
    getPhotos();
  }, []);

  const onKeyOwnHandler = (e) => {
    if (e.keyCode === 13) {
      getPhotos();
    }
  };

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempimgSrc] = useState("");

  const getImg = (image) => {
    setTempimgSrc(image);
    setModel(true);
  };

  return (
    <Wrapper>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt="" />
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <Title>
        Nature is not a place to visit,
        <Span> it is home</Span>
      </Title>
      <GridContainer>
        {photos?.map((item, index) => {
          return (
            <ImageContainer key={index}>
              <Image
                src={item.src.medium}
                alt={item.id}
                onClick={() => getImg(item.src.large)}
              />
            </ImageContainer>
          );
        })}
      </GridContainer>
      <ButtonsContainer>
        <Button className="mainBtn" onClick={() => getPhotos("back")}>
          <ArrowBack />
        </Button>
        <Button className="mainBtn" onClick={() => getPhotos("next")}>
          <ArrowForward />
        </Button>
      </ButtonsContainer>
    </Wrapper>
  );
};

export default GalleryPhoto;
//disabled={data?.page === 1}
