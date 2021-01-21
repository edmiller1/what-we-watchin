import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import MovieModal from "./MovieModal.js";

const LikedMovies = ({ movie }) => {
  const [imageURL, setImageURL] = useState("https://image.tmdb.org/t/p/w500");
  const [isOpen, setIsOpen] = useState(false);
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
        <h1 className="font-semibold text-sm">{movie[0].movieData.title}</h1>
        <span className="font-light text-gray-400 text-sm">
          {movie[0].movieData.release_date}
        </span>
        <div className="flex items-center text-sm">
          <FontAwesomeIcon
            icon={faStar}
            className={
              movie[0].movieData.vote_average / 2 >= 1
                ? "text-green-500"
                : "text-gray-400"
            }
          />
          <FontAwesomeIcon
            icon={faStar}
            className={
              movie[0].movieData.vote_average / 2 >= 2
                ? "text-green-500"
                : "text-gray-400"
            }
          />
          <FontAwesomeIcon
            icon={faStar}
            className={
              movie[0].movieData.vote_average / 2 >= 3
                ? "text-green-500"
                : "text-gray-400"
            }
          />
          <FontAwesomeIcon
            icon={faStar}
            className={
              movie[0].movieData.vote_average / 2 >= 4
                ? "text-green-500"
                : "text-gray-400"
            }
          />
          <FontAwesomeIcon
            icon={faStar}
            className={
              movie[0].movieData.vote_average / 2 >= 5
                ? "text-green-500"
                : "text-gray-400"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default LikedMovies;
