import { API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { addUpComingMovies } from "../Utils/moviesSlice";

const useUpComingMovies =()=>{
const dispatch = useDispatch();
const nowPlayingApi = async ()=>{
  const data = await fetch('https://api.themoviedb.org/3/movie/upcoming', API_OPTIONS)
  const json= await data.json();

  dispatch(addUpComingMovies(json.results));
}

useEffect(()=>{
  nowPlayingApi();
},[])
  
}
export default useUpComingMovies;