import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../CreateSlice/ToDoSlice";

const TodoList = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const handleAdd = () => {
    if (task.trim()) {
      dispatch(addTodo(task));
      setTask("");
    }
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        style={{ marginRight: "10px", border: "1px solid black" }}
      />
      <button
        onClick={handleAdd}
        style={{
          marginLeft: "10px",
          padding: "10px",
          backgroundColor: "green",
          color: "white",
        }}
      >
        Add
      </button>
      <ul
        style={{
          marginTop: "20px",
          marginLeft: "10px",
          border: "1px solid black",
          padding: "10px",
          width: "150px",
        }}
      >
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              style={{
                marginLeft: "10px",
                padding: "10px",
                backgroundColor: "red",
                color: "white",
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
