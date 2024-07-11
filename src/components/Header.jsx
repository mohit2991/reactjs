import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import InnerHeader from "./InnerHeader";
import ThemeToggleButton from "./ThemeToggleButton";
import useApi from "../api/useApi";
const logo = "/images/logo.png";

function Header() {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("email");
  // const [userEmail] = useState(localStorage.getItem("email"));

  function getProfile() {
    const promise = useApi.userProfile();
    promise
      .then(async function (respose) {
        console.log(">>>>>>> profile respose", respose);
      })
      .catch((error) => {
        console.log(">>>>>>> profile error", error.message);
        // setLoading(false);
        // if (error.response.status === 401) {
        //   showToast(error.response.data.message, "error");
        // } else {
        //   console.log("Error while login", error.message);
        //   showToast(error.message, "error");
        // }
      });
  }

  // it's render once after jsx render (ComponentDidMount)
  useEffect(() => {
    getProfile();
  }, []);

  const logout = async () => {
    await localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar" aria-label="First navbar example">
        <div className="container">
          <div className="d-flex justify-content-start align-items-center">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt={"logo"} />{" "}
            </Link>
            <form className="col-12">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
          <ThemeToggleButton />
          <div className="d-flex justify-content-start align-items-center">
            {userEmail ? (
              <>
                <p>{userEmail}&nbsp;&nbsp;</p>
                <button
                  onClick={logout}
                  type="button"
                  className="btn btn-danger btn-sm me-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to={"login"}>
                <button type="button" className="btn btn-danger btn-sm me-2">
                  Sign in
                </button>
              </Link>
            )}

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbarDark"
              aria-controls="offcanvasNavbarDark"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            className="offcanvas offcanvas-end text-bg-white"
            tabindex="-1"
            id="offcanvasNavbarDark"
            aria-labelledby="offcanvasNavbarDarkLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarDarkLabel">
                Offcanvas
              </h5>
              <button
                type="button"
                className="btn-close btn-close-dark"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <InnerHeader />
    </>
  );
}

export default Header;
