/* eslint-disable no-undef */

import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "./Slices/TodoSlice";

// add todoreduce in redurec of store to perform action and effectively change the states
const store = configureStore({
  reducer: {
    todo: todoReducer,
    
  },
  devTools: process.env.NODE_ENV !== "production",
});



export default store;
