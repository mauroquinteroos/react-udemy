import React, { useState } from "react";
import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch Man",
    "Samurai X",
    "Dragon Ball",
  ]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </>
  );
};

export default GifExpertApp;
