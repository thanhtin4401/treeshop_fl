import React from "react";
import authSlice from "./auth/authSlice";
import { combineReducers } from "redux";
import productSlice from "./produdct/productSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  product: productSlice,
});
export default rootReducer;
