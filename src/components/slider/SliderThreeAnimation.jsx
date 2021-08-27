import React from "react";
import TextLoop from "react-text-loop";
import Social from "../Social";
import Fade from "react-reveal/Fade";

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section
        id="home"
        className="home-banner overlay video-banner slider-three-animation"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "img/banner/bg-4.jpg"
          })`,
        }}
      >
        <div className="container">
          <div className="row align-items-center full-screen">
            <div className="col-lg-12">
              <div className="hb-typo text-left">
                <Fade bottom>
                  <h6>Hi There, I'm</h6>
                  <h1 className="font-alt">Jannatul Ekra</h1>
                  <h2>
                    <TextLoop>
                      <span className="loop-text">Web Developer</span>
                      <span className="loop-text"> UI/UX Designer</span>
                      <span className="loop-text"> App Developer</span>
                    </TextLoop>{" "}
                  </h2>
                  <div className="btn-bar">
                    <a className="px-btn px-btn-theme btn-md" href="#work">
                      My Portfolio
                    </a>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
        {/* End .container */}

        <div className="scroll-bottom go-to">
          <a href="#about">Scroll</a>
        </div>

        {/* End bottom scroll */}

        <Social />
        {/* End social slide  */}
      </section>
      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
