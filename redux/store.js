import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import userPostSlice from "./userPostSlice";


const store = configureStore({
    reducer:{
        user:userSlice,
        userPost:userPostSlice,
    }
})

export default store