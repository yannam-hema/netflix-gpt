import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import useNowPlayingMovies from "../CustomHooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";
import SecondaryConatiner from "./SeconndaryContainer";
const Browse = () => {
useNowPlayingMovies();
  const handleSignOut= () => {
    signOut(auth)
      .then(() => {

      })
      .catch((error) => {
        return error;
      });
  };

  return (
    <div>
      <div className="flex justify-between absolute">
        <div>
      <Header />
      </div>
      <div>
      <button onClick={handleSignOut} className="z-10 cursor-pointer text-xl font-bold m-8">
        SignOut 
      </button>
      </div>
      </div>

      <MainContainer/>
      <SecondaryConatiner/>
    </div>
  );
};

export default Browse;
