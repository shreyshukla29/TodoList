/* eslint-disable no-undef */

import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "./Slices/TodoSlice";

console.log(todoReducer)

const store = configureStore({
  reducer: {
    todo: todoReducer,
    
  },
  devTools: process.env.NODE_ENV !== "production",
});



export default store;
