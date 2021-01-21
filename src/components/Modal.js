import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faTimes,
  faStar,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const Modal = ({ showModal }) => {
  return (
    <div className={`modal ${showModal ? "modal-show" : ""}`}>
      <h1 className="flex justify-center text-gray-500 py-5 px-5 uppercase text-2xl">
        Welcome to What we Watchin
      </h1>
      <hr />
      <h3 className="flex justify-center text-gray-500 text-center py-5 px-5 items-center">
        Open this menu anytime by pressing the&nbsp;
        <FontAwesomeIcon icon={faInfoCircle} /> &nbsp;in the nav bar
      </h3>
      <h2 className="flex justify-center uppercase text-gray-500 text-xl py-3">
        about
      </h2>
      <h3 className="flex justify-center text-gray-500 text-center pb-5">
        This app is used to help you decide what to watch on your favourite
        streaming services (Netflix, Amazon Prime etc.). By swiping left, right,
        up or by clicking the corrsponding buttons below the movie image.
      </h3>
      <h2 className="flex justify-center uppercase text-gray-500 text-xl py-2">
        how to use
      </h2>
      <h3 className="flex justify-center text-gray-500 text-center px-5 items-center">
        Swiping Right/Clicking the &nbsp;
        <FontAwesomeIcon icon={faTimes} />
      </h3>
      <h3 className="flex justify-center text-gray-500 text-center px-5 pb-2 items-center">
        This will indicate that you don't like or don't like the look of the
        current movie being displayed.
      </h3>
      <h3 className="flex justify-center text-gray-500 text-center px-5 items-center">
        Swiping Up/Clicking the &nbsp;
        <FontAwesomeIcon icon={faStar} />
      </h3>
      <h3 className="flex justify-center text-gray-500 text-center px-5 pb-2 items-center">
        This will indicate that you have seen the current movie being displayed
        and enjoyed it.
      </h3>
      <h3 className="flex justify-center text-gray-500 text-center px-5 items-center">
        Swiping Up/Clicking the &nbsp;
        <FontAwesomeIcon icon={faHeart} />
      </h3>
      <h3 className="flex justify-center text-gray-500 text-center px-5 pb-2 items-center">
        This will indicate that you like the look of the current movie being
        displayed.
      </h3>
      <h2 className="flex justify-center uppercase text-gray-500 text-xl py-2">
        CONTACT
      </h2>
      <h3 className="flex justify-center text-gray-500 text-center px-5 pb-4 items-center">
        If you like the app feel free to &nbsp;
        <FontAwesomeIcon icon={faStar} /> &nbsp; the repo &nbsp;
        <a
          href="https://github.com/edmiller1/what-we-watchin"
          className="font-semibold text-blue-500 hover:text-blue-700"
        >
          @Github
        </a>
      </h3>
    </div>
  );
};

export default Modal;
