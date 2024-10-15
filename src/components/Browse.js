import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import useNowPlayingMovies from "../CustomHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SeconndaryContainer"; 

const Browse = () => {
  useNowPlayingMovies();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // handle successful sign out
      })
      .catch((error) => {
        return error;
      });
  };

  return (
    <div>
      <div className="flex justify-between w-full  absolute top-0">
        <Header />
        <button
          onClick={handleSignOut}
          className=" m-8 cursor-pointer text-xl font-bold md:m-10 text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg absolute right-0 z-10"
        >
          Sign Out
        </button>
      </div>

      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
