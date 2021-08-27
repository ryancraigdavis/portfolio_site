import React from "react";
import Fade from "react-reveal/Fade";

const ServiceContent = [
  {
    no: "01",
    service: "RESPONSIVE LAYOUT",
    title: "Creating gorgeous graphic design meeting clients needs.",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    no: "02",
    service: "THEME CUSTOMIZER",
    title: "Creating gorgeous graphic design meeting clients needs.",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    no: "03",
    service: "MOBILE COMPATIBILITY",
    title: "Creating gorgeous graphic design meeting clients needs.",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    no: "04",
    service: "AWESOME SUPPORT",
    title: "Creating gorgeous graphic design meeting clients needs.",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    no: "05",
    service: "INFINITE GALLERY",
    title: "Creating gorgeous graphic design meeting clients needs.",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    no: "06",
    service: "EASY TO USE",
    title: "Creating gorgeous graphic design meeting clients needs.",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

const ServiceTwo = () => {
  return (
    <>
      <div className="row gy-4">
        {ServiceContent.map((val, i) => (
          <div className="col-sm-6 col-lg-4">
            <div className="feature-box-02">
              <Fade bottom>
                <h6>
                  <span>{val.no}.</span> {val.service}
                </h6>
                <h5>{val.title}</h5>
                <p>{val.desc}</p>
              </Fade>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServiceTwo;
