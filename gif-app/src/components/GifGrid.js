import React, { useEffect, useState } from "react";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const URL =
    "https://api.giphy.com/v1/gifs/search?q=Kimetsu No Yaiba&limit=10&api_key=0CX8QOffwaN0HW4Dl5aHW4tE6qh6gqTH";
  const getGifs = async () => {
    let response = await fetch(URL);
    let { data } = await response.json();

    const gifs = data.map((gif) => ({
      id: gif.id,
      title: gif.title,
      url: gif.images?.downsized_medium.url,
    }));
    console.log(gifs);
    setImages(gifs);
  };

  useEffect(() => {
    getGifs();
  }, []);

  return (
    <li className="card">
      <h3 className="category-title">{category}</h3>
      <ul className="gif-grid">
        {images.map((image) => (
          <GifGridItem key={image.id} {...image} />
        ))}
      </ul>
    </li>
  );
};

export default GifGrid;
