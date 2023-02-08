import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieDetails = () => {
  const params = useParams();
  const movieID = params.movieID;
  const [movieData, setMovieData] = useState({});

  const url = "http://www.omdbapi.com/?apikey=83cb8cba&i=";

  const fetchMovieToShow = async () => {
    try {
      const response = await fetch(url + movieID);
      if (response.ok) {
        const rawMovieData = await response.json();
        console.log(rawMovieData);
        setMovieData(rawMovieData);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovieToShow();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieID]);

  return (
    <>
      <h1>{movieData.Title}</h1>
    </>
  );
};

export default MovieDetails;
