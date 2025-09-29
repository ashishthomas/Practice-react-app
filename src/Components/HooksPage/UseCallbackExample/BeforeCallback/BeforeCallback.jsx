import { useState } from "react";
import Todos from "./Todo";

const BeforeCallback = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Adds a new todo to the list of todos.
 * The new todo is a string with the value "New Todo".
 * This function updates the state of todos by spreading the current todos array and adding the new todo to the end of it.
/*******  28db1faf-517f-4067-be16-485e493226c3  *******/
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default BeforeCallback;
