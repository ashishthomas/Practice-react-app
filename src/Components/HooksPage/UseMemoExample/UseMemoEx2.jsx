import React, { useState } from "react";

function useMemoEx2() {
  const [count, setCount] = useState(0);

  const [Todo, setTodo] = useState([]);

  // Define expensive calculation first
  const expensiveCalculation = (num) => {
    console.log("Calculating " + num + "...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };

  const calculation = expensiveCalculation(count);

  const addTodo = () => {
    setTodo((addT) => [...addT, "New Todo"]);
  };

  const increment = () => {
    setCount((c) => c + 1);
  };

  // if we define expensive calculation here, In JavaScript, function expressions (like const expensiveCalculation = () => { ... };) are not hoisted, unlike function declarations (function expensiveCalculation() { ... }).
  // const calculation = expensiveCalculation(count);
  // This line tries to call expensiveCalculation before the function has been initialized. At this point, JavaScript knows the variable expensiveCalculation exists, but it hasn't been assigned a value yet. This is why you get the error.
  // To fix this, you can either move the function declaration above the line where you call it, or you can use a function expression instead of a function declaration.

  return (
    <div>
      <div>
        <h2>My Todos</h2>

        {Todo.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}

        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment} style={{ marginLeft: "10px" }}>
          Increment
        </button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
}

export default useMemoEx2;
