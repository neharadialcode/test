import React, { useState } from "react";
import logo from "../assets/img/header_logo.png";
import { Icon1, Icon2, Icon3, Icon4 } from "./Icons";

const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <nav className="header">
        <div className="container new_container  py-3 d-lg-flex d-none justify-content-between align-items-center ">
          <div className="d-flex align-items-center ">
            <a href="/">
              <img className="logo" src={logo} alt="logo" />
            </a>
            <a className="nav_link mx-5 px-2" href="financial-service">
              <span className="pe-2  d-inline-block">
                <Icon1 />
              </span>
              Financial Services
            </a>
            <a className="nav_link" href="real-estate">
              <span className="pe-2 d-inline-block">
                <Icon2 />
              </span>
              Real Estate
            </a>
          </div>
          <div>
            <a className="sign_up text-decoration-none" href="">
              Sign up
            </a>
            <button className="log_in_button ms-5">
              Log in
              <span className="ps-3">
                <Icon3 />
              </span>
            </button>
          </div>
        </div>
        <div className="position-relative d-lg-none">
          <div className="d-flex justify-content-between py-3 px-3 ">
            <div>
              <a href="/">
                <img className="logo" src={logo} alt="logo" />
              </a>
            </div>
            <div onClick={() => setActive(!active)}>
              <Icon4 />
            </div>
          </div>{" "}
          {active && (
            <div className="overlay_navbar ps-3 pb-3 ">
              <div className="py-2">
                <a
                  className="nav_link"
                  href="financial-service"
                  onClick={() => setActive(false)}
                >
                  <span className="pe-2  d-inline-block">
                    <Icon1 />
                  </span>
                  Financial Services
                </a>
              </div>
              <div className="py-2">
                <a
                  onClick={() => setActive(false)}
                  className="nav_link"
                  href="real-estate"
                >
                  <span className="pe-2 d-inline-block">
                    <Icon2 />
                  </span>
                  Real Estate
                </a>
              </div>
              <div className="py-2">
                <a
                  onClick={() => setActive(false)}
                  className="sign_up text-decoration-none"
                  href=""
                >
                  Sign up
                </a>
              </div>
              <div className="py-2">
                <button
                  className="log_in_button "
                  onClick={() => setActive(false)}
                >
                  Log in
                  <span className="ps-3">
                    <Icon3 />
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
