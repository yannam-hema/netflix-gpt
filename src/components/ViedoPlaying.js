import useNowPlayingTeaser from "../CustomHooks/useNowPlayingTeaser.js";
import { useSelector } from "react-redux";
import usePopularMovies from "../CustomHooks/usePopularMovies.js";
import useTrendingMovies from "../CustomHooks/useTrendingMovies.js";
import useUpComingMovies from "../CustomHooks/useUpComingMovies.js";
const ViedoPlaying=({movieId})=>{
    useNowPlayingTeaser();
    usePopularMovies();
    useTrendingMovies();
    useUpComingMovies();
    const viedoKey=useSelector(state=>state.movies?.nowPlayingTeaser);
    return (
        <div>
           {/* here the viedo is not working  */}
           {/* added default key instead of that we shoul use viedoKey?.key */}
    <iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/WxwKzsklvJo?&autoplay=1&mute=1"}
     title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin" >
    </iframe>
        </div>
    )
}

export default ViedoPlaying;