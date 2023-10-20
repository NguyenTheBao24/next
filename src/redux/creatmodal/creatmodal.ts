import { createSlice } from "@reduxjs/toolkit";

const isShow:boolean = false;

export const creatmodal = createSlice({
    name:"creamodal",
    initialState:isShow,
    reducers:{
        view:(state)=>{
           return state=true
        },
        close:(state)=>{
           return state=false
        }

    }

}) 

export const { view ,close } = creatmodal.actions;
export default creatmodal.reducer;