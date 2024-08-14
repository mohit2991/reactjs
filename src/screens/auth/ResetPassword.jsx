import React from "react";

const ResetPassword = () => {
  return (
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
          disabled={isOtpSent}
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
          disabled={isOtpSent}
        />
      </div>
    </>
  );
};

export default ResetPassword;
