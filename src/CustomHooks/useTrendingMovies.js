import { API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { addTrendingMovies } from "../Utils/moviesSlice";

const useTrendingMovies =()=>{
const dispatch = useDispatch();
const nowPlayingApi = async ()=>{
  const data = await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTIONS)
  const json= await data.json();

  dispatch(addTrendingMovies(json.results));
}

useEffect(()=>{
  nowPlayingApi();
},[])
  
}
export default useTrendingMovies;