import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import MovieModal from "./MovieModal.js";

const Buttons = ({ movie, unlikeMovie, likeMovie, alreadySeenMovie }) => {
  return (
    <div className="flex justify-center items-center absolute pt-48">
      <button
        id="unlike"
        type="button"
        onClick={() => unlikeMovie(movie.movieData.id)}
        className="flex items-center px-8 py-6 mt-2 border-2 border-gray-200 rounded-full text-red-500 cursor-pointer focus:outline-none bg-white hover:bg-gray-200"
      >
        <FontAwesomeIcon icon={faTimes} className="text-3xl" />
      </button>
      <button
        id="superlike"
        type="button"
        onClick={() => alreadySeenMovie(movie.movieData.id)}
        className="flex items-center px-3 py-3 border-2 border-gray-200 rounded-full text-blue-500 cursor-pointer focus:outline-none bg-white hover:bg-gray-200 mx-8"
      >
        <FontAwesomeIcon icon={faStar} className="text-3xl" />
      </button>
      <button
        id="like"
        type="button"
        onClick={() => likeMovie(movie.movieData.id)}
        className="flex items-center px-7 py-6 mt-2 border-2 border-gray-200 rounded-full text-green-500  cursor-pointer focus:outline-none bg-white hover:bg-gray-200"
      >
        <FontAwesomeIcon icon={faHeart} className="text-3xl" />
      </button>
    </div>
  );
};

export default Buttons;
