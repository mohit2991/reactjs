import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Counter from "./components/Counter";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Form from "./components/Form";
import ClassVsFunction from "./components/ClassVsFunction";
import Todo from "./components/Todo";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/form" element={<Form />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/class-function" element={<ClassVsFunction />} />
            <Route path="/Todo" element={<Todo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
