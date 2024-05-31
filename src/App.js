import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navigations from "./components/Navigations";

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <Navigations />
      </ThemeProvider>
    );
  }
}

export default App;
