import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "../../CommonFunctions/Cookies";
const userData = decodeURIComponent(getCookie("userData"))
const userSlice = createSlice({
    name: "user",
    initialState: JSON.parse(userData)?.token ? JSON.parse(userData) : {},
    reducers: {
        UPDATE_USER(state, { payload }) {
            return {
                ...state,
                ...payload
            }
        },
        LOGOUT_USER(state, { payload }) {
            return {}
        },
    },

});

export const { UPDATE_USER, LOGOUT_USER } = userSlice.actions;

export default userSlice.reducer;
