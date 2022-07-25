// App.js

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./style/index.css";
import "./style/about.css";
import "./style/home.css";

export function Home() {
  const BASE_URL = "http://www.omdbapi.com/?apikey=7cbc726&s=";
  const [movies, setMovies] = useState([]);
  const [searchValues, setSearchValues] = useState("");

  const fetchMovies = (searchValues) => {
    localStorage.setItem('sv', searchValues);
    fetch(BASE_URL + searchValues)
      .then((response) => response.json())
      .then((json) => {
        console.log()
        setMovies(json.Search);
      });
  };

  if(localStorage.getItem('sv') !== undefined){
    fetchMovies(localStorage.getItem('sv'));
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="navbar-brand">www.omdbapi.com</div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <input
              value={searchValues}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => {
                setSearchValues(e.target.value);
              }}
            />
            <button
              className="btn btn-outline-success"
              onClick={() => fetchMovies(searchValues)}
            >
              Search
            </button>
          </div>
        </div>
      </nav>
      <div className="flex-w">
        {movies.map((movie) => {
          return (
                <div className="movies-container">
                  <Link className="dico-none" to={movie.imdbID}>
                    <div className="poster-img">
                    <img
                    className="image-m"
                      src={movie?.Poster}
                      alt="..."
                    />
                    </div>
                  </Link>
                </div>   
          );
        })}
      </div>
    </>
  );
}

export function About() {
  const BASE_URL = "http://www.omdbapi.com/?apikey=7cbc726&i=";
  const { imdbID } = useParams();
  console.log(imdbID);

  const [movie, setMovie] = useState();

  useEffect(() => {
    const fetchDetails = () => {
      fetch(BASE_URL + imdbID)
        .then((response) => response.json())
        .then((json) => {
          setMovie(json);
          console.log(json.Title);
        });
    };
    fetchDetails();
  }, [imdbID]);

  return (
    <>
      <div className="DetailContainer">
        <img src={movie?.Poster} alt="#"></img>
        <div>
          <h2>{movie?.Title}</h2>
          <p>{movie?.Plot}</p>
        </div>
      </div>
    </>
  );
}
