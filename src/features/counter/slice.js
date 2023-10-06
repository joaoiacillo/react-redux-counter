import { createSlice } from "@reduxjs/toolkit";

import increment from "./reducers/increment";
import decrement from "./reducers/decrement";

const initialState = {
    value: 0
};

const slice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment,
        decrement
    }
});

export const reducer = slice.reducer;
export const actions = slice.actions;

export default slice;
