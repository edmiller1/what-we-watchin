import React from "react";
import Movie from "./Movie.js";

const MovieCard = ({
  movieList,
  setMovieList,
  movieStatus,
  setMovieStatus,
  showMovieModal,
  setShowMovieModal,
  likedArray,
  setLikedArray,
  unlikedArray,
  setUnlikedArray,
  seenArray,
  setSeenArray,
}) => {
  return (
    <div>
      <div
        className="flex flex-col justify-center items-center pt-20"
        style={{ minHeight: "60vh" }}
      >
        {movieList.map((movie) => (
          <Movie
            setShowMovieModal={setShowMovieModal}
            showMovieModal={showMovieModal}
            movie={movie}
            key={movie.movieData.id}
            movieList={movieList}
            setMovieList={setMovieList}
            setShowMovieModal={setShowMovieModal}
            likedArray={likedArray}
            setLikedArray={setLikedArray}
            unlikedArray={unlikedArray}
            setUnlikedArray={setUnlikedArray}
            seenArray={seenArray}
            setSeenArray={setSeenArray}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieCard;
