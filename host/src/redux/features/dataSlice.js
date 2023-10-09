import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {},
};

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        saveData: (state, action) => {
            state.data = action.payload
        }
    },
});

export const { saveData } = dataSlice.actions

export default dataSlice.reducer;