import React, { useEffect } from "react";
import { movieApi } from "../../common/api/movieApi";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";
import MovieListings from "../MovieListings/MovieListings";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apikey=a4f730ca&s="harry"&type=movie`)
        .catch((err) => {
          console.log("error", err);
        });
      dispatch(addMovies(response));
    };
    fetchMovies();
  });
  return (
    <div>
      <MovieListings />
    </div>
  );
};

export default Home;
