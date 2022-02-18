import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category, limit }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category, limit).then((images) => setImages(images));
  }, [category, limit]);

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
