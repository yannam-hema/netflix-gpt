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
          className="cursor-pointer text-xl font-bold ml-96 m-12 text-white z-10"
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
