import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { useEffect } from "react";

const Body = () => {
  const dispatch = useDispatch(); // Get the dispatch function

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user; // Ensure correct property names
        dispatch(addUser({ userid: uid, email, displayName }));
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);
  
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
