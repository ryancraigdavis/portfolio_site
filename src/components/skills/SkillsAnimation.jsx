import React from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const Skills = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-4 my-3">
          <div className="sm-title">
            <h4 className="font-alt">Education</h4>
          </div>

          <ul className="aducation-box theme-bg">
            <Fade bottom>
              <li>
                <span className="dark-bg">Sep 2019 - Aug 2021</span>
                <h6>Bachelor's of Science - Computer Science - 4.00/4.00</h6>
                <p>Oregon State University</p>
              </li>
            </Fade>
            <Fade bottom>
              <li>
                <span className="dark-bg">Sep 2008 - Jun 2014</span>
                <h6>Bachelor's of Science - Accounting - 3.95/4.00</h6>
                <p>Brigham Young University</p>
              </li>
            </Fade>
          </ul>

          {/* End  .aducation-box */}
        </div>
        {/* End .col */}

        <div className="col-lg-4 my-3">
          <div className="sm-title">
            <h4 className="font-alt">Experience</h4>
          </div>
          <ul className="aducation-box dark-bg">
            <Fade bottom>
              <li>
                <span className="theme-bg">Jan 2021 - Present</span>
                <h6>Software Engineer</h6>
                <p>Deloitte Consulting</p>
              </li>
            </Fade>
            <Fade bottom>
              <li>
                <span className="theme-bg">Jan 2021 - Present</span>
                <h6>Adjunct Professor - Software Entrepreneurship</h6>
                <p>Idaho State University</p>
              </li>
            </Fade>
            <Fade bottom>
              <li>
                <span className="theme-bg">Jan 2017 - Jan 2021</span>
                <h6>Product Strategist</h6>
                <p>Deloitte Consulting</p>
              </li>
            </Fade>
          </ul>
          {/* End  .aducation-box */}
        </div>
        {/* End .col */}

        <div className="col-lg-4 ml-auto my-3">
          <div className="sm-title">
            <h4 className="font-alt">My Languages</h4>
          </div>
          <div className="gray-bg skill-box">
            <div className="skill-lt">
              <Fade>
                <h6>Python</h6>
              </Fade>
            </div>
            {/* End skill-lt */}
            <div className="skill-lt">
              <Fade>
                <h6>Rust (Learning)</h6>
              </Fade>
            </div>
            <div className="skill-lt">
              <Fade>
                <h6>React (Learning)</h6>
              </Fade>
            </div>
            <div className="skill-lt">
              <Fade>
                <h6>NodeJs/Express</h6>
              </Fade>
            </div>
            <div className="skill-lt">
              <Fade>
                <h6>MySQL</h6>
              </Fade>
            </div>
            <div className="skill-lt">
              <Fade>
                <h6>CUDA/OpenCL</h6>
              </Fade>
            </div>
            <div className="skill-lt">
              <Fade>
                <h6>Docker/Kubernetes/Helm</h6>
              </Fade>
            </div>
            {/* End skill-lt */}
          </div>
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default Skills;
