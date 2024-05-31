import React from "react";
import { Link } from "react-router-dom";

const MoviesList = ({ movies }) => {
  return (
    <div className="d-flex justify-content-start">
      {movies.map((element, key) => {
        const { title, img, language } = element;
        return (
          <div class="card m-2" style={{ width: "18rem" }}>
            <div class="card-body">
              <img src={img} width="250" />
              <h5 class="card-title">{title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{language}</h6>
              <Link to="#" class="card-link">
                Watch
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MoviesList;
