import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blog/dataBlog";
import creatmodalReducer from './creatmodal/creatmodal'

export const store = configureStore({
  reducer: {
     blogReducer,
     creatmodalReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


