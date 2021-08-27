import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import Zoom from "react-reveal/Zoom";

const Portfolio = () => {
  return (
    <SimpleReactLightbox>
      <div className="positon-relative">
        <div className="portfolio-filter-01">
          <Tabs>
            <TabList className="filter d-flex justify-content-center">
              <Tab>All</Tab>
              <Tab>Rust/C</Tab>
              <Tab>Javascript</Tab>
              <Tab>Express/Mysql</Tab>
              <Tab>React/Express/MongoDB</Tab>
            </TabList>
            {/* End tablist */}

            <SRLWrapper>
              <TabPanel>
                <div className="portfolio-content row lightbox-gallery">
                  <div className="col-sm-6 col-lg-4 grid-item product">
                    <div className="portfolio-box-01">
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>Intel 8080 Emulator</h5>
                          <span>Intel 8080 emulator for Space Invaders written in Rust</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a href="https://github.com/ryancraigdavis/8080_emulator" className="gallery-link">
                          <Zoom>
                            <img
                              src="img/portfolio/intel8080.png"
                              alt="Intel"
                            />
                          </Zoom>
                          <div className="portfolio-icon">
                            <span className="ti-plus"></span>
                          </div>
                          {/* End .portfolio-icon */}
                        </a>
                        {/* End gallery link */}
                      </div>
                    </div>
                  </div>
                  {/* grid item  */}

                  <div className="col-sm-6 col-lg-4 grid-item product">
                    <div className="portfolio-box-01">
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>Buy My Contract</h5>
                          <span>Marketplace for university students to buy and sell housing contracts</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a href="https://buymycontract.herokuapp.com/" className="gallery-link">
                          <Zoom>
                            <img
                              src="img/portfolio/apartment.jpg"
                              alt="BMC"
                            />
                          </Zoom>
                          <div className="portfolio-icon">
                            <span className="ti-plus"></span>
                          </div>
                          {/* End .portfolio-icon */}
                        </a>
                        {/* End gallery link */}
                      </div>
                    </div>
                  </div>
                  {/* grid item  */}

                  <div className="col-sm-6 col-lg-4 grid-item product">
                    <div className="portfolio-box-01">
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>Farmers Market Map</h5>
                          <span>App that displays farmers markets around Los Angeles, CA</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a href="https://github.com/ryancraigdavis/farmers_market_map" className="gallery-link">
                          <Zoom>
                            <img
                              src="img/portfolio/farmers.jpg"
                              alt="Farmers Markets"
                            />
                          </Zoom>
                          <div className="portfolio-icon">
                            <span className="ti-plus"></span>
                          </div>
                          {/* End .portfolio-icon */}
                        </a>
                        {/* End gallery link */}
                      </div>
                    </div>
                  </div>
                  {/* grid item  */}

                  <div className="col-sm-6 col-lg-4 grid-item product">
                    <div className="portfolio-box-01">
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>Gameplay Workout App</h5>
                          <span>Workout app that allows users to create workouts and challenge other users for points</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a href="https://github.com/djmasoner/Hardly-Working-Out" className="gallery-link">
                          <Zoom>
                            <img
                              src="img/portfolio/fitness.jpg"
                              alt="Fitness"
                            />
                          </Zoom>
                          <div className="portfolio-icon">
                            <span className="ti-plus"></span>
                          </div>
                          {/* End .portfolio-icon */}
                        </a>
                        {/* End gallery link */}
                      </div>
                    </div>
                  </div>
                  {/* grid item  */}

                  <div className="col-sm-6 col-lg-4 grid-item product">
                    <div className="portfolio-box-01">
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>Covid Tracker</h5>
                          <span>Dashboard for tracking Covid cases, news, and data</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a href="https://github.com/ryancraigdavis/covid-tracker" className="gallery-link">
                          <Zoom>
                            <img
                              src="img/portfolio/covid.jpg"
                              alt="Covid"
                            />
                          </Zoom>
                          <div className="portfolio-icon">
                            <span className="ti-plus"></span>
                          </div>
                          {/* End .portfolio-icon */}
                        </a>
                        {/* End gallery link */}
                      </div>
                    </div>
                  </div>
                  {/* grid item  */}

                  <div className="col-sm-6 col-lg-4 grid-item product">
                    <div className="portfolio-box-01">
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>SmallSh</h5>
                          <span>Simple bash-like shell written in C</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a href="https://github.com/ryancraigdavis/SmallSh" className="gallery-link">
                          <Zoom>
                            <img
                              src="img/portfolio/bash.png"
                              alt="Bash"
                            />
                          </Zoom>
                          <div className="portfolio-icon">
                            <span className="ti-plus"></span>
                          </div>
                          {/* End .portfolio-icon */}
                        </a>
                        {/* End gallery link */}
                      </div>
                    </div>
                  </div>
                  {/* grid item  */}
                </div>
                {/* End list wrapper */}
              </TabPanel>
              {/* END ALL PORTFOLIO GALLERY */}

              <TabPanel>
                <div className="portfolio-content row lightbox-gallery">
                  <div className="col-sm-6 col-lg-4 grid-item product">
                    <div className="portfolio-box-01">
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>Intel 8080 Emulator</h5>
                          <span>Intel 8080 emulator for Space Invaders written in Rust</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a href="https://github.com/ryancraigdavis/8080_emulator" className="gallery-link">
                          <Zoom>
                            <img
                              src="img/portfolio/intel8080.png"
                              alt="Intel"
                            />
                          </Zoom>
                          <div className="portfolio-icon">
                            <span className="ti-plus"></span>
                          </div>
                          {/* End .portfolio-icon */}
                        </a>
                        {/* End gallery link */}
                      </div>
                    </div>
                  </div>
                  {/* grid item  */}


                  <div className="col-sm-6 col-lg-4 grid-item product">
                    <div className="portfolio-box-01">
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>SmallSh</h5>
                          <span>Simple bash-like shell written in C</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a href="https://github.com/ryancraigdavis/SmallSh" className="gallery-link">
                          <Zoom>
                            <img
                              src="img/portfolio/bash.png"
                              alt="Bash"
                            />
                          </Zoom>
                          <div className="portfolio-icon">
                            <span className="ti-plus"></span>
                          </div>
                          {/* End .portfolio-icon */}
                        </a>
                        {/* End gallery link */}
                      </div>
                    </div>
                  </div>
                  {/* grid item  */}
                </div>
                {/* End list wrapper */}
 
              </TabPanel>

              <TabPanel>
                <div className="portfolio-content row lightbox-gallery">
                  {/* grid item  */}

                  <div className="col-sm-6 col-lg-4 grid-item product">
                    <div className="portfolio-box-01">
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>Buy My Contract</h5>
                          <span>Marketplace for university students to buy and sell housing contracts</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a href="https://buymycontract.herokuapp.com/" className="gallery-link">
                          <Zoom>
                            <img
                              src="img/portfolio/apartment.jpg"
                              alt="BMC"
                            />
                          </Zoom>
                          <div className="portfolio-icon">
                            <span className="ti-plus"></span>
                          </div>
                          {/* End .portfolio-icon */}
                        </a>
                        {/* End gallery link */}
                      </div>
                    </div>
                  </div>
                  {/* grid item  */}

                  <div className="col-sm-6 col-lg-4 grid-item product">
                    <div className="portfolio-box-01">
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>Farmers Market Map</h5>
                          <span>App that displays farmers markets around Los Angeles, CA</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a href="https://github.com/ryancraigdavis/farmers_market_map" className="gallery-link">
                          <Zoom>
                            <img
                              src="img/portfolio/farmers.jpg"
                              alt="Farmers Markets"
                            />
                          </Zoom>
                          <div className="portfolio-icon">
                            <span className="ti-plus"></span>
                          </div>
                          {/* End .portfolio-icon */}
                        </a>
                        {/* End gallery link */}
                      </div>
                    </div>
                  </div>
                  {/* grid item  */}

                  <div className="col-sm-6 col-lg-4 grid-item product">
                    <div className="portfolio-box-01">
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>Gameplay Workout App</h5>
                          <span>Workout app that allows users to create workouts and challenge other users for points</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a href="https://github.com/djmasoner/Hardly-Working-Out" className="gallery-link">
                          <Zoom>
                            <img
                              src="img/portfolio/fitness.jpg"
                              alt="Fitness"
                            />
                          </Zoom>
                          <div className="portfolio-icon">
                            <span className="ti-plus"></span>
                          </div>
                          {/* End .portfolio-icon */}
                        </a>
                        {/* End gallery link */}
                      </div>
                    </div>
                  </div>
                  {/* grid item  */}

                  <div className="col-sm-6 col-lg-4 grid-item product">
                    <div className="portfolio-box-01">
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>Covid Tracker</h5>
                          <span>Dashboard for tracking Covid cases, news, and data</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a href="https://github.com/ryancraigdavis/covid-tracker" className="gallery-link">
                          <Zoom>
                            <img
                              src="img/portfolio/covid.jpg"
                              alt="Covid"
                            />
                          </Zoom>
                          <div className="portfolio-icon">
                            <span className="ti-plus"></span>
                          </div>
                          {/* End .portfolio-icon */}
                        </a>
                        {/* End gallery link */}
                      </div>
                    </div>
                  </div>
                  {/* grid item  */}

                  {/* grid item  */}
                </div>
                {/* End list wrapper */}
 
              </TabPanel>

              <TabPanel>
                <div className="portfolio-content row lightbox-gallery">
                  {/* grid item  */}

                  <div className="col-sm-6 col-lg-4 grid-item product">
                    <div className="portfolio-box-01">
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>Farmers Market Map</h5>
                          <span>App that displays farmers markets around Los Angeles, CA</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a href="https://github.com/ryancraigdavis/farmers_market_map" className="gallery-link">
                          <Zoom>
                            <img
                              src="img/portfolio/farmers.jpg"
                              alt="Farmers Markets"
                            />
                          </Zoom>
                          <div className="portfolio-icon">
                            <span className="ti-plus"></span>
                          </div>
                          {/* End .portfolio-icon */}
                        </a>
                        {/* End gallery link */}
                      </div>
                    </div>
                  </div>
                  {/* grid item  */}

                  <div className="col-sm-6 col-lg-4 grid-item product">
                    <div className="portfolio-box-01">
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>Gameplay Workout App</h5>
                          <span>Workout app that allows users to create workouts and challenge other users for points</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a href="https://github.com/djmasoner/Hardly-Working-Out" className="gallery-link">
                          <Zoom>
                            <img
                              src="img/portfolio/fitness.jpg"
                              alt="Fitness"
                            />
                          </Zoom>
                          <div className="portfolio-icon">
                            <span className="ti-plus"></span>
                          </div>
                          {/* End .portfolio-icon */}
                        </a>
                        {/* End gallery link */}
                      </div>
                    </div>
                  </div>
                  {/* grid item  */}

                </div>
                {/* End list wrapper */}
 
              </TabPanel>

              <TabPanel>
                <div className="portfolio-content row lightbox-gallery">
                  <div className="col-sm-6 col-lg-4 grid-item product">
                    <div className="portfolio-box-01">
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>Buy My Contract</h5>
                          <span>Marketplace for university students to buy and sell housing contracts</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a href="https://buymycontract.herokuapp.com/" className="gallery-link">
                          <Zoom>
                            <img
                              src="img/portfolio/apartment.jpg"
                              alt="BMC"
                            />
                          </Zoom>
                          <div className="portfolio-icon">
                            <span className="ti-plus"></span>
                          </div>
                          {/* End .portfolio-icon */}
                        </a>
                        {/* End gallery link */}
                      </div>
                    </div>
                  </div>
                  {/* grid item  */}
                </div>
                {/* End list wrapper */}
              </TabPanel>
            </SRLWrapper>
            {/* End tabpanel */}
          </Tabs>
        </div>
      </div>
    </SimpleReactLightbox>
  );
};

export default Portfolio;
