import React from "react";
import useFetchGifs from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";
import "animate.css";

const GifGrid = ({ category, limit }) => {
  const { data: images, loading } = useFetchGifs(category, limit);

  return (
    <li className="card">
      <h3 className="category-title">{category}</h3>
      {loading && (
        <p className="animate__animated animate__flash">Loading ..</p>
      )}
      <ul className="gif-grid">
        {images.map((gif) => (
          <GifGridItem key={gif.id} {...gif} />
        ))}
      </ul>
    </li>
  );
};

export default GifGrid;
