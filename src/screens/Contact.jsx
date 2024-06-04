import axios from "axios";
import React, { useRef } from "react";
import { getContactAPI } from "../Api";

const Contact = () => {
  // create refs for the elements
  const fromRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Access the current values of input element
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    if (name === null || name === "") {
      nameRef?.current?.focus();
    } else if (email === null || email === "") {
      emailRef?.current?.focus();
    } else if (message === null || message === "") {
      messageRef?.current?.focus();
    }

    const payload = {
      name,
      email,
      message,
    };

    const respose = await axios.post(getContactAPI, payload);

    // clear the form
    clearForm();
  };

  const clearForm = () => {
    // nameRef.current.value = "";
    // emailRef.current.value = "";
    // messageRef.current.value = "";

    fromRef.current.reset();
    // focus
    nameRef?.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit} ref={fromRef} className="mt-1 p-5">
      <div className="mb-3">
        <div>
          <label for="name" className="form-label">
            Name
          </label>
          <input
            ref={nameRef}
            type="text"
            name="name"
            className="form-control"
          />
        </div>
        <div>
          <label for="email" className="form-label">
            Email
          </label>
          <input
            ref={emailRef}
            type="email"
            name="email"
            className="form-control"
          />
        </div>
        <div>
          <label for="message" className="form-label">
            Message
          </label>
          <textarea
            ref={messageRef}
            name="message"
            className="form-control"
          ></textarea>
        </div>
        <button type="submit" className="mt-2">
          Submit
        </button>
        <button onClick={clearForm} type="button" className="mt-2">
          Clear
        </button>
      </div>
    </form>
  );
};

export default Contact;
