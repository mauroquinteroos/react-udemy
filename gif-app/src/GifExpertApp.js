import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch Man",
    "Dragon Ball",
  ]);

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={setCategories} />
      <ul className="card-grid">
        {categories.map((category) => (
          <GifGrid key={category} category={category} limit={10} />
        ))}
      </ul>
    </>
  );
};

export default GifExpertApp;
