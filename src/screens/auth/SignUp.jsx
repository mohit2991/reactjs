import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { showToast } from "../../utils/toast";
import useApi from "../../api/useApi";
import errorHandler from "../../utils/errorHandle";

const SignUp = () => {
  //   const [formData, setFormData] = useState({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     password: "",
  //   });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(null);
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "phone") {
      setPhone(value);
    } else if (name === "password") {
      setPassword(value);
    }
    // setFormData({
    //   ...formData,
    //   [name]: value,
    // });
  };

  useEffect(() => {
    if (name !== "" && email !== "" && phone !== null && password !== "") {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [name, email, phone, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      email,
      phone,
      password,
    };

    try {
      const response = await useApi.signup(payload);
      if (response) {
        showToast("Your account has been Register Successfully!", "success");
        clearForm();
      }
      // 200-299
    } catch (error) {
      // call error handler
      errorHandler(error);
    }
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setPhone(null);
    setPassword("");
  };

  return (
    <div className="page-signup page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card mt-5">
              <div className="card-body">
                <h3 className="card-title text-center mb-4">Sign Up</h3>
                <h4>{successMessage}</h4>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label for="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Enter your full name"
                      onChange={handleChange}
                      value={name}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter your email"
                      onChange={handleChange}
                    />
                    <span style={{ color: "red" }}>{emailError}</span>
                  </div>
                  <div className="mb-3">
                    <label for="phone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="phone"
                      className="form-control"
                      name="phone"
                      placeholder="Enter your phone"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Create a password"
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={isButtonDisabled}
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
            <p className="text-center mt-3">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
