import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <nav className="dashboard">
      <Link to="/" className="dashboard-logo">Srinivasan C</Link>
      <ul>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/internship">Internship</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Dashboard;
