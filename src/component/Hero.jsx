import React from "react";
import herImg from "../assets/img/hero_img.png";
import { Icon5, Icon6, Icon7, Icon8 } from "./Icons";

const Hero = () => {
  return (
    <div className="py-xl-3">
      <div className="container new_container py-5">
        <div className="row">
          <div className="col-lg-6 pe-lg-4 d-flex justify-content-center flex-column">
            <img className="w-100" src={herImg} alt="img" />
            <div className="row mx-0 pe-xl-5 pt-sm-5 pt-4 justify-content-center">
              <div className="col-sm-4 col-6 pt-sm-5 pt-4 text-center">
                <span>
                  <Icon6 />
                </span>
                <p className="para pt-3">Data point used for analytics</p>
              </div>
              <div className="col-sm-4 col-6 pt-sm-5 pt-4 text-center">
                <span>
                  <Icon7 />
                </span>
                <p className="para pt-3">
                  Investable assets predicted per year
                </p>
              </div>
              <div className="col-sm-4 col-6 pt-sm-5 pt-4 text-center">
                <span>
                  <Icon8 />
                </span>
                <p className="para pt-3">
                  Predicted home value transacted per year{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 ps-lg-3 ">
            <h1 className="heading text-center text-sm-start">
              Grow your business with Event-Driven Predictive Analytics
            </h1>
            <p className="para pt-2 text-center text-sm-start">
              It is a long established fact that a reader will be distracted by
              the using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it the look at you.
            </p>
            <div className="d-sm-flex pt-4 pt-lg-5">
              <div className="card_1 w-100 me-sm-1 cursor_pointer">
                <p className="para text_white mb-0">boost your</p>
                <h2 className="sub_heading pt-1">Financial Services</h2>
                <div className="d-flex justify-content-between">
                  <a className="text_white text-decoration-none" href="">
                    Learn more
                  </a>
                  <span>
                    <Icon5 />
                  </span>
                </div>
              </div>
              <div className="card_1 cursor_pointer bg_dark_blue ms-sm-1 mt-4 mt-sm-0 w-100">
                <p className="para text_white mb-0">boost your</p>
                <h2 className="sub_heading pt-1">Real Estate</h2>
                <div className="d-flex justify-content-between">
                  <a className="text_white text-decoration-none" href="">
                    Learn more
                  </a>
                  <span>
                    <Icon5 />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
