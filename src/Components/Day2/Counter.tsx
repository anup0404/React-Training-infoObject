import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  const increment = () => {
    setValue((prev) => prev + 1);
  };
  return (
    <>
      <h2>{value}</h2>
      <button onClick={() => increment()}>+1</button>
      <button
        onClick={() => {
          increment();
          increment();
          increment();
        }}
      >
        +3
      </button>
    </>
  );
};

export default Counter;
