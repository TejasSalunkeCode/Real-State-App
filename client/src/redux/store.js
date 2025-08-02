// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./user/userSlice.js";
// import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {user:userReducer },
    // counter: counterReducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck:false,
    }),
  
});
