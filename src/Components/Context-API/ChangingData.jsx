import React, { useContext } from "react";
import { sampleData } from "./utils/SampleData";
import { Button } from "@mui/material";

function ChangingData() {
  const { sample1, sample3, setSample2 } = useContext(sampleData);
  return (
    <div>
      {/* <h1>{sample1}</h1> */}
      {/* {console.log(sample1)} */}
      <h1>{sample3}</h1>

      <Button
        style={{ background: "blue", color: "white" }}
        onClick={() => {
          setSample2(" Data Changed ");
        }}
      >
        Change
      </Button>
    </div>
  );
}

export default ChangingData;
