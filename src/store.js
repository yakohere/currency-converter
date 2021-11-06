import { configureStore } from "@reduxjs/toolkit";
import convertedReducer from "./convertedReducer";

export const store = configureStore({
    reducer: {
        converter: convertedReducer
    }
})
