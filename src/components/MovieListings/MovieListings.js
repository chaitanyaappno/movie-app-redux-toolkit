import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieListings = () => {
  const movies = useSelector((state) => state.movies.movies);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: true,
  };
  console.log("movies", movies);
  return (
    <Slider {...settings}>
      {movies?.data?.Search?.map((movie, index) => (
        <div>
          <MovieCard data={movie} key={index} />
        </div>
      ))}
    </Slider>
  );
};

export default MovieListings;
