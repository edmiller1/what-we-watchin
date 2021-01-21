import React, { useState } from "react";
import LikedMovies from "./LikedMovies.js";
import UnlikedMovies from "./UnlikedMovies.js";
import SeenMovies from "./SeenMovies.js";
import Tabs from "./Tabs.js";

const History = ({ historyIsOpen, likedArray, unlikedArray, seenArray }) => {
  return (
    <div className={`history ${historyIsOpen ? "active-history" : ""}`}>
      <div className="pt-3 px-3">
        <span className="text-lg uppercase pt-2">Library</span>
      </div>
      <hr />
      <Tabs>
        <div label="Unliked">
          {unlikedArray.map((movie, index) => (
            <UnlikedMovies movie={movie} key={index} />
          ))}
        </div>
        <div label="Watched">
          {seenArray.map((movie, index) => (
            <SeenMovies movie={movie} key={index} />
          ))}
        </div>
        <div label="Want to Watch">
          {likedArray.map((movie, index) => (
            <LikedMovies movie={movie} key={index} />
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default History;
