import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { type } from "os";

// type initialState ={
//   value:BlogState;
// }

type BlogState ={
  id:number,
  author:string,
  content:string,
  title:string
}
const dataBlog = {
  

    id: 0,
    author: '',
    content: '',
    title: '',
  
} as BlogState



export const blog = createSlice({
  name: "blog",
  initialState:dataBlog ,
  reducers: {
    addBlog:(state, action:PayloadAction<BlogState>)=>{
        state.id=action.payload.id;
        state.author = action.payload.author;
        state.content = action.payload.content;
        state.title= action.payload.title;


    },
    outBlog:()=>{

      return dataBlog;
    }


    
  },
});
export const {outBlog, addBlog} = blog.actions;
export default blog.reducer;


