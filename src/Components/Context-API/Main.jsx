import React, { useContext, useState } from "react";
import Addition from "./Addition";
import Subtraction from "./Subtraction";
import Multiplication from "./Multiplication";
import { countData } from "./utils/CountData";
import { sampleData } from "./utils/SampleData";
import ChangingData from "./ChangingData";

function Main() {
  const contextValue = useContext(countData); // Access the data from countData and set to contextValue
  const [count, setCount] = useState(contextValue.count1); // Initialize count with the value from countData

  const sampleValue = useContext(sampleData);
  const [sample, setSample] = useState(sampleValue.sample1);

  // Memoize the context values to prevent unnecessary re-renders
  const countContextValue = React.useMemo(
    () => ({ count1: count, setCount2: setCount }),
    [count, setCount]
  );
  const sampleContextValue = React.useMemo(
    () => ({ sample3: sample, setSample2: setSample }),
    [sample, setSample]
  );

  return (
    <>
      <countData.Provider value={countContextValue}>
        {/* Provide that allows to share data withmultiple components */}
        <div>
          <h1>Context API Example</h1>
          <Addition />
          <Subtraction />
          <Multiplication />
        </div>
      </countData.Provider>

      <sampleData.Provider value={sampleContextValue}>
        <div>
          <ChangingData />
        </div>
      </sampleData.Provider>
    </>
  );
}

export default Main;
