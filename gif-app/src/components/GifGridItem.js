import React from "react";
import "animate.css";

const GifGridItem = ({ title, url }) => {
  return (
    <div className="gif-card animate__animated animate__fadeIn">
      <figure className="gif-wrapper">
        <img className="gif" src={url} alt={title} />
      </figure>
      <h3 className="gif-title">{title}</h3>
    </div>
  );
};

export default GifGridItem;
