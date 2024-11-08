import GptMovieList from "./GptMovieList";
import GptSearchBar from "./GptSearchBar";
import { BackGround_Image } from "../Utils/constants";
const GptSearch = () => {
  return (
    <div className="">
   {/* Fullscreen background image */}
   <img
        src={BackGround_Image}
        alt="Background Image"
        className="fixed top-0 left-0 h-full w-full object-cover"
      />
      <GptSearchBar />
      <div className="relative -mt-96">
        <GptMovieList />
      </div>
    </div>
  );
};

export default GptSearch;
