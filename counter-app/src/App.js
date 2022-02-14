import React from "react";
import PropTypes from "prop-types";

const App = ({ greeting = "Hello World", subTitle }) => {
  return (
    <>
      <h1>{greeting}</h1>
      <p>{subTitle}</p>
    </>
  );
};

App.propTypes = {
  greeting: PropTypes.string.isRequired,
};
App.defaultProps = {
  subTitle: "This is my first component",
};

export default App;
