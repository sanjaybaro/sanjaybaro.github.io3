import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      id="nav-menu"
      style={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}
    >
      <Link to="/" className="nav-link home">
        Home
      </Link>

      <Link to="/about" className="nav-link about">
        About
      </Link>

      <Link to="/skill" className="nav-link skills">
        Skill
      </Link>

      <Link to="/project" className="nav-link projects">
        Project
      </Link>

      <Link to="/contact" className="nav-link contact">
        Contact
      </Link>

      <Link to="/resume" className="nav-link resume">
        Resume
      </Link>
    </div>
  );
};

export default Navbar;
