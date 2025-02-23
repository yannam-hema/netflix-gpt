import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingTeaser } from "../Utils/moviesSlice";

const useNowPlayingTeaser = ({ movieId }) => {
    const dispatch = useDispatch();

    const getMovieVideo = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
            const json = await response.json();
            const teaserVideos = json.results.filter((video) => video.type === "Trailer");
        
            const teaser = teaserVideos[0] || json.results[0]; // Select teaser if available, else first result
            dispatch(addNowPlayingTeaser(teaser));
        } catch (error) {
            console.error("Failed to fetch movie teaser:", error);
        }
    };

    useEffect(() => {
        if (movieId) {
            getMovieVideo();
        }
    }, [movieId]); // Re-run when movieId changes
};

export default useNowPlayingTeaser;
