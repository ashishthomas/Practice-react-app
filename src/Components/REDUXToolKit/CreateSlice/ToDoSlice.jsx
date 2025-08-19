import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const ToDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: Date.now(), text: action.payload });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = ToDoSlice.actions;
export default ToDoSlice.reducer;
