import React, { useEffect, useState } from "react";
import axios from "axios";
import { showToast } from "../utils/toast";
import useApi from "../api/useApi";
import errorHandler from "../utils/errorHandle";

const Profile = () => {
  const [profileData, setProfileData] = useState();
  const [changePasswordData, setChangePasswordData] = useState({
    currentPassword: "",
    newPassword: "",
  });
  const [file, setFile] = useState(null);

  const getProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:8000/api/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response) {
        setProfileData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChangePasswordData({
      ...changePasswordData,
      [name]: value,
    });
  };

  const handleChangePasswordSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:8000/api/change_password",
        changePasswordData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response) {
        showToast("Password Changed Successfully!", "success");
      }
    } catch (error) {
      showToast(error.response.data.message, "error");
      console.log(error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFile({
        name: profileData?.name,
        profile: {
          data: reader.result.split(",")[1], // Base64 data
          filename: file.name,
        },
      });
    };

    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (file !== null) {
      handleFileUpload();
    }
  }, [file]);

  const handleFileUpload = async () => {
    try {
      const payload = file;
      const response = await useApi.updateUserProfile(payload);
      if (response) {
        getProfile();
        showToast("Profile image uploaded successfully", "success");
      }
    } catch (error) {
      // call error handler
      errorHandler(error);
    }
  };

  return (
    <div className="page-profile page">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body text-center">
                <img
                  style={{ height: "75px" }}
                  src={
                    profileData?.profile
                      ? profileData?.profile
                      : "/images/user-profile.png"
                  }
                  className="rounded-circle mb-3 w-25"
                  alt="Profile Picture"
                />
                <input type="file" onChange={handleFileChange} />
                <br />
                <h4>{profileData?.name}</h4>
                <p className="text-muted">{profileData?.email}</p>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <h5>Change Password</h5>
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="currentPassword" className="form-label">
                      Current Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="currentPassword"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="newPassword" className="form-label">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="newPassword"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {/* <div className="mb-3">
                                        <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                                        <input type="password" className="form-control" name="confirmPassword" required />
                                    </div> */}
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleChangePasswordSubmit}
                  >
                    Change Password
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
