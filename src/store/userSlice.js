import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedin: true,
  username: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.isLoggedin = true;
      // console.log("action.payload.name ", action.payload);
      state.username = action.payload;
    },
    logout: (state) => {
      state.isLoggedin = false;
    },
  },
});

export const { logIn, logout } = userSlice.actions;

export default userSlice.reducer;
