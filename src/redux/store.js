import { configureStore } from '@reduxjs/toolkit';
import usersReducers from "./userSlice"
import tasksReducers from './taskSlice'

export const store = configureStore({
    reducer:{
        userData:usersReducers,
        tasksData: tasksReducers,
    }
})