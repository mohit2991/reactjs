import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { showToast } from "../../utils/toast";
import useApi from "../../api/useApi";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "email_address") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  useEffect(
    function () {
      if (email !== "" && password !== "") {
        setIsButtonDisabled(false);
      }
    },
    [email, password]
  );

  const login = () => {
    setLoading(true); // set loader
    const payload = { email, password };

    const promise = useApi.login(payload); // Call login api
    promise
      .then(async function (respose) {
        setLoading(false); // unset loader
        await localStorage.setItem("email", email);
        await localStorage.setItem("token", respose.data.token);
        await sessionStorage.setItem("email", email);
        clearFrom();
        showToast("Login Successfully!", "success");
        navigate("/movies");
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401) {
          showToast(error.response.data.message, "error");
        } else {
          console.log("Error while login", error.message);
          showToast(error.message, "error");
        }
      });
  };

  function clearFrom() {
    setEmail("");
    setPassword("");
    setIsButtonDisabled(true);
    setError("");
  }

  return (
    <>
      <div className="page-login page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="card mt-5">
                <div className="card-body">
                  <h3 className="card-title text-center mb-4">Login</h3>
                  <p style={{ color: "red" }}>{error}</p>
                  <form>
                    <div className="mb-3">
                      <label for="email" className="form-label">
                        Email address
                      </label>
                      <input
                        name="email_address"
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        onChange={handleChange}
                        value={email}
                        autoComplete="off"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="password" className="form-label">
                        Password
                      </label>
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        onChange={handleChange}
                        value={password}
                        autoComplete="off"
                      />
                    </div>
                    <div className="mb-3 text-end">
                      <Link to="/forgot-password">Forgot Password</Link>
                    </div>
                    <button
                      disabled={isButtonDisabled}
                      type="button"
                      className="btn btn-primary w-100"
                      onClick={login}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      Login&nbsp;
                      {loading && (
                        <div className="loader">
                          <ThreeDots height="30" width="30" color="#fff" />
                        </div>
                      )}
                    </button>
                  </form>
                </div>
              </div>
              <p className="text-center mt-3">
                Don't have an account? <Link to="/signup">Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
