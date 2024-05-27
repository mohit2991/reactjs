import React from "react";
import { Link } from "react-router-dom";

const MoviesList = ({ movies }) => {
  return (
    <div className="d-flex justify-content-start">
      {movies.map((element, key) => {
        const { title, subTitle } = element;
        return (
          <div class="card m-2" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{subTitle}</h6>
              <p class="card-text">
                {key} -Some quick example text to build on the card title and
                make up the bulk of the card's content.
              </p>
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
