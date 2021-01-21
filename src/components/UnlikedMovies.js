import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import MovieModal from "./MovieModal";
import { Modal, Button } from "react-bootstrap";

//TODO: Call Movie/Details/:id API (UseEffect)

const UnlikedMovies = ({ movie }) => {
  const [imageURL, setImageURL] = useState("https://image.tmdb.org/t/p/w500");
  const [isOpen, setIsOpen] = useState(false);
  let [movieDetails, setMovieDetails] = useState();

  const openModal = () => setIsOpen(true);

  return (
    <div className="history-movie" onClick={openModal}>
      <MovieModal isOpen={isOpen} movie={movie} setIsOpen={setIsOpen} />
      <div className="py-1 px-2">
        <img
          src={imageURL + movie[0].movieData.poster_path}
          className="w-20 rounded-lg shadow-lg"
        />
      </div>
      <div className="py-4 flex flex-col">
        <h2 className="font-semibold text-sm">{movie[0].movieData.title}</h2>
        <span className="font-light text-gray-400 text-sm">
          {movie[0].movieData.release_date}
        </span>
        <div className="flex items-center text-sm">
          <FontAwesomeIcon
            icon={faStar}
            className={
              movie[0].movieData.vote_average / 2 >= 1
                ? "text-red-500"
                : "text-gray-400"
            }
          />
          <FontAwesomeIcon
            icon={faStar}
            className={
              movie[0].movieData.vote_average / 2 >= 2
                ? "text-red-500"
                : "text-gray-400"
            }
          />
          <FontAwesomeIcon
            icon={faStar}
            className={
              movie[0].movieData.vote_average / 2 >= 3
                ? "text-red-500"
                : "text-gray-400"
            }
          />
          <FontAwesomeIcon
            icon={faStar}
            className={
              movie[0].movieData.vote_average / 2 >= 4
                ? "text-red-500"
                : "text-gray-400"
            }
          />
          <FontAwesomeIcon
            icon={faStar}
            className={
              movie[0].movieData.vote_average / 2 >= 5
                ? "text-red-500"
                : "text-gray-400"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default UnlikedMovies;
