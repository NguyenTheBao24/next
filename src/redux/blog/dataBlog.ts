import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const dataBlog: BlogState[] = [];

export const blog = createSlice({
  name: "blog",
  initialState: dataBlog,
  reducers: {
    addBlog: (state, action: PayloadAction<BlogState[]>) => {
      if (typeof action.payload !== "object" || action.payload === null) {
        console.error("Payload is not iterable");
      } else {
        // Thực hiện vòng lặp hoặc các hoạt động bạn cần với payload
        const isCheck = state.some((blog) => blog.id === action.payload[0].id);
        if (!isCheck) state.push(...action.payload);
        state.sort((a, b) => b.id - a.id);
      }
    },
    outBlog: () => {
      return dataBlog;
    },
  },
});
export const { outBlog, addBlog } = blog.actions;
export default blog.reducer;
