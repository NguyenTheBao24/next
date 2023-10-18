import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blog/dataBlog";
import { type } from "os";

export const store = configureStore({
  reducer: {
     blogReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


