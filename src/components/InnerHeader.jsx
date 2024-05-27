import React from "react";
import { Link } from "react-router-dom";

const InnerHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-between"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={"/movies"} className="nav-link">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/ToDo"} className="nav-link">
                TODo
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/stream"} className="nav-link">
                Stream
              </Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Plays
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Activites
              </a>
            </li>
          </ul>

          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                ListYourShow
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Corporates
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Offers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Gift cards
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default InnerHeader;
