import { createSlice } from "@reduxjs/toolkit";

type ThemeState = {
  value: boolean; // true = dark
}

const initialState: ThemeState = {
  value: true, // dark by default
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.value = !state.value;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
