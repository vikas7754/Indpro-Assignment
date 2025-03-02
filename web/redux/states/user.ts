import { createSlice } from "@reduxjs/toolkit";
import { logoutUser } from "@/APIs/user";

const initialState = {
  isLoggedIn: false,
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      logoutUser();
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
