import React from "react";
import PropTypes from "prop-types";

const Counter = ({ value }) => {
  const handleAdd = (ev) => {
    console.log(ev);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{value}</h2>
      <button onClick={handleAdd}>Add</button>
    </>
  );
};

Counter.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Counter;
