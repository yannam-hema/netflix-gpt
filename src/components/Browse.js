import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";

const Browse = () => {
  const navigate = useNavigate();

  const handleSignOut= () => {
    signOut(auth)
      .then(() => {
        // Navigate to the main page after successful sign out
        navigate("/");
        console.log("sucess");
      })
      .catch((error) => {
        console.error("Sign out error: ", error);
        // Optionally navigate to an error page or handle the error
        navigate("/Error");
        console.log("error");
      });
  };

  return (
    <div>
      <div className="flex justify-between">
        <div>
      <Header />
      </div>
      <div>
      <button onClick={handleSignOut} className="z-10 cursor-pointer text-xl font-bold m-8">
        SignOut 
      </button>
      </div>
      </div>
    </div>
  );
};

export default Browse;
