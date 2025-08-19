import React, { useState, useRef } from "react";

const CounterWithRef = () => {
  const countRef = useRef(0);

  const [displayCount, setDisplayCount] = useState(0);

  const increment = () => {
    countRef.current = countRef.current + 1; // Updates the ref value
    console.log(`Current count in ref: ${countRef.current}`);
  };

  const showCount = () => {
    setDisplayCount(countRef.current); // Update the UI with the ref value
  };

  return (
    <div>
      <button onClick={increment}>Increment Ref Count</button>
      <button onClick={showCount}>Show Count</button>
      <p>Count: {displayCount}</p>
    </div>
  );
};

export default CounterWithRef;
