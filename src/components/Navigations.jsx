import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import Header from "./Header";
import Footer from "./Footer";
import NotFound from "../screens/NotFound";
import Home from "../screens/Home";
import Movies from "../screens/Movies";
import Stream from "../screens/Stream";
import GithubUsers from "../screens/GithubUsers";
import Blogs from "../screens/blogs/Blogs";
import AddBlog from "../screens/blogs/AddBlog";
import Contact from "../screens/Contact";
import AddMovies from "../screens/backoffice/AddMovies";
import Callbackhook from "../screens/backoffice/Callbackhook";
import Memohook from "../screens/backoffice/Memohook.jsx";
import Login from "../screens/auth/Login.jsx";
import SignUp from "../screens/auth/SignUp.jsx";

const Navigations = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Router>
      <div style={{ background: theme === "light" ? "white" : "black" }}>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/stream" element={<Stream />} />
          <Route path="/github-users" element={<GithubUsers />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/add" element={<AddBlog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          {/* backoffice navigations */}
          <Route path="/backoffice/movies/add" element={<AddMovies />} />
          <Route path="/backoffice/callbackhook" element={<Callbackhook />} />
          <Route path="/backoffice/memohook" element={<Memohook />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default Navigations;
