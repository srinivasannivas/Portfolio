import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Internship from "./pages/Internship";
import Contact from "./pages/Contact";
import Dashboard from "./components/Dashboard";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Dashboard />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
