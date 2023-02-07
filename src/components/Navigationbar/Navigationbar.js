import "./navigationbar.css";
import logo from "../../imgs/Logo.png";
import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Navigationbar = () => {
  const [activeNavbar, setActiveNavbar] = useState("");
  return (
    <header>
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="logo">
            <img src={logo} alt="" />
          </Link>

          <nav className={`nav-bar ${activeNavbar}`}>
            <ul className="list-unstyled ">
              <li>
                <NavLink className="text-decoration-none" to="/">
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink className="text-decoration-none" to="/about">
                  ABOUT US
                </NavLink>
              </li>
              <li>
                <NavLink className="text-decoration-none" to="/destination">
                  DESTINATION
                </NavLink>
              </li>
              <li>
                <NavLink className="text-decoration-none" to="/adventure">
                  ADVENTURE
                </NavLink>
              </li>
              <li>
                <NavLink className="text-decoration-none" to="/feedback">
                  FEEDBACK
                </NavLink>
              </li>
              <li>
                <NavLink className="text-decoration-none" to="/contact">
                  CONTACT US
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="right-side">
            <div className="sign-log">
              <Link className="sign text-white" to="/signUp">
                <FontAwesomeIcon className="i" icon={faUserPlus} />
              </Link>
              <Link className="log text-white" to="/login">
                <FontAwesomeIcon className="i" icon={faArrowRightToBracket} />
              </Link>
            </div>
            <div
              className="hamburger"
              onClick={() => {
                activeNavbar === ""
                  ? setActiveNavbar("active")
                  : setActiveNavbar("");
              }}
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigationbar;
