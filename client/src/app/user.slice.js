import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const todoSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    dataLogin(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
});

export const { dataLogin } = todoSlice.actions;

export default todoSlice.reducer;
