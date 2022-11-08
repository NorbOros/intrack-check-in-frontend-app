import { configureStore } from "@reduxjs/toolkit";
import checkInSlice from "./slices/check-in-slice";

const store = configureStore({
    reducer: {
        checkInReducer: checkInSlice.reducer
    },
});

export default store;