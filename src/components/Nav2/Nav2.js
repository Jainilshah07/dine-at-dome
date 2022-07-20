import React from "react";
import styles from "./Nav2.css";
import { Link } from "react-router-dom";

const Nav2 = () => {
  return (
    <>
      <nav className=" navbar navbar-expand-lg mt-2">
        <div className="container">
          <Link style={{color:"white" , fontSize:"1.5rem"}} className="navbar-brand" to="/">
            Dine at Dome
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="nav-content navbar-nav">
              <li className="nav-item navitem me-3">
                <Link 
                  className="nav-link navlink2" 
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item navitem me-3">
                <Link className="nav-link navlink2" to="/">
                  Destinations
                </Link>
              </li>
              <li className="nav-item navitem navitem me-3">
                <Link  className="nav-link navlink2" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item navitem navitem me-3">
                <Link  className="nav-link navlink2" to="/">
                  Media
                </Link>
              </li>
              <li className="nav-item navitem me-3">
                <Link  className="nav-link navlink2" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav2;
