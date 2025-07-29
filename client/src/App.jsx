import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Home from "./Pages/Home";
import  About  from "./Pages/About";
import  Profile  from "./Pages/Profile";
import  SignIn  from "./Pages/SignIn";
import  SignUp  from "./Pages/SignUp";

export const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
   </BrowserRouter>
  );
};
