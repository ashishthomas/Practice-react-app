import React, { useContext } from "react";
import { countData } from "./utils/CountData";
import { Button } from "@mui/material";

function Multiplication() {
  const { count1, setCount2 } = useContext(countData);
  return (
    <div>
      <Button
        className="m-2"
        style={{ background: "blue", color: "white" }}
        onClick={() => setCount2(count1 * 5)}
      >
        Multiply * 5
      </Button>
    </div>
  );
}

export default Multiplication;
