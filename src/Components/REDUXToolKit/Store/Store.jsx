// this is a store file which will contain all the reducers
import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../CreateSlice/Slice";
import ToDoReducer from "../CreateSlice/ToDoSlice";

const Store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: ToDoReducer,
  },
});

export default Store;
