import React from "react";
import PropTypes from "prop-types";

const App = ({ name = "Fernando" }) => {
  return (
    <>
      <h1>Hello World!</h1>
      <h2>{name}</h2>
      <p>My First Component</p>
    </>
  );
};

App.propTypes = {
  name: PropTypes.string.isRequired,
};

export default App;
