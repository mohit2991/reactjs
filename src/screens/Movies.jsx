import React, { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";
import { getMovies } from "../Api";
import axios from "axios";

const Movies = () => {
  // APi call
  const [movies, setMovies] = useState([]);

  const moviesList = async () => {
    try {
      const response = await axios.get(getMovies);

      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    moviesList();
  }, []);

  return (
    <div class="container">
      <div>Movies list</div>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Movies;
