import React from "react";
import {Link} from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
      <div className="container-fluid row">
        <Link to="/" className="navbar-brand col-md-6 col-7"><img
            src="media/logo.svg"
            alt="zerodha"
            style={{width:"150px"}}
          ></img></Link>
        <div className="col-1 me-5">
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
        </div>
        <div className="collapse navbar-collapse col-md-4" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/pricing" >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
