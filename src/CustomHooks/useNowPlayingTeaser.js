import { useEffect} from "react";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch} from "react-redux";
import { addNowPlayingTeaser } from "../Utils/moviesSlice";
const useNowPlayingTeaser=()=>{
    const dispatch= useDispatch();
    const getMovieViedo=async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/957452/videos?language=en-US',API_OPTIONS);
        const json= await data.json();
        //console.log(json);
        const teaserViedoes= json.results.filter((viedo)=>viedo.type==="Teaser");
        console.log(teaserViedoes);
        const teaser = (teaserViedoes?[0]:json.results[0]);
        dispatch(addNowPlayingTeaser(teaser));

    }
    useEffect(()=>{
   getMovieViedo();
    },[])
}
export default useNowPlayingTeaser;