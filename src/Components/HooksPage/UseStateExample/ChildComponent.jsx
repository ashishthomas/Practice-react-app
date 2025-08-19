// props and state in react js
// props are immutable and state is mutable
// props are used to pass data from parent to child component
// state is used to store data in a component
// props are read-only
// state is mutable

/* props is store the props using the parent component to child component */
/* it is store the props using the child component to parent component by using the function using the state  */

import React from "react";
import { useState } from "react";

function ChildComponent({ name, setName }) {
  const [childState, setChildState] = useState("Thomas");
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        marginTop: "10px",
      }}
    >
      <h3> Child Component </h3>
      <h1> {name} </h1>
      <button
        onClick={() => setName(childState)}
        style={{ background: "red", padding: "10px", color: "white" }}
      >
        name change in child
      </button>
    </div>
  );
}

export default ChildComponent;
