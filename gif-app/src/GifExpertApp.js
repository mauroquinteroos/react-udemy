import React, { useState } from "react";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch Man",
    "Samurai X",
    "Dragon Ball",
  ]);

  const handleAdd = () =>
    setCategories((categories) => [...categories, "Kimetsu No Yaiba"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <button onClick={handleAdd}>Agregar</button>
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </>
  );
};

export default GifExpertApp;
