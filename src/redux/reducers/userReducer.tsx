import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Theme, UserReducer } from "../../types/reducers";
import { darkColors, lightColors } from "../../styles/mui/theme";

const userSlice = createSlice({
    name: 'userSlice',
    initialState: { currentTheme: 'light', colors: lightColors } as UserReducer,
    reducers: {
        changeTheme: (state, action: PayloadAction<Theme>) => {
            return {
                ...state, // Spread the existing state
                currentTheme: action.payload,
                colors: action.payload === 'light' ? lightColors : darkColors,
            };
        },
    },
});

export const userReducer = userSlice.reducer;
export const { changeTheme } = userSlice.actions;