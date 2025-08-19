import React, { useState } from "react";

const CounterWithState = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1); // Causes React to re-render
  };

  console.log("Component re-rendered!");

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default CounterWithState;
