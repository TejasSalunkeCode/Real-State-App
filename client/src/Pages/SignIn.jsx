import React from "react";
// import { jwtDecode } from "jwt-decode";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInFailure,
  signInSuccess,
  signStart,
} from "../redux/user/userSlice.js";
import {useSelector,useDispatch} from "react-redux";



export default function SignIn() {
    const dispatch = useDispatch();

  const [formdata, setFomdata] = useState({});
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFomdata({
      ...formdata,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // setLoading(true);
      // dispatch(signStart());
      dispatch(signStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
      if (data.success == false) {
        // setError(data.message);
        // setLoading(false);
        dispatch(signInFailure(error.message));
        return;
      }
      // setLoading(false);
      // setError(null);
      dispatch(signInSuccess(data));
      navigate("/");

      console.log(data);
    } catch (error) {
      // setLoading(false);
      // setError(error.message);
      dispatch(signInFailure(error.message));
    }
  };

  console.log(formdata);
  // setLoading(true);
  // const res = await fetch('/api/auth/signup',{
  //   method:'POST',
  //   headers:{
  //       'Content-Type':'application/json',
  //     },
  //     body:JSON.stringify(formdata),
  //   });
  //   const data=await res.json();
  //   if(data.success==false){
  //     setError(data.message);
  //     setLoading(false);
  //     return;
  //   }
  //   setLoading(false);
  //   console.log(data);

  // }

  console.log(formdata);

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3  rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign in"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont Have an account?</p>
        <Link to={"/sign-up"}>
          <span className="text-blue-700">Sign up</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
}
