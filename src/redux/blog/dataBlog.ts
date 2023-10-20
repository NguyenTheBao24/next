import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const dataBlog :BlogState[]=[];

export const blog = createSlice({
  name: "blog",
  initialState: dataBlog,
  reducers: {
    addBlog: (state, action: PayloadAction<BlogState[]>) => {
      const isCheck = state.some((blog)=> blog.id === action.payload[0].id);
      if(!isCheck) state.push(...action.payload);
    },
    outBlog: () => {
      return dataBlog;
    },
  },
});
export const { outBlog, addBlog } = blog.actions;
export default blog.reducer;
