import { httpAxios } from "@/helper/httpHelper";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const userLoginApi = createAsyncThunk(
  "userLoginApi",
  async (loginData) => {
    try {
      const result = await httpAxios
        .post("/api/login", loginData)
        .then((response) => response.data);
      return result;
    } catch (error) {
        console.log(error);
    }
  }
);
export const createUserApi = createAsyncThunk("createUserApi", async (user) => {
  try {
    const result = await httpAxios
      .post("/api/users", user)
      .then((response) => response.data);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const getTasksList = createAsyncThunk("getTasksList",async()=>{
    console.log("api called");
    const result = await httpAxios.get("/api/tasks").then((response)=>response.data);
    return result;
})
export const addTaskApi = createAsyncThunk("addTaskApi",async(task)=>{
    console.log('add task api called');
    const result = await httpAxios.post("/api/tasks",task).then((response)=>response.data);
    return result;
})
export const signUpUser = createAsyncThunk("signUpUser",async(user)=>{
    console.log("signup user api called",user);
    const result = await httpAxios.post("/api/users",user).then((response)=>response.data);
    return result;
})