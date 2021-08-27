import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 235) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      {/* Header */}
      <header className={navbar ? "main-header fixed-header" : "main-header"}>
        <nav className="container">
          <div className=" header-transparent header-mulitpage">
            {/* Brand */}
            <NavLink to="/">
              <h2 className="navbar-brand">Ryan Davis</h2>
            </NavLink>
            {/* / */}
            {/* Mobile Toggle */}
            <button
              className="navbar-toggler"
              type="button"
              onClick={handleClick}
            >
              <div className={click ? "hamburger active" : "hamburger"}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            {/* / */}
            {/* Top Menu */}
            <div
              className={
                click
                  ? "mobile-menu navbar-collapse justify-content-end active"
                  : "mobile-menu navbar-collapse justify-content-end"
              }
            >
              <div className="anchor_nav navbar-nav ml-auto">
                <li>
                  <NavLink className="nav-link" to="/">
                    {" "}
                    <span>Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/about-us">
                    {" "}
                    <span>About Us</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/services">
                    <span>Services</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/portfolio">
                    <span>Portfolio</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/blog">
                    {" "}
                    <span>Blog</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/contact-us">
                    {" "}
                    <span>Contact</span>
                  </NavLink>
                </li>
              </div>
            </div>
            {/* / */}
          </div>
          {/* Container */}
        </nav>
        {/* Navbar */}
      </header>
      {/* End Header */}
    </>
  );
};

export default Header;
