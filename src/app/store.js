import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import apiSlice from "../features/api/apiSlice";
import authSlice from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducer]: apiSlice.reducer,
    auth: authSlice,
  },
  // middleware: (getDefaultMiddleWare) =>
  //   getDefaultMiddleWare().concat(apiSlice.middleware),
});

// export const store = configureStore({
//   reducer: combineReducers({
//      [apiSlice.reducer] : apiSlice.reducer,
//     auth: authSlice,
//   }),
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(),
// })
