import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieList = () => {
    const { actualGptMovies, Gptmovies } = useSelector(store => store.gpt);

    if (!Gptmovies) {
        return null;
    }

    console.log(Gptmovies);

    return (
        <div className="text-white bg-black bg-opacity-85 ">
            <div>
                {actualGptMovies.map((movie, index) => (
                    <MovieList key={index} title={movie} movies={Gptmovies[index]} />
                ))}
                </div>
            
        </div>
    );
};

export default GptMovieList;
