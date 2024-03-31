"use client";
import { signUpUser } from "../../redux/asyncAction";
import React, { useState } from "react";
import { useDispatch } from "../../../node_modules/react-redux/dist/react-redux";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    profileURL: "",
    about: "",
  });
  const dispatch = useDispatch();
  const handleSignUpForm = async (event) => {
    event.preventDefault();
    console.log(user);
    try {
      dispatch(signUpUser(user));
      clearForm();

    } catch (error) {
      console.log(error);
    }
  };
  const clearForm = () => {
    console.log("clear called");
    setUser({
      name: "",
      email: "",
      password: "",
      profileURL: "",
      about: "",
    });
  };
  return (
    <div className="grid grid-cols-12 justify-center m-4">
    <div className="border-white col-span-6 col-start-4 px-5 rounded-2xl shadow-2xl border">
        <div className="container my-4">
          <form
            className="w-full my-4 md:px-12"
            onSubmit={handleSignUpForm}
          >
            <div className="flex">
              <h1 className="font-bold uppercase text-4xl">Sign Up Form</h1>
            </div>
            <div className="grid grid-cols-1 gap-5 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name*"
                name="name"
                onChange={(event) => {
                  setUser({
                    ...user,
                    name: event.target.value,
                  });
                }}
                value={user.name}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
                name="email"
                onChange={(event) => {
                  setUser({
                    ...user,
                    email: event.target.value,
                  });
                }}
                value={user.email}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Password*"
                name="password"
                onChange={(event) => {
                  setUser({
                    ...user,
                    password: event.target.value,
                  });
                }}
                value={user.password}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                id="file_input"
                type="file"
                name="profileURL"
                onChange={(event) => {
                  setUser({
                    ...user,
                    profileURL: event.target.value,
                  });
                }}
                value={user.profileURL}
              />
            </div>
            <div className="my-4">
              <textarea
                placeholder="About*"
                name="about"
                onChange={(event) => {
                  setUser({
                    ...user,
                    about: event.target.value,
                  });
                }}
                value={user.about}
                className="w-full h-24 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-auto 
                          focus:outline-none focus:shadow-outline"
              >
                Sign Up
              </button>
              <button
                type="button"
                onClick={clearForm}
                className="uppercase text-sm font-bold tracking-wide bg-red-900 text-gray-100 p-3 rounded-lg w-auto f
                          focus:outline-none focus:shadow-outline ml-4"
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
