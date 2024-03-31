import { createSlice } from "@reduxjs/toolkit"
import { getTasksList,addTaskApi } from "./asyncAction";

const initialState={
    tasks:[{
        _id: "",
        name: "",
        email: "",
        about: "",
        profileURL: "",
    }]
}
export const taskSlice = createSlice({
    name:'taskSlice',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getTasksList.fulfilled,(state,{payload})=>{
            console.log("reducer",payload);
            state.tasks = payload.tasks;
        })
        builder.addCase(addTaskApi.fulfilled,(state,{payload})=>{
            console.log("addTaskApi",payload);
        })
        builder.addCase(addTaskApi.rejected,(state,{payload})=>{
            console.log("addTaskApi",payload);
        })
    }
})
export const {} = taskSlice.actions;
export default taskSlice.reducer