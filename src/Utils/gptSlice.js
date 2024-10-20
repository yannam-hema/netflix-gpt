import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
    },
    reducers:{
     enableGptSearchPage:(state)=>{
        state.showGptSearch=!state.showGptSearch;
     }
    }
})

export const {enableGptSearchPage} = gptSlice.actions;

export default gptSlice.reducer;
