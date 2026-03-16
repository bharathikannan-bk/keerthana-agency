import React from "react";
import LogoImg from "../../assets/img/new/image-removebg-preview (1).png";
import { NavLink } from "react-router-dom";
import './index'

function Navbar() {
  return (
    <>
      <header
        id="header"
        className="header d-flex align-items-center sticky-top"
        style={{ boxShadow: "0px 0 18px rgba(0, 0, 0, 0.1)" }}
      >
        <div class="container-fluid container-xl position-relative d-flex align-items-center">
          <a href="index.html" class="logo d-flex align-items-center me-auto">
            <img src={LogoImg} alt="logo-img" />
            {/* <h1 class="sitename">Keerthana Agency</h1> */}
            {/* <span>.</span> */}
          </a>

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
                   <NavLink to="/about-us" className={({isActive}) => isActive ? "active" : ""}>
                About Us
              </NavLink>
              </li>
              <li>
                  <NavLink to="/services" className={({isActive}) => isActive ? "active" : ""}>
                Services
              </NavLink>
              </li>
              <li>
                <NavLink to="/countries" className={({isActive}) => isActive ? "active" : ""}>
                Countries
              </NavLink>
              </li>
              <li>
               <NavLink to="/team" className={({isActive}) => isActive ? "active" : ""}>
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
                  <li class="dropdown">
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
                   <NavLink to="/contact" className={({isActive}) => isActive ? "active" : ""}>
                Contact Us
              </NavLink>
              </li>
            </ul>
            <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          {/* <a class="btn-getstarted" href="index.html#about">
            Get Started
          </a> */}
        </div>
      </header>
    </>
  );
}

export default Navbar;
