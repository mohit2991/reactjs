import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  // const location = useLocation();
  const [active, setActive] = useState("");

  // useEffect(() => {
  //   console.log(">>>> Mohit location", location);
  //   setActive(location.pathname);
  // }, [location]);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to={"/"} className={active === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} className={active === "/about" ? "active" : ""}>
              About
            </Link>
          </li>
          <li>
            <Link
              to={"/contact"}
              className={active === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to={"/counter"}
              className={active === "/counter" ? "active" : ""}
            >
              Counter
            </Link>
          </li>
          <li>
            <Link to={"/form"} className={active === "/form" ? "active" : ""}>
              Form
            </Link>
          </li>
          <li>
            <Link to={"/todo"} className={active === "/form" ? "active" : ""}>
              Todo
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
