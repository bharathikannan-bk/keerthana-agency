import LogoImg from "../../assets/img/new/image-removebg-preview (1).png";
import { Link, NavLink } from "react-router-dom";
import "./index.css";
import React, { useEffect, useRef } from "react";
function Navbar() {
  const toggleRef = useRef(null);
  useEffect(() => {

  const handleToggle = () => {
    document.body.classList.toggle("mobile-nav-active");

    toggleRef.current.classList.toggle("bi-list");
    toggleRef.current.classList.toggle("bi-x");
  };

  const handleCloseMenu = () => {
    document.body.classList.remove("mobile-nav-active");
    toggleRef.current.classList.add("bi-list");
    toggleRef.current.classList.remove("bi-x");
  };

  const toggleBtn = toggleRef.current;
  toggleBtn.addEventListener("click", handleToggle);

  const navLinks = document.querySelectorAll("#navmenu a");
  navLinks.forEach(link => {
    link.addEventListener("click", handleCloseMenu);
  });

  return () => {
    toggleBtn.removeEventListener("click", handleToggle);
    navLinks.forEach(link => {
      link.removeEventListener("click", handleCloseMenu);
    });
  };

}, []);
  return (
    <>
      <header
        id="header"
        className="header d-flex align-items-center sticky-top"
        style={{ boxShadow: "0px 0 18px rgba(0, 0, 0, 0.1)" }}
      >
        <div class="container-fluid container-xl position-relative d-flex align-items-center">
          <Link to={'/'} class="logo d-flex align-items-center me-auto">
            <img src={LogoImg} alt="logo-img" />
            {/* <h1 class="sitename">Keerthana Agency</h1> */}
            {/* <span>.</span> */}
          </Link>

          <nav id="navmenu" class="navmenu">
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-us"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/countries"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Countries
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/team"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Team
                </NavLink>
              </li>
              <li>
                <a href="blog.html">Process</a>
              </li>
              <li class="dropdown">
                <a href="#">
                  <span>Gallery</span>{" "}
                  <i class="bi bi-chevron-down toggle-dropdown"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Dropdown 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Deep Dropdown</span>{" "}
                      <i class="bi bi-chevron-down toggle-dropdown"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Dropdown 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Dropdown 2</a>
                  </li>
                  <li>
                    <a href="#">Dropdown 3</a>
                  </li>
                  <li>
                    <a href="#">Dropdown 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="mobile-nav-toggle1">
            <i
              ref={toggleRef}
              className="mobile-nav-toggle d-xl-none bi bi-list"
            ></i>
          </div>

          {/* <a class="btn-getstarted" href="index.html#about">
            Get Started
          </a> */}
        </div>
      </header>
    </>
  );
}

export default Navbar;
