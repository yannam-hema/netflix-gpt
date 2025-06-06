import useNowPlayingTeaser from "../CustomHooks/useNowPlayingTeaser.js";
import { useSelector } from "react-redux";
import usePopularMovies from "../CustomHooks/usePopularMovies.js";
import useTrendingMovies from "../CustomHooks/useTrendingMovies.js";
import useUpComingMovies from "../CustomHooks/useUpComingMovies.js";
const ViedoPlaying=({movieId})=>{
    
    useNowPlayingTeaser({movieId});
    usePopularMovies();
    useTrendingMovies();
    useUpComingMovies();
    const videoKey=useSelector(store=>store.movies?.nowPlayingTeaser);
    return (
        <div className="">
        { videoKey && 
    <iframe className=" -mt-10 md:-mt-28 w-screen aspect-video" src={`https://www.youtube.com/embed/${videoKey.key}?autoplay=1&mute=1`}
     title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin" >
    </iframe>
}
        </div>
    )
}

export default ViedoPlaying;