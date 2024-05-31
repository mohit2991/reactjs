import React, { useContext } from "react";
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

const Navigations = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Router>
      <div style={{ background: theme === "light" ? "white" : "black" }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/stream" element={<Stream />} />
          <Route path="/github-users" element={<GithubUsers />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/add" element={<AddBlog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default Navigations;
