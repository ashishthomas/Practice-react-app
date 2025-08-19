import React, { useState, useMemo } from "react";
import { Button } from "@mui/material";

function useMemoExample() {
  const [count, setCount] = useState(0);

  const [otherCount, setOtherCount] = useState(0);

  const expensiveCalculation = (num) => {
    console.log("computing " + num + " ...");
    return num * 2;
  };

  // ------------------------>this count will be re-calculated when count is changed
  // const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  // --------------------------> this other count will be re-calculated when other count is changed
  // const memoizedValue = useMemo(
  //   () => expensiveCalculation(otherCount),
  //   [otherCount]
  // );

  // ------------------------> this count + other count will be re-calculated when count or other count is changed to their sum value
  const memoizedValue = useMemo(() => {
    return expensiveCalculation(count + otherCount);
  }, [count, otherCount]);

  return (
    <div>
      <h2> UseMemo Hook Example </h2>

      <p> Count: {count}</p>
      <p> Other Count: {otherCount}</p>
      <p> Memoized Value (double count): {memoizedValue}</p>

      <Button
        style={{ backgroundColor: "blue", color: "white", margin: "10px" }}
        onClick={() => setCount(count + 1)}
      >
        Increement
      </Button>
      <Button
        style={{ backgroundColor: "blue", color: "white" }}
        onClick={() => setOtherCount(otherCount + 1)}
      >
        Other Increement
      </Button>
    </div>
  );
}

export default useMemoExample;
