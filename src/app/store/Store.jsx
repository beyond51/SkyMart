import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../../Shared/state/UserLogindata";
import searchReducer from "../../Shared/state/SearchSlice";
import CartReducer from "../../Shared/state/CartSlice";

export let store = configureStore({
  reducer: {
    users: usersReducer,
    SearchProduct: searchReducer,
    CartItmes: CartReducer,
  },
});
