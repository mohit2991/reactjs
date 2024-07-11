import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navigations from "./components/Navigations";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <ToastContainer />
        <Navigations />
      </ThemeProvider>
    );
  }
}

export default App;
