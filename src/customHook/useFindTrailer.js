import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";

const useFindTrailer = (id) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getMovieTrailer()
      .then((result) => {
        if (result?.status === 200) {
          return result?.json();
        }
      })
      .then((data) => {
        setMovie(data);
        setLoading(false);
      });
  }, []);

  const getMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      API_OPTIONS
    );
    return data;
  };
  return { movie ,loading};
};

export default useFindTrailer;
