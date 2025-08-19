import React, { useContext } from "react";
import { countData } from "./utils/CountData";
import { Button } from "@mui/material";

function Subtraction() {
  const { count1, setCount2 } = useContext(countData);
  return (
    <div>
      <Button
        className="m-2"
        style={{ background: "blue", color: "white" }}
        onClick={() => setCount2(count1 - 1)}
      >
        Decrement
      </Button>
    </div>
  );
}

export default Subtraction;
