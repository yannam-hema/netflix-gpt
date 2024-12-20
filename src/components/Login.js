import { useRef, useState } from "react";
import Header from "./Header";
import checkValidation from "../Utils/validate";
import { auth } from "../Utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { BackGround_Image } from "../Utils/constants";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [displayMessage, setDisplayMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
const Navigate=useNavigate();
  const handleClick = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    // Validate inputs
    const message = checkValidation(
      email.current.value,
      password.current.value,
      isSignIn ? null : name.current.value // Pass name only if it's sign-up
    );
    setDisplayMessage(message);

    // Stop if validation fails
    if (message) return;

    // Firebase Sign-Up
    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          setDisplayMessage("Registration successful!");
         Navigate("/browse");
        })
        .catch((error) => {
          const errorMessage = error.message;
          setDisplayMessage(`Error: ${errorMessage}`);
        });
    }
    //signIn
    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => { 
        const user = userCredential.user;
        Navigate("/Browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setDisplayMessage(errorCode+" - "+errorMessage);
      });
    }
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <img
        className="absolute h-screen w-screen object-cover"
        src={BackGround_Image}
        alt="Background image"
      />

      <form className=" w-3/4 absolute bg-black text-white md:w-3/12 p-12 my-40 mx-auto right-0 left-0 bg-opacity-75">
        <h1 className="m-2 font-bold text-3xl">{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && (
          <input
            ref={name}
            className="p-3 my-3 mx-2 w-full bg-gray-500"
            placeholder="Full Name"
            type="text"
          />
        )}
        <input
          ref={email}
          className="p-2 my-3 mx-2 w-full bg-gray-500"
          placeholder="Email"
          type="email"
        />
        <input
          ref={password}
          className="p-3 my-3 mx-2 w-full bg-gray-500"
          placeholder="Password"
          type="password"
        />
        <p className="text-red-600 font-bold">{displayMessage}</p>
        <button
          className="bg-red-500 w-full m-2 p-3"
          onClick={(e) => {
            e.preventDefault(); // Prevent default form submission behavior
            handleButtonClick();
          }}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <h5 className="m-2 cursor-pointer" onClick={handleClick}>
          {isSignIn ? "New to Netflix? Sign Up" : "Already a User? Sign In"}
        </h5>
      </form>
    </div>
  );
};

export default Login;
