"use client";
import { userLoginApi } from "@/redux/asyncAction";
import React, { useState } from "react";
import { useRouter } from "../../../node_modules/next/navigation";
import { useDispatch } from "../../../node_modules/react-redux/dist/react-redux";

const Login = () => {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const submitLoginForm = async (event) => {
    event.preventDefault();
    console.log(loginData);
    if (loginData.email.trim() == "" || loginData.password.trim() == "") {
      return;
    }
    try {
      dispatch(userLoginApi(loginData));
     router.push("/profile/user")
    } catch (error) {
      console.log(error);
    }
  };
  const handleReset = () => {
    setLoginData({
      email: "",
      password: "",
    });
  };
  return (
    <div className="grid grid-cols-12 justify-center m-4">
      <div className="border-white col-span-6 col-start-4 px-5 rounded-2xl shadow-2xl border">
        <h1 className="text-3xl my-2 text-center">Login here</h1>
        <form onSubmit={submitLoginForm}>
          <div>
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email*"
              name="email"
              onChange={(event) => {
                setLoginData({
                  ...loginData,
                  email: event.target.value,
                });
              }}
              value={loginData.email}
            />
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Password*"
              name="password"
              onChange={(event) => {
                setLoginData({
                  ...loginData,
                  password: event.target.value,
                });
              }}
              value={loginData.password}
            />
          </div>
          <div className="flex justify-center my-3">
            <button
              type="submit"
              className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-auto 
                          focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="uppercase text-sm font-bold tracking-wide bg-red-900 text-gray-100 p-3 rounded-lg w-auto f
                          focus:outline-none focus:shadow-outline ml-4"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
