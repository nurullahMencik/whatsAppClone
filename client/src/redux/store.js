import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./slices/userSlice"
import roomReducer from "./slices/roomSlice"
import messageReducer from "./slices/messageSlices"
export const store = configureStore({
    reducer:{
        user:userReducer,
        room:roomReducer,
        message:messageReducer
    }
})