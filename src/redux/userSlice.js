import { createSlice } from "@reduxjs/toolkit"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { signUpUser, userLoginApi } from "./asyncAction";

const initialState = {
    users: [{
        name: "",
        email: "",
        about: "",
        profileURL: "",
    }]
}

export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(signUpUser.fulfilled, (state, { payload }) => {
            toast.success("signup successfully")
        })
        builder.addCase(userLoginApi.fulfilled, (state, { payload }) => {
            toast.success("Login successfully")
        })
    }
})
export const { } = userSlice.actions;
export default userSlice.reducer;