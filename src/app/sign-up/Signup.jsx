"use client";
import { createUserApi } from "@/services/taskService";
import React, { useState } from "react";

const Signup = () => {
    const [user, setUser] = useState({
        name:'',
        email:'',
        password:'',
        profileURL:'',
        about:''
    });
    const handleSignUpForm = async (event) =>{
        event.preventDefault();
        console.log(user);
        try {
            const result = await createUserApi(user);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className="grid grid-cols-12 justify-center m-4">
      <div className="border-white justify-center col-span-8 shadow-sm">
        <div className="container my-4 lg:px-20">
          <form className="w-full p-8 my-4 md:px-12  rounded-2xl shadow-2xl border" onSubmit={handleSignUpForm}>
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl">Sign Up Form</h1>
            </div>
            <div className="grid grid-cols-1 gap-5 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name*"
                name="name"
                onChange={(event)=>{
                    setUser({
                        ...user,
                        name:event.target.value
                    })
                }}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
                name="email"
                onChange={(event)=>{
                    setUser({
                        ...user,
                        email:event.target.value
                    })
                }}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Password*"
                name="password"
                onChange={(event)=>{
                    setUser({
                        ...user,
                        password:event.target.value
                    })
                }}
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                id="file_input"
                type="file"
                name="profileURL"
                onChange={(event)=>{
                    setUser({
                        ...user,
                        profileURL:event.target.value
                    })
                }}
              />
            </div>
            <div className="my-4">
              <textarea
                placeholder="About*"
                name="about"
                onChange={(event)=>{
                    setUser({
                        ...user,
                        about:event.target.value
                    })
                }}
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-auto 
                          focus:outline-none focus:shadow-outline"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
