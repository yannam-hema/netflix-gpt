import lang from "../Utils/LangConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, BackGround_Image } from "../Utils/constants";
import { useRef } from "react";
import openai from "../Utils/openai";
import { addActualGptMovies, addGptMovies } from "../Utils/gptSlice";


const GptSearchBar = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store);
  const langKey = state.config.lang;
  const searchText = useRef("");

  const searchmovie = async (movie) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const data = await response.json();
    return data.results;
  };

  const handleGptSearch = (e) => {
    e.preventDefault();
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: arjun reddy, kgf, bahubali, salaar, chennai express";

    const open_api_results = async () => {
      const chat = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });

      if (!chat.choices) {
        // Handle error page
        return;
      }

      const api_query_movies = chat.choices[0]?.message?.content.split(",");
      // ["movie1", "movie2", "movie3", "movie4", "movie5"]

      // Fetch movie data for each movie name and wait for all promises to resolve
      const searchmoviedata = await Promise.all(
        api_query_movies.map((movie) => searchmovie(movie.trim()))
      );

      // Dispatch the resolved data to the store
      dispatch(addGptMovies(searchmoviedata));
      dispatch(addActualGptMovies(api_query_movies));

    };

    open_api_results();
  };

  return (
    <div className="relative h-screen w-screen ">
      {/* Form container */}
      <div className="bg-black bg-opacity-75 w-1/2 mt-32 ml-auto mr-auto grid-cols-12 p-4 absolute z-10 left-0 right-0">
        <form className="w-full grid grid-cols-12 gap-2">
          <input
            ref={searchText}
            className="p-2 m-2 col-span-10"
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button
            className="p-2 m-2 bg-red-600 rounded-lg col-span-2 text-black font-bold"
            onClick={handleGptSearch}
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
