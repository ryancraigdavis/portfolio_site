import React from "react";

const About = () => {
  return (
    <>
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6 my-3">
          <div className="img-box dark-img-box">
            <img src="img/about/about-3.jpg" alt="smiling a girl" />
          </div>
        </div>

        <div className="col-lg-6 my-3">
          <div className="typo-box ">
            <h3>Plakson Reniya</h3>
            <h5>Freelance Designer</h5>
            <p className="lead">
              I design and develop services for customers of all sizes, modern
              websites, web services and online stores.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="btn-bar">
              <a className="px-btn px-btn-theme" href="#contact">
                Contact Us
              </a>
            </div>
          </div>
          {/* End .typo-box */}
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default About;
