import { useSelector } from "react-redux";
import ViedoTitle from "./ViedoTitle";
import ViedoPlaying from "./ViedoPlaying";

const MainContainer=()=>{
    const movie=useSelector(store=>store.movies?.nowPlayingMovies)
    if(!movie) return ;
    const firstMovie=movie[4];
    const{title,overview,id}=firstMovie;
   return ( 
    <div>
    <ViedoTitle title={title} overview={overview}/>
    <ViedoPlaying movieId={id}/>
    </div>
    )
}
export default MainContainer;