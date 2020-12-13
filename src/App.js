import React, { useState } from "react";
import "./styles.css";

var movieDictonary = {
  Scifi: [
    { name: "Under Water", rating: "5/5" },
    { name: "The Platform", rating: "4/5" }
  ],
  Comedy: [
    { name: "Last Christmas", rating: "4/5" },
    { name: "The Boss Baby", rating: "3/5" }
  ],
  Action: [
    { name: "Blood Shot", rating: "4/5" },
    { name: "Aquaman", rating: "3/5" }
  ]
};

export default function App() {
  var [userGenre, setUserGenre] = useState("Scifi");
  function genreClickHandler(genre) {
    setUserGenre(genre);
  }
  return (
    <div className="App">
      <h3>
        <span role="img" aria-label="books">
          🎬
        </span>
        movie recommendation app
      </h3>
      <p style={{ fontStyle: "italic" }}>
        Select a genre to get best recommendations.
      </p>
      <div>
        {Object.keys(movieDictonary).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {" "}
            {genre}{" "}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieDictonary[userGenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
