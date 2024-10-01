import { IMG_CDN_URL } from "../Utils/constants";

const MovieCard=({poster})=>{
    return (
        <div className="w-48 px-2">
        <img className="shadow-white" alt=" movie card" src={IMG_CDN_URL+poster} ></img>
        </div>
    )
}
export default MovieCard;