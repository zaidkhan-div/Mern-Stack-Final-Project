import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="simple-navbar">
      <div className="navbar-logo">
        <Link to="/">MyWebsite</Link>
      </div>
      <div className="navbar-actions">
        <Link to="/create" className="navbar-btn">Create</Link>
        <Link to="/update" className="navbar-btn">Update</Link>
        <Link to="/remove" className="navbar-btn">Remove</Link>
        <Link to="/search" className="navbar-btn">Search</Link>
      </div>
    </nav>
  );
};

export default Header;

