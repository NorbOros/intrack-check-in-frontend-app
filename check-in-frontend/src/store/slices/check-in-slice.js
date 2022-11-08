import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    appointment: {}
};

const updateAppointment = (state, action) => {
    state.appointment = action.payload;
}

const resetAppointment = (state) => {
    state.appointment = {};
}


const checkInSlice = createSlice({
    name: 'check-in',
    initialState: initialState,
    reducers: {
        updateAppointment,
        resetAppointment
    },
});

export const checkInActions = checkInSlice.actions;
export default checkInSlice;