import lang from "../Utils/LangConstants";
import { useSelector } from "react-redux";
import {BackGround_Image} from "../Utils/constants"
const GptSearchBar = () => {
  const state = useSelector(store => store); 
  
  const langKey = state.config.lang; 

  return (
    <div className="relative h-screen w-screen">
      {/* Fullscreen background image */}
      <img 
        src={BackGround_Image} 
        alt="Background Image" 
        className="absolute top-0 left-0 h-full w-full object-cover"
      />

      {/* Form container */}
      <div className="bg-black bg-opacity-75 w-1/2 mt-32 ml-auto mr-auto grid-cols-12 p-4 absolute z-10 left-0 right-0">
        <form className="w-full grid grid-cols-12 gap-2">
          <input
            className="p-2 m-2 col-span-10 text-lg"
            placeholder={lang[langKey].gptSearchPlaceholder} 
          />
          <button
            className="p-2 m-2 bg-red-600 rounded-lg col-span-2 text-black font-bold"
            type="submit"
          >
            {lang[langKey].search} 
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
