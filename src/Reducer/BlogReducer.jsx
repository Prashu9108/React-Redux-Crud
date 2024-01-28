import { createSlice } from "@reduxjs/toolkit";
import { createBlog, retriveBlogs } from "../Action/BlogAction";

//initialize the state
const initialState = []

//Reducer Slices
const blogSlice = createSlice({
    name:"blog",
    initialState,
    extraReducers : (builder) => {
        builder.addCase(createBlog.fulfilled, (state, action) => {
            console.log("Reducer Payload =", action.payload)
        });
        builder.addCase(retriveBlogs.fulfilled, (state, action) => {
            return [...action.payload]
        });
    }
})

// assigning to reducer
const {reducer} = blogSlice;

// default export 
export default reducer;