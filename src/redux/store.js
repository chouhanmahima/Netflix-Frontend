import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieSlice from "./movieSlice";

const store = configureStore({
    reducer : {
        app : userReducer,
        movie: movieSlice
    }
});

export default store;