// productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductById = createAsyncThunk(
  "productDetail/fetchById",
  async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    return res.json();
  }
);

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState: { product: {}, isLoading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default productDetailSlice.reducer;