import React from "react";
import TextLoop from "react-text-loop";
import Social from "../Social";
import { videoTagString, VideoTag } from "react-video-tag";
videoTagString({
  src: "https://www.ibthemespro.com/resource/krozo/resources/video-2.mp4",
  poster: "img/bg-2.jpg",
});

const Slider = () => {
  return (
    <>
      <section
        id="home"
        className="home-banner overlay overlay-75 video-banner"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "img/banner/bg-2.jpg"
          })`,
        }}
      >
        <div className="container">
          <div className="row align-items-center full-screen">
            <div className="col-lg-12">
              <div className="hb-typo text-center">
                <h1 className="font-alt">Fazraz Nelson</h1>
                <h2>
                  <TextLoop>
                    <span className="loop-text">Web Developer</span>
                    <span className="loop-text"> UI/UX Designer</span>
                    <span className="loop-text"> App Developer</span>
                  </TextLoop>{" "}
                </h2>
                <div className="btn-bar">
                  <a
                    className="px-btn px-btn-theme
                  btn-md"
                    href="#work"
                  >
                    See Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End .container */}

        <div className="video-background">
          <VideoTag
            autoPlay={`${true}`}
            muted={`${true}`}
            playsInline={`${true}`}
            loop={`${true}`}
            src={`${"https://www.ibthemespro.com/resource/krozo/resources/video-2.mp4"}`}
            poster={`${"img/bg-2.jpg"}`}
          />
        </div>

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
