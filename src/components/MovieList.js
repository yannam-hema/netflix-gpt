import MovieCard from "./MovieCard";

const MovieList = ({title,movies})=>{
    console.log(movies);
    return (
        <div className="">
              <h1 className="text-3xl p-2  text-white pl-20">{title}</h1>
            <div className="flex overflow-x-scroll">
                <div className="flex ">
                    {movies?.map((movie)=>( 
                    <MovieCard  key={movie.id}poster={movie.poster_path}/>
                    ))}
                </div>
            </div>
      
        </div>
    )
}
export default MovieList;