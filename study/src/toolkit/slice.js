import { createSlice } from "@reduxjs/toolkit"

let slice1 = createSlice({
    name: "slice1",
    initialState: 0,
    reducers:{
        add: (state, action)=> state + 1,
        sub: (state, action)=> state - 1,
        incBy5: (state, action)=> state + action.payload,
        reset: (state, action)=> slice1.getInitialState()
    }
});
export let counter = slice1.reducer
export let {add, sub, incBy5, reset} = slice1.actions