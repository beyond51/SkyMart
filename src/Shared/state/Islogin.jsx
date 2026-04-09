import { createSlice } from "@reduxjs/toolkit";

let isloginReducer = createSlice({
  name: "islogin",
  initialState: {
    islogin: false,
  },
  reducers: {
    setlogin: (state, action) => {
      state.islogin = !state.islogin;
    },
  },
});
export let { setlogin } = isloginReducer.actions;
export default isloginReducer.reducer;
