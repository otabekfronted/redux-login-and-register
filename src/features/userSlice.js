// src/features/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        isAuthReady: false,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
        isAuthReadyChanges: (state) => {
            state.isAuthReady = true;
        },
    },
});

export const { login, logout, isAuthReadyChanges } = userSlice.actions;
export default userSlice.reducer;
