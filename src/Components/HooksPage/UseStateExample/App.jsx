import  { useState } from "react";
import ChildComponent from "./ChildComponent";

function App() {
  //let name = "sajjan";

  //usestate
  const [name, setName] = useState("sajjan");
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h3> Parent Component </h3>
      <h1> {name} </h1>

      <button
        style={{ background: "green", padding: "10px", color: "white" }}
        onClick={() => {
          setName("Ashish");
          console.log(name);
        }}
      >
        {" "}
        Name Change{" "}
      </button>
      {console.log(name)}
      <ChildComponent name={name} setName={setName} />
    </div>
  );
}

export default App;
