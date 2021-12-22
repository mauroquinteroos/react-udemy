import React, { useState } from "react";
import PropTypes from "prop-types";

const Counter = ({ value }) => {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => setCounter((counter) => counter + 1);

  const handleSubtract = () => setCounter(counter - 1);

  const handleReset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubtract}>Subtract</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

Counter.propTypes = {
  value: PropTypes.number.isRequired,
};

Counter.defaultProps = {
  value: 10,
};

export default Counter;
