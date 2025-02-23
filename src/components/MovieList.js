import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {


  if (!Array.isArray(movies)) {
    
    return <p className="text-white p-4">No movies available</p>;
  }

  return (
    <div className="">
      <h1 className="text-3xl p-2 text-white pl-8 md:pl-20">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} poster={movie.poster_path} />
            ))
          ) : (
            <p className="text-white p-4">No movies found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
