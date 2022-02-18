import React from "react";

const GifGridItem = ({ title, url }) => {
  return (
    <div className="gif-card">
      <figure className="gif-wrapper">
        <img className="gif" src={url} alt={title} />
      </figure>
      <h3 className="gif-title">{title}</h3>
    </div>
  );
};

export default GifGridItem;
