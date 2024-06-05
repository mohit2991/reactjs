import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { getBlogsAPI } from "../../Api";

const Blogs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch Github Users
  async function fetchBlog() {
    try {
      const response = await axios.get(getBlogsAPI);
      const sortedData = response.data.sort((a, b) => b.id - a.id);
      setData(sortedData);
    } catch (error) {
      console.log(">>>> error while fetching data", error);
    } finally {
      // loading
      setLoading(false);
    }
  }

  useEffect(function () {
    // invode/call function
    fetchBlog();
  }, []); // Empty dependency array means this effect runs once on mount/load

  return (
    <div className="p-5">
      <div className="text-center">
        <h1>Blogs</h1>
        <button>
          <Link to="/blogs/add">Add New</Link>
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Date & Time</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <div className="text-center">loading...</div>
          ) : (
            data.map((obj, key) => {
              return (
                <tr scope="row">
                  <td>{obj.id}</td>
                  <td>{obj.title}</td>
                  <td>{obj.description}</td>
                  <td>{obj.date ? obj.date : "-"}</td>
                  <td>
                    <button>Edit</button>
                    <button className="ms-1">Delete</button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Blogs;
