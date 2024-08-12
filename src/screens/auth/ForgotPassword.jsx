import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useApi from "../../api/useApi";
import { showToast } from "../../utils/toast";
import errorHandler from "../../utils/errorHandle";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const resetPassword = async () => {
    // call api

    try {
      const response = await useApi.forgotPassword({ email: email });
      if (response) {
        showToast("OPT sent to your email successfully!", "success");
      }
    } catch (error) {
      // call error handler
      errorHandler(error);
    }
  };

  useEffect(() => {
    if (email.length > 0) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [email]);

  return (
    <div className="page-forgot-password page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card mt-5">
              <div className="card-body">
                <h3 className="card-title text-center mb-4">Forgot Password</h3>
                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <button
                    onClick={resetPassword}
                    type="button"
                    className="btn btn-primary w-100"
                    disabled={isButtonDisabled}
                  >
                    Send Reset Link
                  </button>
                </form>
              </div>
            </div>
            <p className="text-center mt-3">
              <Link to="/login">Back to Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
