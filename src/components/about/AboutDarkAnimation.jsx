import React from "react";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <>
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6 my-3">
          <Fade left>
            <div className="img-box dark-img-box">
              <img src="img/about/Ryan-21.jpg" alt="Ryan" />
            </div>
          </Fade>
        </div>

        <div className="col-lg-6 my-3">
          <div className="typo-box">
            <Fade bottom>
              <h3>Ryan Davis</h3>
              <h5>Software Engineer</h5>
              <p className="lead">
                After 6 years in finance, I made the switch to engineering. I am currently a
                software engineer working for Deloitte Consulting's Innovation Lab. I work
                primarily in Python on the backend but I enjoy web development and am currently learning Rust and React.
              </p>
              <p>
                I am equally passionate about entrepreneurship. I teach a software entreprensuership course 
                for Idaho State University's computer science department as an adjunct professor, 
                helping students to learn customer driven, agile development.
              </p>
              <p>
                In my spare time I like to tinker with computers and artificial intelligence. I love fitness, 
                being active is a passion of mine whether it's in my home gym or on my bike. I am an amateur sushi chef 
                currently learning all I can about Japanese cuisine!
              </p>
            </Fade>
          </div>
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default About;
