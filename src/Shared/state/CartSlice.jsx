import { createSlice } from "@reduxjs/toolkit";

let CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    addtocart: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
    deleteproduct: (state, action) => {
      state.cartItems = action.payload;
    },
    emptyCart: (state) => {
      state.cartItems = [];
    },
    updatecart: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});
export let { addtocart, deleteproduct, emptyCart, updatecart } =
  CartSlice.actions;
export default CartSlice.reducer;
