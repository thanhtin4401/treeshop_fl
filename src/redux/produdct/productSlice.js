import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

import { localStorageService } from "../../service/localStogeService";
import { https } from "../../service/apiService";

const initialState = {
  allProduct: [],
  isLoading: false,
};

//LOGIN
export const getAllProduct = createAsyncThunk(
  "product/getAll",
  async (thunkAPI) => {
    try {
      const res = await https.get("/products/all");

      return res.data;
    } catch (error) {
      message.error(error.response.data);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//REGISTER

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset: (state) => {
      return {
        ...state,
        isLoading: false,
      };
    },
  },
  extraReducers: (builder) => {
    return builder
      .addCase(getAllProduct.pending, (state) => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(getAllProduct.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          allProduct: payload.data,
        };
      })
      .addCase(getAllProduct.rejected, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
        };
      });
  },
});
// Action creators are generated for each case reducer function
export const { reset } = productSlice.actions;

export default productSlice.reducer;
