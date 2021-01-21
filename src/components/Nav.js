import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ historyIsOpen, sethistoryIsOpen, showModal, setShowModal }) => {
  return (
    <nav
      className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex justify-between items-center"
      style={{ height: "10vh" }}
    >
      <h1 className="text-4xl text-white pl-10">What We Watchin</h1>
      <div>
        {/*       <button
          className="outline-none focus:outline-none"
          onClick={() => setShowModal(true)}
        >
          <FontAwesomeIcon
            icon={faInfoCircle}
            className="text-white mr-10 text-3xl"
          />
        </button> */}
        <button
          onClick={() => sethistoryIsOpen(!historyIsOpen)}
          className="focus:outline-none outline-none"
        >
          <FontAwesomeIcon
            className={`nav-icon ${historyIsOpen ? "active-icon" : ""}`}
            icon={faList}
          />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
