import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Header from "./Components/Header";
import PrivateRoute  from "./Components/privateRoute"

export const App = () => {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route element={<PrivateRoute/>}>
          <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/about" element={<About />} />
        </Routes>
    </BrowserRouter>
  );
};
