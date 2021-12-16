import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="#" className="navbar-brand">
          Booklist
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" activestyle="current" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/my-list" activestyle="current">
                My List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/suggestions" activestyle="current">
                Suggestions
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
