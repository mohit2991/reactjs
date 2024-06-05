import axios from "axios";
import React, { useRef } from "react";
import { addMovieAPI } from "../../Api";

const AddMovies = () => {
  const titleRef = useRef("");
  const languageRef = useRef("");
  const imgRef = useRef("");

  const addMovie = async () => {
    const payload = {
      img: imgRef.current.value,
      title: titleRef.current.value,
      language: languageRef.current.value,
    };

    // API call to add movie deatils
    const respose = await axios.post(addMovieAPI, payload);

    if (respose) {
      alert("Movie added successfully!");
    }
  };

  return (
    <div className="p-5">
      <form>
        <h1>Add New Movie</h1>
        <input
          type="text"
          name="img"
          placeholder="Image Path"
          className="form-control"
          ref={imgRef}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="form-control mt-2"
          ref={titleRef}
        />
        <select name="language" className="form-control mt-2" ref={languageRef}>
          <option value="">Select Language</option>
          <option value="English">English</option>
          <option value="Tamil">Tamil</option>
          <option value="Hindi">Hindi</option>
        </select>
        <button type="button" className="mt-2" onClick={addMovie}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddMovies;
