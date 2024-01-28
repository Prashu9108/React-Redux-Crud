import { configureStore } from "@reduxjs/toolkit";
import reducer from "../Reducer/BlogReducer";


// Assign name for State
const blogReducer = {
    blog : reducer
}

//Config Store
const store = configureStore({
    reducer : blogReducer,
    devTools : true
});

export default store;