import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "../styles/reset.css";
import "../styles/Global.css";

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

  return (
    <div className="">
      {photos?.map((item, index) => {
        return (
          <div className="" key={index}>
            <img src={item.src.medium} alt={item.id} />
          </div>
        );
      })}
      <div className="">
        <button disabled={data?.page === 1} onClick={() => getPhotos("back")}>prev</button>
        <button onClick={() => getPhotos("next")}>next</button>
      </div>
    </div>
  );
};

export default GalleryPhoto;
