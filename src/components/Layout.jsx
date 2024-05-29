import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NotFound from "../screens/NotFound";
import Home from "../screens/Home";
import Movies from "../screens/Movies";
import Stream from "../screens/Stream";
import GithubUsers from "../screens/GithubUsers";

const Layout = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Router>
      <div style={{ background: theme === "light" ? "white" : "black" }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/stream" element={<Stream />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/github-users" element={<GithubUsers />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default Layout;
