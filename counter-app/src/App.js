import React from "react";

const App = () => {
  const greeting = "Hello World!";
  const isFalse = true; // No lo imprime
  const numberList = [1, 2, 3, 4]; // Lo imprime como string
  const person = {
    // Tengo que convertirlo a string para imprimirlo y usar la etiqueta pre
    name: "Mauro",
    age: 22,
  };

  return (
    <>
      <h1>{greeting}</h1>
      <p>{isFalse}</p>
      <p>{numberList}</p>
      <pre>{JSON.stringify(person, null, 3)}</pre>
      <p>My First Component</p>
    </>
  );
};

export default App;
