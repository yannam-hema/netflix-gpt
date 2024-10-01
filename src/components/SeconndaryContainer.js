import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryConatiner=()=>{
    const movies=useSelector(store=>store.movies);
    return (
        <div className="bg-black">
            <div className="-mt-48 relative z-20">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Trending"} movies={movies.trendingMovies}/>
            <MovieList title={"popular"} movies={movies.popularMovies}/>
            <MovieList title={"Upcoming"} movies={movies.upComingMovies}/>
            </div>
        </div>
    )
}
export default SecondaryConatiner;