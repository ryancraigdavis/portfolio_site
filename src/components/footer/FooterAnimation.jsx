import React from "react";
import {
  FaLinkedinIn,
} from "react-icons/fa";
import Fade from "react-reveal/Fade";

const SocialShare = [
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/ryan-davis-a305b242/" },
];

const Footer = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6 my-2">
          <Fade bottom>
            <div className="nav justify-content-center text-center text-md-left justify-content-md-start">
              {SocialShare.map((val, i) => (
                <a
                  key={i}
                  href={`${val.link}`}
                  rel="noreferrer"
                  target="_blank"
                >
                  {val.Social}
                </a>
              ))}
            </div>
            {/* End .nav */}
          </Fade>
        </div>
        {/* End .col */}

        <div className="col-md-6 my-2 text-center text-md-right">
          <Fade bottom>
            <p>
              © {new Date().getFullYear()} copyright{" "}
              all right reserved | All stock images are free from Pixabay
            </p>
          </Fade>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default Footer;
