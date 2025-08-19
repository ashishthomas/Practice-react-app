import React, { useContext } from "react";
import { countData } from "./utils/CountData";
import { Button } from "@mui/material";

function Addition() {
  const { count1, setCount2 } = useContext(countData);
  return (
    <div>
      <h1>Count: {count1}</h1>
      <Button
        className="m-2"
        style={{ background: "blue", color: "white" }}
        onClick={() => setCount2(count1 + 1)}
      >
        Increment
      </Button>
    </div>
  );
}

export default Addition;
