import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import useNowPlayingMovies from "../CustomHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SeconndaryContainer"; 
import { useDispatch, useSelector } from "react-redux";
import { enableGptSearchPage } from "../Utils/gptSlice";
import { LANGUAGES } from "../Utils/constants";
import GptSearch from "./GptSearch";
import { changeLanguage } from "../Utils/configSlice";

const Browse = () => {
  useNowPlayingMovies();
  const dispatch = useDispatch();
  const showGptSearch = useSelector(store => store.gpt.showGptSearch); 

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // Optionally handle successful sign out, e.g., redirect or show notification
    } catch (error) {
      console.error("Sign out error:", error);
      // Optionally display an error message to the user
    }
  };

  const handleGptSearch = () => {
    dispatch(enableGptSearchPage());
  };

  const handleLanguageChange = (event) => {
    dispatch(changeLanguage(event.target.value));  // Dispatch selected language value
  };

  return (
    <div>
      <div className="flex justify-between w-full absolute top-0">
        <Header />
        <div className="flex items-center absolute right-0 z-10">
          <select
            className="flex justify-center mt-10 p-2 mr-4"
            onChange={handleLanguageChange}  // Handle change event
          >
            {LANGUAGES.map(lang => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
          <button
            onClick={handleGptSearch}
            className="mr-4 mt-10 cursor-pointer text-xl font-bold text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
          >
            {showGptSearch ? "HomePage" : "GPT Search"}
          </button>
          <button
            onClick={handleSignOut}
            className="mt-10 cursor-pointer text-xl font-bold text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
          >
            Sign Out
          </button>
        </div>
      </div>
      <main>
        {showGptSearch ? (
          <GptSearch />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}
      </main>
    </div>
  );
};

export default Browse;
