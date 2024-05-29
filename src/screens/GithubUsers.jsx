import React, { useEffect, useState } from "react";
import axios from "axios";
import { userListAPI, userListWithPaginationAPI } from "../Api";
import { Alert } from "../utils/constant";

const GithubUsers = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch Github Users
  async function fetchGithubUsers() {
    try {
      // const response = await fetch(userListWithPaginationAPI);
      // if (!response.ok) {
      //   throw new Error("Network failed");
      // }
      // const result = await response.json(); // Convert in json
      // // set users data
      // setData(result);

      Alert("Mohit");

      const response = await axios.get(userListAPI);
      setData(response.data);
    } catch (error) {
      console.log(">>>> error while fetching data", error);
    } finally {
      // loading
      setLoading(false);
    }
  }

  useEffect(function () {
    // invode/call function
    fetchGithubUsers();
  }, []); // Empty dependency array means this effect runs once on mount/load

  return (
    <div className="p-5">
      <div className="text-center">
        <h1>GitHub Users List</h1>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Login ID</th>
            <th scope="col">Image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <div className="text-center">loading...</div>
          ) : (
            data.map((obj, key) => {
              return (
                <tr scope="row" key={key}>
                  <td>{obj.id}</td>
                  <td>{obj.login}</td>
                  <td>
                    <img src={obj.avatar_url} alt="User Image" width={50} />
                  </td>
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

export default GithubUsers;
