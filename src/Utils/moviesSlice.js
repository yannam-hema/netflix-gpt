import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice(
    {
        name:"movies",
        initialState:{
            nowPlayingMovies:null,
            nowPlayingTeaser:null,
            popularMovies:null,
            trendingMovies:null,
            upComingMovies:null,
        },
        reducers:{
            addNowPlayingMovies:(state,action)=>{
                state.nowPlayingMovies=action.payload;
            },
            addPopularMovies:(state,action)=>{
                state.popularMovies=action.payload;
            },
            addNowPlayingTeaser:(state,action)=>{
                state.nowPlayingTeaser=action.payload;
            },
            addTrendingMovies:(state,action)=>{
                state.trendingMovies=action.payload;
            },
            addUpComingMovies:(state,action)=>{
                state.upComingMovies=action.payload;
            },
        }
    }
    
)
export const {addNowPlayingMovies,addNowPlayingTeaser,addPopularMovies,addTrendingMovies,addUpComingMovies} = moviesSlice.actions;
export default moviesSlice.reducer
