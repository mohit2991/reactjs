import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { addPostAPI } from "../../Api";

const AddBlog = () => {
  //   const [formData, setFormData] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if (title !== "" && description !== "") {
      setIsButtonDisabled(false);
    }
  }, [title, description]);

  // handle or set state on change input value
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "title") {
      setTitle(value);
    } else if (name === "description") {
      setDescription(value);
    }
  };

  // add blog function
  const addBlog = async () => {
    try {
      // Payload or request params to add new blog
      const payload = {
        title,
        description,
      };

      // Api call to add new blog
      const response = await axios.post(addPostAPI, payload);

      console.log(">>> add blog response", response);
    } catch (error) {
      console.log("Error while adding blog", error);
    }
  };

  return (
    <>
      <div className="col-md-6">
        <Form className="p-5">
          <h1 className="text-center">Add Blog</h1>
          <input
            type="text"
            placeholder="Title"
            className="form-control mb-2"
            name="title"
            onChange={handleChange}
          />
          <textarea
            placeholder="Description"
            className="form-control mb-2"
            name="description"
            onChange={handleChange}
          ></textarea>
          <Button onClick={addBlog} disabled={isButtonDisabled}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AddBlog;
