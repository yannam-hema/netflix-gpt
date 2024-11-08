import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        Gptmovies:null,
        actualGptMovies:null,
    },
    reducers:{
     enableGptSearchPage:(state)=>{
        state.showGptSearch=!state.showGptSearch;
     },
     addGptMovies:(state,action)=>{
      state.Gptmovies=action.payload;
     },
     addActualGptMovies:(state,action)=>{
        state.actualGptMovies=action.payload;
     }
    }
})

export const {enableGptSearchPage,addActualGptMovies,addGptMovies} = gptSlice.actions;

export default gptSlice.reducer;
