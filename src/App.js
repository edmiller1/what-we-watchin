import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav.js";
import MovieCard from "./components/MovieCard.js";
import History from "./components/History.js";
import React, { useState, useEffect } from "react";
import "./styles/app.scss";
import Modal from "./components/Modal.js";

function App() {
  //state
  const [historyIsOpen, sethistoryIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  let [pageNum, setPageNum] = useState(1);
  const [movieStatus, setMovieStatus] = useState("");
  let [movieList, setMovieList] = useState([]);
  const [showMovieModal, setShowMovieModal] = useState(false);
  let [movie, setMovie] = useState({});
  const [movieDetails, setMovieDetails] = useState();

  //Arrays
  const [likedArray, setLikedArray] = useState([]);
  const [unlikedArray, setUnlikedArray] = useState([]);
  const [seenArray, setSeenArray] = useState([]);

  //useEffect
  useEffect(() => {
    if (movieList.length === 0) {
      getMovies();
    }
  }, [movieList]);

  //functions
  /*   const getMovies = async () => {
    for (let i = 1; i <= 2; i++) {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=0babab01bb1ea08c91f4f577372025d6&language=en-US&page=" +
          pageNum +
          "&region=US"
      );
      let data = await response.json();
      for (let key in data.results) {
        movieList.push(data.results[key]);
      }
      setMovieList(movieList);
      console.log(movieList);
      setPageNum((pageNum += 1));
    }
  }; */

  const getMovies = async () => {
    for (let i = 1; i <= 3; i++) {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=0babab01bb1ea08c91f4f577372025d6&language=en-US&page=" +
          pageNum +
          "&region=US"
      );
      let data = await response.json();
      for (let key in data.results) {
        movie = {
          movieData: data.results[key],
        };
        movieList.push(movie);
      }
      setMovieList(movieList);
      setPageNum((pageNum += 1));
    }
  };

  return (
    <div
      className={`app ${historyIsOpen ? "app-move" : ""}`}
      onClick={() => {
        if (showModal === true) {
          setShowModal(false);
        }
        if (showMovieModal === true) {
          setShowMovieModal(false);
        }
      }}
    >
      <Modal showModal={showModal} />
      <Nav
        historyIsOpen={historyIsOpen}
        sethistoryIsOpen={sethistoryIsOpen}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <MovieCard
        showMovieModal={showMovieModal}
        setShowMovieModal={setShowMovieModal}
        movieList={movieList}
        setMovieList={setMovieList}
        movieStatus={movieStatus}
        setMovieStatus={setMovieStatus}
        likedArray={likedArray}
        setLikedArray={setLikedArray}
        unlikedArray={unlikedArray}
        setUnlikedArray={setUnlikedArray}
        seenArray={seenArray}
        setSeenArray={setSeenArray}
      />
      <History
        historyIsOpen={historyIsOpen}
        likedArray={likedArray}
        unlikedArray={unlikedArray}
        seenArray={seenArray}
      />
    </div>
  );
}

export default App;
