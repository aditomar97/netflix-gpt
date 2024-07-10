import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_HEADERS, API_OPTIONS } from "../utils/constant";
const useNowPlaying=()=>{
    const dispatch = useDispatch();
    useEffect(() => {
      getNowPalyingMovies();
    }, []);
  
    const getNowPalyingMovies = async () => {
      const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
      const result = await data.json();
      dispatch(addNowPlayingMovies(result));
    };
}

export default useNowPlaying