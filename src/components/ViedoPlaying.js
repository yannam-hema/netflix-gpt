import useNowPlayingTeaser from "../CustomHooks/useNowPlayingTeaser.js";
import { useSelector } from "react-redux";
const ViedoPlaying=({movieId})=>{
    useNowPlayingTeaser();
    const viedoKey=useSelector(state=>state.movies?.nowPlayingTeaser);
    return (
        <div>
           {/* here the viedo is not working  */}
    <iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/"+viedoKey?.key+"?&autoplay=1&mute=1"}
     title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin" >
    </iframe>
        </div>
    )
}

export default ViedoPlaying;