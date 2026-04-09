import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
  name: "users",
  initialState: {
    users: JSON.parse(localStorage.getItem("users")) || [],
  },
  reducers: {
    addUsers: (state, action) => {
      state.users = [...state.users, action.payload];
      localStorage.setItem("users", JSON.stringify(state.users));
    },
  },
});
export let { addUsers } = userSlice.actions;

export default userSlice.reducer;
