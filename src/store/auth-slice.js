import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    access: localStorage.getItem("access"),
    refresh: localStorage.getItem("refresh"),
    userId: localStorage.getItem("userId"),
  },
  reducers: {
    // updateUserData(state, action) {
    //   localStorage.setItem("user", JSON.stringify(action.payload.user));
    //   state.user = JSON.parse(localStorage.getItem("user"));
    //   state.access = localStorage.getItem("access");
    //   state.refresh = localStorage.getItem("refresh");
    //   state.userId = localStorage.getItem("userId");
    // },
    login(state, action) {
      // localStorage.setItem("userType", action.payload.userType);

      localStorage.setItem("access", action.payload.access);
      localStorage.setItem("refresh", action.payload.refresh);
      localStorage.setItem("userId", action.payload.userId);
      //   localStorage.setItem("user", JSON.stringify(action.payload.user));
      state.access = localStorage.getItem("access");
      state.refresh = localStorage.getItem("refresh");
      state.userId = localStorage.getItem("userId");
      //   state.user = JSON.parse(localStorage.getItem("user"));
    },

    logout(state) {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      localStorage.removeItem("userId");
      //   localStorage.removeItem("user");

      state.access = localStorage.getItem("access");
      state.refresh = localStorage.getItem("refresh");
      //   state.userId = localStorage.getItem("userId");
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
