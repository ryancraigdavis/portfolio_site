import React from "react";
import PreviewDemoGallery from "../components/PreviewDemoGallery";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";
import useDocumentTitle from "../components/useDocumentTitle";

const FeaturesContent = [
  {
    img: "1",
    title: "React 17.0.2",
    descriptions: `We used latest react vertion ^17.0.2. Max Components are Reusable for you. It's a awesome design made by React.`,
  },
  {
    img: "2",
    title: "Bootstrap 5",
    descriptions: `Made this template Bootstrap 5 Grid System. So definitely 100% Responsive & fit any type of devices.`,
  },
  {
    img: "5",
    title: "Sass Available",
    descriptions: `It's tamplate has Sass available for css.All Modules are well oraganized. You can Change css by sass`,
  },
  {
    img: "4",
    title: "Well Documented",
    descriptions: `It's documented organized way Both Online and Offline. So anyone start from zero knowledge.`,
  },
  {
    img: "3",
    title: "Perfect Responsive",
    descriptions: `It's 100% Responsive for all devices such as mobile, tablet, desktop even larger screen device too.`,
  },
  {
    img: "6",
    title: "Fast Loading Speed",
    descriptions: `Since it's made with Latest React JS so u get faster loading speed.It's enhance your pages ultra super fast`,
  },
  {
    img: "7",
    title: "Modern Design",
    descriptions: `It's followed with modern, creative and trendy design for Creative people and Organization.`,
  },
  {
    img: "8",
    title: "24/7 Support",
    descriptions: `We are provide 24/7  support for all clients.You can purchase without any type of hesitation.`,
  },
];

const Preview = () => {
  useDocumentTitle("Krozo - Preview || React Personal Portfolio Template");
  return (
    <>
      <section
        className="section preview-section overlay"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "img/preview/hero.jpg"
          })`,
        }}
      >
        <div className="container">
          <div className="preview-header left">
            <Fade bottom>
              <img
                className="navbar-brand d-block"
                src="img/logo/theme-logo.svg"
                alt="brand logo"
              />

              <h3 className="title">Ryan Davis - Software Engineer</h3>

              <p className="lead">
                Ryan Davis
              </p>

              <div className="btn-bar">
                <a className="px-btn px-btn-theme mx-2" href="#demo">
                  See All Demos
                </a>
                <a
                  className="px-btn px-btn-theme px-btn-white mx-2"
                  href="#features"
                >
                  All Features
                </a>
              </div>
              {/* End btn-bar */}
            </Fade>
          </div>
        </div>
        {/* End .container */}
        <Fade right>
          <span className="preview-sticker price-sticker">
            intro
            <span className="price">$5</span>
          </span>
        </Fade>

        <span className=" preview-sticker pos-sticker react-sticker">
          <img src="img/preview/react.svg" alt="react krozo" />
        </span>
      </section>
      {/* End Preview section */}

      <section className="section demo-section" id="demo">
        <div className="container">
          <div className=" title-wrapper text-center">
            <span className="tag gray-bg">Demos</span>
            <h2 className="title color-dark">All Awesome Demos</h2>
          </div>
          {/* End tile */}
          <div className="preview-inner">
            <PreviewDemoGallery />
          </div>
        </div>
      </section>
      {/* End Preview section */}

      <section className="section feature-section  home-dark" id="features">
        <div className="container-fluid">
          <div className="title-wrapper text-center">
            <span className="tag">Features</span>
            <h2 className=" title">
              <span className="theme-color">Ryan Davis</span> All Features
            </h2>
          </div>

          <div className="row">
            {FeaturesContent.map((val, i) => (
              <div className="col-xl-3 col-lg-4 col-md-6 my-3" key={i}>
                <div className="feature-box-01">
                  <div>
                    <div className="icon">
                      <img
                        src={`img/preview/features/${val.img}.svg`}
                        alt="features"
                      ></img>
                    </div>
                    <div className="feature-content">
                      <h5>{val.title}</h5>
                      <p>{val.descriptions}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End feature section */}

      <section className="section gray-bg purchase-section">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-12">
              <div className="purchase-block-inner">
                <Fade bottom>
                  <span className="dark-color">
                    You are at the right step now
                  </span>

                  <h3 className="m-15px-b">
                    Purchase The Krozo and Make Your Own{" "}
                    <span className="theme-color">React JS</span> &{" "}
                    <span className="theme-color">Bootstrap5 </span> Based
                    Portfolio Template.
                  </h3>

                  <a
                    href="https://themeforest.net/item/krozo-react-personal-portfolio-template/33293104"
                    className="px-btn px-btn-theme"
                    target="_blank"
                  >
                    <span>Purchase Now</span>
                  </a>
                </Fade>
              </div>
              {/* End .purchase-block-inner */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Preview;
