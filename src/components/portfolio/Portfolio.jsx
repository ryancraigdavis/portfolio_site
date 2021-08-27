import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const Portfolio = () => {
  return (
    <SimpleReactLightbox>
      <div className="positon-relative">
        <div className="portfolio-filter-01">
          <Tabs>
            <TabList className="filter d-flex justify-content-center">
              <Tab>All</Tab>
              <Tab>Branding</Tab>
              <Tab>Photography</Tab>
              <Tab>Fashion</Tab>
              <Tab>Product</Tab>
            </TabList>
            {/* End tablist */}

            <SRLWrapper>
              <TabPanel>
                <div className="portfolio-content row lightbox-gallery">
                  <div className="col-sm-6 col-lg-4 grid-item product">
                    <div className="portfolio-box-01">
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>Motion Graphy</h5>
                          <span>Android App</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a href="img/portfolio/1.jpg" className="gallery-link">
                          <img src="img/portfolio/1.jpg" alt="Motion Graphy" />
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
                          <h5>E-Learning App</h5>
                          <span>Nuna ios App</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a href="img/portfolio/3.jpg" className="gallery-link">
                          <img src="img/portfolio/3.jpg" alt="E-Learning App" />
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
                          <h5>Visual Design</h5>
                          <span>Themeforest Market</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a href="img/portfolio/2.jpg" className="gallery-link">
                          <img src="img/portfolio/2.jpg" alt="Visual Design" />
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
                          <h5>Business Card</h5>
                          <span>Graphicriver Market</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a href="img/portfolio/4.jpg" className="gallery-link">
                          <img src="img/portfolio/4.jpg" alt="Business Card" />
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
                          <h5>Chatting Application</h5>
                          <span>Codecanyon Market</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a href="img/portfolio/7.jpg" className="gallery-link">
                          <img
                            src="img/portfolio/7.jpg"
                            alt="Chatting Application"
                          />
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
                          <h5>Web Application</h5>
                          <span>Behance Shot</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a href="img/portfolio/6.jpg" className="gallery-link">
                          <img
                            src="img/portfolio/6.jpg"
                            alt="Web Application"
                          />
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
                          <h5>Motion Graphy</h5>
                          <span>Android App</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a href="img/portfolio/1.jpg" className="gallery-link">
                          <img src="img/portfolio/1.jpg" alt="Motion Graphy" />
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
                          <h5>Visual Design</h5>
                          <span>Themeforest Market</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a href="img/portfolio/3.jpg" className="gallery-link">
                          <img src="img/portfolio/3.jpg" alt="Visual Design" />
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
                          <h5>Chatting Application</h5>
                          <span>Codecanyon Market</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a href="img/portfolio/5.jpg" className="gallery-link">
                          <img
                            src="img/portfolio/5.jpg"
                            alt="Chatting Application"
                          />
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
                          <h5>E-Learning App</h5>
                          <span>Nuna ios App</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a href="img/portfolio/2.jpg" className="gallery-link">
                          <img
                            src="img/portfolio/2.jpg"
                            alt=""
                            alt="E-Learning App"
                          />
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
                          <h5>Business Card</h5>
                          <span>Graphicriver Market</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a href="img/portfolio/4.jpg" className="gallery-link">
                          <img src="img/portfolio/4.jpg" alt="Business Card" />
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
                          <h5>Web Application</h5>
                          <span>Behance Shot</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a href="img/portfolio/6.jpg" className="gallery-link">
                          <img
                            src="img/portfolio/6.jpg"
                            alt="Web Application"
                          />
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
                          <h5>Motion Graphy</h5>
                          <span>Android App</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a href="img/portfolio/1.jpg" className="gallery-link">
                          <img src="img/portfolio/1.jpg" alt="Motion Graphy" />
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
                          <h5>Motion Graphy</h5>
                          <span>Android App</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a href="img/portfolio/1.jpg" className="gallery-link">
                          <img src="img/portfolio/1.jpg" alt="Motion Graphy" />
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
                          <h5>E-Learning App</h5>
                          <span>Nuna ios App</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a href="img/portfolio/2.jpg" className="gallery-link">
                          <img src="img/portfolio/2.jpg" alt="E-Learning App" />
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
                          <h5>Visual Design</h5>
                          <span>Themeforest Market</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a href="img/portfolio/3.jpg" className="gallery-link">
                          <img src="img/portfolio/3.jpg" alt="Visual Design" />
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
                          <h5>Business Card</h5>
                          <span>Graphicriver Market</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a href="img/portfolio/4.jpg" className="gallery-link">
                          <img src="img/portfolio/4.jpg" alt="Business Card" />
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
                          <h5>Web Application</h5>
                          <span>Behance Shot</span>
                        </div>
                        {/* End .portfolio-info */}
                        <a href="img/portfolio/6.jpg" className="gallery-link">
                          <img
                            src="img/portfolio/6.jpg"
                            alt="Web Application"
                          />
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
