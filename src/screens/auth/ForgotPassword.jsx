import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useApi from "../../api/useApi";
import { showToast } from "../../utils/toast";
import errorHandler from "../../utils/errorHandle";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isOtpSent, setIsOtpSent] = useState(false);

  const resetPassword = async () => {
    // call api
    try {
      const response = await useApi.forgotPassword({ email: email });
      if (response) {
        showToast("OPT sent to your email successfully!", "success");

        setIsOtpSent(true);
      }
    } catch (error) {
      // call error handler
      errorHandler(error);
    }
  };

  const updatePassword = async () => {
    // call api
    try {
      const response = await useApi.validateOtp({ email, otp, password });
      if (response) {
        showToast("Your password reset successfully!", "success");

        setIsOtpSent(false);
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
                      disabled={isOtpSent}
                    />
                  </div>
                  {isOtpSent && (
                    <>
                      <div className="mb-3">
                        <label htmlFor="OTP" className="form-label">
                          Enter OTP
                        </label>
                        <input
                          type="OTP"
                          className="form-control"
                          id="OTP"
                          placeholder="Enter your OTP"
                          onChange={(e) => setOtp(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Enter Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </>
                  )}
                  <button
                    onClick={isOtpSent ? updatePassword : resetPassword}
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
