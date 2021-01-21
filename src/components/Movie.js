import React, { useState, useMemo } from "react";
import Buttons from "./Buttons.js";

const Movie = ({
  movie,
  movieList,
  setMovieList,
  setShowMovieModal,
  showMovieModal,
  likedArray,
  setLikedArray,
  unlikedArray,
  setUnlikedArray,
  seenArray,
  setSeenArray,
}) => {
  const [imageURL, setImageURL] = useState("https://image.tmdb.org/t/p/w500");
  const [open, setOpen] = useState(false);

  const unlikeMovie = (id) => {
    const currentMovie = movieList.filter((film) => film.movieData.id === id);
    currentMovie.movieStatus = "unliked";
    console.log(currentMovie);
    unlikedArray.push(currentMovie);
    setUnlikedArray(unlikedArray);

    const newList = movieList.filter((movie) => movie.movieData.id !== id);
    setMovieList(newList);
  };

  const likeMovie = (id) => {
    const currentMovie = movieList.filter((film) => film.movieData.id === id);
    currentMovie.movieStatus = "liked";
    likedArray.push(currentMovie);
    setLikedArray(likedArray);

    const newList = movieList.filter((movie) => movie.movieData.id !== id);
    setMovieList(newList);
  };

  const alreadySeenMovie = (id) => {
    const currentMovie = movieList.filter((film) => film.movieData.id === id);
    currentMovie.movieStatus = "seen";
    seenArray.push(currentMovie);
    setSeenArray(seenArray);

    const newList = movieList.filter((movie) => movie.movieData.id !== id);
    setMovieList(newList);
  };

  const openModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex justify-center">
      <div
        className="card"
        style={{
          backgroundImage:
            "url(" + imageURL + movie.movieData.poster_path + ")",
        }}
      ></div>
      <Buttons
        movie={movie}
        unlikeMovie={unlikeMovie}
        likeMovie={likeMovie}
        alreadySeenMovie={alreadySeenMovie}
      />
    </div>
  );
};

export default Movie;
