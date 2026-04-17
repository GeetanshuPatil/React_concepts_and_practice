import { configureStore } from "@reduxjs/toolkit";
import { counter } from "./slice";

let store1 = configureStore({
    reducer: counter
})
export default store1