import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice(
    {
        name:"movies",
        initialState:{
            nowPlayingMovies:null,
            nowPlayingTeaser:null,
        },
        reducers:{
            addNowPlayingMovies:(state,action)=>{
                state.nowPlayingMovies=action.payload;
            },
            addNowPlayingTeaser:(state,action)=>{
                state.nowPlayingTeaser=action.payload;
            }
        }
    }
    
)
export const {addNowPlayingMovies,addNowPlayingTeaser} = moviesSlice.actions;
export default moviesSlice.reducer
