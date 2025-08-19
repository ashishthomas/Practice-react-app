import React from "react";
import { useReducer } from "react";
import { Button } from "react-bootstrap";

const reducer = (state, type) => {
  switch (type) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "multiply":
      return state * 5;

    case "reset":
      return (state = 0);

    default:
      return (state = 0);
  }
};

const initialState = 0;
function CountwithUseReducer() {
  const [data, dispatch] = useReducer(reducer, initialState);
  console.log(data);
  return (
    <div className="mt-5 text-center container w-50 mx-auto border border-primary p-5 rounded-5 shadow-lg shadow-primary">
      <h1>{data}</h1>
      <Button
        onClick={() => {
          dispatch("increment");
        }}
      >
        Increment
      </Button>
      <Button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        Decrement
      </Button>
      <Button
        onClick={() => {
          dispatch("multiply");
        }}
      >
        Multiplication
      </Button>
      <Button
        onClick={() => {
          dispatch("reset");
        }}
      >
        Reset
      </Button>
    </div>
  );
}

export default CountwithUseReducer;
