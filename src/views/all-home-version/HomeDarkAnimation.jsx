import React from "react";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/SliderFourAnimation";
import About from "../../components/about/AboutDarkAnimation";
import Service from "../../components/service/ServiceAnimation";
import Skills from "../../components/skills/SkillsAnimation";
import Portfolio from "../../components/portfolio/PortfolioAnimation";
import Testimonial from "../../components/testimonial/TestimonialAnimation";
import Blog from "../../components/blog/BlogAnimation";
// import Contact from "../../components/contact/ContactAnimation";
import Footer from "../../components/footer/FooterAnimation";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import useDocumentTitle from "../../components/useDocumentTitle";

const HomeFour = () => {
  useDocumentTitle("Ryan Davis - Portfolio");
  return (
    <div className="home-dark">
      <Header />
      {/* End Header Section */}
      <Slider />
      {/* End Banner Section */}

      {/* About Me */}
      <section id="about" className="section about-section after-left-section">
        <div className="container">
          <About />
        </div>
      </section>
      {/* End About Me */}

      {/*  Skills */}
      <section className="section skill-section">
        <div className="container">
          <Skills />
        </div>
      </section>
      {/* End Skills */}

      <section id="work" className="section gray-bg">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <Fade bottom>
                <h3 className="font-alt">My Portfolio</h3>
                <p>
                    I work in a number of languages including Javascript, Python, and Rust.
                    My projects range from full stack web-applications to low-level emulators.
                </p>
              </Fade>
            </div>
          </div>
          {/* End .row */}
          <Portfolio />
        </div>
      </section>
      {/* End Portfolio */}

      {/* Contact */}
      <section id="contact" className="section after-left-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 my-3">
            </div>
            {/* End .col */}

            <div className="col-lg-4 ml-auto my-3">
              <div className="contact-info">
                <Fade bottom>
                  <div className="sm-title">
                    <h4 className="font-alt">Get in touch</h4>
                    <p>If you would like to get a hold of me, feel free to contact me.</p>
                  </div>
                </Fade>

                <Fade bottom>
                  <div className="media">
                    <div className="icon">
                      <i className="ti-map"></i>
                    </div>
                    <span className="media-body">
                        I'm based in:<br/>
                        Los Angeles, CA
                    </span>
                  </div>
                  {/* End media */}
                </Fade>
                <Fade bottom>
                  <div className="media">
                    <div className="icon">
                      <i className="ti-email"></i>
                    </div>
                    <span className="media-body">
                        Email me: <br/>
                        ryancraigdavis@gmail.com
                    </span>
                  </div>
                  {/* End media */}
                  {/* End media */}
                </Fade>
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
      {/* End Contact */}

      {/* Footer */}
      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
      {/*  End Footer */}
    </div>
  );
};

export default HomeFour;
