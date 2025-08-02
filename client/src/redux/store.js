// src/app/store.js
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./user/userSlice.js";
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { persistStore } from "redux-persist";
// import counterReducer from "../features/counter/counterSlice";

const rootReducer = combineReducers({user : userReducer});

const persistConfig={
  key:'root',
  storage,
  version:1,
}

const persistedReducer = persistReducer(persistConfig,rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
    // counter: counterReducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck:false,
    }),
});


export const persistor = persistStore(store);