import { createSlice } from "@reduxjs/toolkit";

// const initialStateValue = {
//   count: 0,
// };

export const themeSlice = createSlice({
  name: "theme",
  initialState: { color: "red" },
  reducers: {
    changeTextColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeTextColor } = themeSlice.actions;

export default themeSlice.reducer;
