import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    addUsers: (state, action) => {
      state.users = [...state.users, action.payload];
    },
  },
});
export let { addUsers } = userSlice.actions;

export default userSlice.reducer;
