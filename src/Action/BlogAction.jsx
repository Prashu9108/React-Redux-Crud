import { createAsyncThunk } from "@reduxjs/toolkit";
import blogAPI from "../API/BlogAPI";


// To create a new Blog
export const createBlog = createAsyncThunk("blog/create", async (blog) => {
    console.log("PlayLoad Data :" , blog);
    const res = await blogAPI.create(blog);
    return res.data;
});

// To read all stored blogs
export const retriveBlogs = createAsyncThunk("blogs/retrive", async()=>{
    const res = await blogAPI.getAll();
    return res.data
});

// To delete a blog
export const deleteBlog = createAsyncThunk("blogs/delete", async({ id }) => {
    await blogAPI.delete(id);
    return { id };
});

//To update a blog
export const updateBlog = createAsyncThunk(
    "blogs/update",
    async ({ blog, id }) => {
    const res = await blogAPI.update(blog, id);
    return res.data;
    }
);