import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="page-login page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="card mt-5">
                <div className="card-body">
                  <h3 className="card-title text-center mb-4">Login</h3>
                  <form>
                    <div className="mb-3">
                      <label for="email" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                      />
                    </div>
                    <div className="mb-3 text-end">
                      <Link to="/forgot-password">Forgot Password</Link>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Login
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
