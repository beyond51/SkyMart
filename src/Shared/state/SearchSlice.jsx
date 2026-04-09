import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "search",
  initialState: {
    search: null,
  },
  reducers: {
    SearchProduct: (state, action) => {
      state.search = action.payload;
    },
  },
});
export let { SearchProduct } = SearchSlice.actions;
export default SearchSlice.reducer;
