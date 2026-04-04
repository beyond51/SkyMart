import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../../Shared/state/UserLogindata";
export let store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
