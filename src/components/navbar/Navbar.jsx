import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light" id="navbar">
      <div className="container-fluid">
        <NavHashLink className="navbar-brand" smooth to="/" id="nabvarLinksId">
          <span className="portfolioIcon">
            <img src="Images/port.png" alt="" />
          </span>{' '}
          My Portfolio
        </NavHashLink>
        <button
          id="navbarToggler"
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavHashLink
                className="nav-link active"
                aria-current="page"
                to="#home"
                smooth
                id="nabvarLinksId"
              >
                Home
              </NavHashLink>
            </li>
            <li className="nav-item">
              <NavHashLink
                className="nav-link"
                smooth
                to="#about"
                id="nabvarLinksId"
              >
                About
              </NavHashLink>
            </li>
            <li className="nav-item">
              <NavHashLink
                className="nav-link"
                smooth
                to="#testimonial"
                tabIndex="-1"
                aria-disabled="true"
                id="nabvarLinksId"
              >
                Testimonial
              </NavHashLink>
            </li>

            <li className="nav-item">
              <NavHashLink
                className="nav-link"
                smooth
                to="#skills"
                id="nabvarLinksId"
              >
                Skills
              </NavHashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
