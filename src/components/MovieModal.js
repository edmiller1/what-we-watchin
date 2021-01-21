import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MovieModal = ({ movie, imageURL, isOpen, setIsOpen, movieDetails }) => {
  const closeModal = () => setIsOpen(false);

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Modal
        show={isOpen}
        onHide={closeModal}
        style={{
          opacity: 1,
        }}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>{movie[0].movieData.title}</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="flex flex-col">
          <div className="flex items-center">
            <span className="font-semibold">Release Date: </span>&nbsp;
            <span>{movie[0].movieData.release_date}</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold">Rating: </span>&nbsp;
            <div className="flex items-center text-sm">
              <FontAwesomeIcon
                icon={faStar}
                className={
                  movie[0].movieData.vote_average / 2 >= 1
                    ? "text-indigo-500"
                    : "text-gray-400"
                }
              />
              <FontAwesomeIcon
                icon={faStar}
                className={
                  movie[0].movieData.vote_average / 2 >= 2
                    ? "text-indigo-500"
                    : "text-gray-400"
                }
              />
              <FontAwesomeIcon
                icon={faStar}
                className={
                  movie[0].movieData.vote_average / 2 >= 3
                    ? "text-indigo-500"
                    : "text-gray-400"
                }
              />
              <FontAwesomeIcon
                icon={faStar}
                className={
                  movie[0].movieData.vote_average / 2 >= 4
                    ? "text-indigo-500"
                    : "text-gray-400"
                }
              />
              <FontAwesomeIcon
                icon={faStar}
                className={
                  movie[0].movieData.vote_average / 2 >= 5
                    ? "text-indigo-500"
                    : "text-gray-400"
                }
              />
            </div>
          </div>
          <br />
          <span className="font-semibold">Overview: </span>
          {movie[0].movieData.overview}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="modal-button"
            onClick={() => setIsOpen(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MovieModal;
