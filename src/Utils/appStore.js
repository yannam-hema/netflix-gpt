import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import userSlice from "./userSlice";
const appStore=configureStore(
    {
        reducer:{
            user:userReducer,
        }
    }
)
export default appStore;