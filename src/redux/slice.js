import { createSlice } from "@reduxjs/toolkit";
import { createUserApi, userLoginApi } from "./asyncAction";
const user = {
  _id: "",
  name: "",
  email: "",
  about: "",
  profileURL: "",
}
const Slice = createSlice({
  name: "addUserSlice",
  initialState: user,
  reducers: {
    addUser: (state, { payload }) => {
      state.user=payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLoginApi.pending, (state, { payload }) => {
      console.log("pending called");
    });
    builder.addCase(createUserApi.pending, (state, { payload }) => {
      console.log("pending called");
    });
    builder.addCase(createUserApi.fulfilled, (state, { payload }) => {
      console.log("fulfilled called", payload);
    });
    builder.addCase(createUserApi.rejected, (state, { payload }) => {
      console.log("pending called");
    });
  },
});
export const { addUser } = Slice.actions;
export default Slice.reducer;
