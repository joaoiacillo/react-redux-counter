import counterSlice from "./features/counter/slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    },
});

export default store;
