import React from "react";
import { useEffect, useState } from "react";
import "../assets/css/trendingSection.css";
// import batmanImage from "../assets/movies-img/batman.jpg";
// import antmanImage from "../assets/movies-img/ant-man.jpg";
// import drstrangeImage from "../assets/movies-img/dr-strange.jpg";
// import flashImage from "../assets/movies-img/flash.jpg";
// import hulkImage from "../assets/movies-img/hulk.jpg";
// import supermanImage from "../assets/movies-img/superman.jpg";
// import thorImage from "../assets/movies-img/thor.jpg";
// import wolverineImage from "../assets/movies-img/wolverine.jpg";
import axios from "axios";

const TrendingSection = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
    }).then((response) => {
        setMovies(response.data.results);
      }).catch((error) => console.log(error));
  }, []);

  return (
    <section className="trending" id="trending">
      <h2>
        Trending <span>Movies</span>
      </h2>

      <div className="row">
        {movies.map((result, index) => {
          return (
            <div className="movie-card" key={index}>
              <img src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`}
                className="movie-card-image" />
              <h3 className="movie-card-title">{result.title}</h3>
              <p className="language">Language : <span>{result.original_language}</span></p>
              <p className="movie-card-view">View : <span>{result.popularity}</span></p>
            </div>
          );
        })}
        {/* <div className="movie-card">
          <img src={antmanImage} className="movie-card-image" />
          <h3 className="movie-card-title">Batman</h3>
          <p className="movie-card-view">View : 7.8</p>
        </div>
        <div className="movie-card">
          <img src={drstrangeImage} className="movie-card-image" />
          <h3 className="movie-card-title">Batman</h3>
          <p className="movie-card-view">View : 7.8</p>
        </div>
        <div className="movie-card">
          <img src={flashImage} className="movie-card-image" />
          <h3 className="movie-card-title">Batman</h3>
          <p className="movie-card-view">View : 7.8</p>
        </div>
        <div className="movie-card">
          <img src={hulkImage} className="movie-card-image" />
          <h3 className="movie-card-title">Batman</h3>
          <p className="movie-card-view">View : 7.8</p>
        </div>
        <div className="movie-card">
          <img src={supermanImage} className="movie-card-image" />
          <h3 className="movie-card-title">Batman</h3>
          <p className="movie-card-view">View : 7.8</p>
        </div>
        <div className="movie-card">
          <img src={thorImage} className="movie-card-image" />
          <h3 className="movie-card-title">Batman</h3>
          <p className="movie-card-view">View : 7.8</p>
        </div>
        <div className="movie-card">
          <img src={wolverineImage} className="movie-card-image" />
          <h3 className="movie-card-title">Batman</h3>
          <p className="movie-card-view">View : 7.8</p>
        </div> */}
      </div>
    </section>
  );
};

export default TrendingSection;
