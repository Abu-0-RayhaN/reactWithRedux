import { useState } from "react";

/* eslint-disable react/prop-types */
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <span className="value">Count: {count}</span>
      <button
        className="btn"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
