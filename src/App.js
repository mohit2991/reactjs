import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    );
  }
}

export default App;
