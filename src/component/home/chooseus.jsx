import React from "react";
import CountUp from "react-countup";

function Home_chooseus() {
  return (
    <>
      <section id="about" class="about section section-bg dark-background">
        <div class="container section-title" data-aos="fade-up">
          <h2>Why Choose Us ?</h2>
          <p>
            Keerthana Agency is a trusted overseas recruitment consultancy
            helping candidates find genuine job opportunities abroad. Our team
            ensures a transparent recruitment process and reliable support for
            candidates looking to build a successful career overseas.
          </p>
        </div>
        <div class="container position-relative">
          <div class="row gy-5 text-start">
            <div
              class="content col-xl-5 d-flex flex-column"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3>Trusted Overseas Recruitment Agency</h3>
              <p>
                Keerthana Agency specializes in providing international job
                opportunities for skilled and unskilled workers. We work with
                reputable companies across countries such as Dubai, Qatar, Saudi
                Arabia, Singapore, Malaysia, Vietnam, and Canada. Our mission is
                to help candidates achieve their dream of working abroad by
                offering professional recruitment services and complete guidance
                throughout the process.
              </p>
              <a
                href="#"
                class="about-btn align-self-center align-self-xl-start"
              >
                <span>About us</span> <i class="bi bi-chevron-right"></i>
              </a>
            </div>

            <div class="col-xl-7" data-aos="fade-up" data-aos-delay="200">
              <div class="row gy-4">
                <div class="col-md-6 icon-box position-relative">
                  <i class="bi bi-briefcase"></i>
                  <h4>
                    <a href="" class="stretched-link">
                      Genuine Overseas Jobs
                    </a>
                  </h4>
                  <p>
                 We provide verified job opportunities with trusted international employers across multiple industries.
                  </p>
                </div>

                <div class="col-md-6 icon-box position-relative">
                  <i class="bi bi-gem"></i>
                  <h4>
                    <a href="" class="stretched-link">
                    Transparent Recruitment Process
                    </a>
                  </h4>
                  <p>
                    Our recruitment process is transparent, ethical, and follows proper international employment standards.
                  </p>
                </div>

                <div class="col-md-6 icon-box position-relative">
                  <i class="bi bi-lightning-charge"></i>
                  <h4>
                    <a href="" class="stretched-link">
                     Fast Job Placement
                    </a>
                  </h4>
                  <p>
                   We help candidates secure overseas jobs quickly through our strong employer network.
                  </p>
                </div>

                <div class="col-md-6 icon-box position-relative">
                  <i class="bi bi-passport"></i>
                  <h4>
                    <a href="" class="stretched-link">
                      Complete Visa Assistance
                    </a>
                  </h4>
                  <p>
                   Our team supports candidates with documentation, visa processing, and travel arrangements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stats" className="stats section">
      <div className="container">
        <div className="row gy-4">

          <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
            <i className="bi bi-emoji-smile"></i>
            <div className="stats-item">
              <h2 className="d-flex justify-content-center">
                <CountUp end={5000} duration={3} />+
              </h2>
              <p>Candidates Placed</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
            <i className="bi bi-globe"></i>
            <div className="stats-item">
              <h2 className="d-flex justify-content-center">
                <CountUp end={8} duration={3} />+
              </h2>
              <p>Countries Served</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
            <i className="bi bi-building"></i>
            <div className="stats-item">
              <h2 className="d-flex justify-content-center">
                <CountUp end={120} duration={3} />+
              </h2>
              <p>International Companies</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
            <i className="bi bi-award"></i>
            <div className="stats-item">
              <h2 className="d-flex justify-content-center">
                <CountUp end={10} duration={3} />+
              </h2>
              <p>Years Experience</p>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  );
}

export default Home_chooseus;
