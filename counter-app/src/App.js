import React from "react";
import PropTypes from "prop-types";

const App = ({ name = "Fernando", subTitle }) => {
  return (
    <>
      <h1>Hello World!</h1>
      <h2>{name}</h2>
      <h2>{subTitle}</h2>
      <p>My First Component</p>
    </>
  );
};

App.propTypes = {
  name: PropTypes.string.isRequired,
};
App.defaultProps = {
  subTitle: "Herrera",
};

export default App;
