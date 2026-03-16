import React from "react";

function Home_Service() {
  return (
    <>
      <section
        id="services"
        class="services section section-bg dark-background"
      >
        {/* <!-- Section Title --> */}
        <div class="container section-title" data-aos="fade-up">
          <h2>Our Services</h2>
          <p>
            Keerthana Agency provides professional overseas recruitment and
            manpower consultancy services connecting job seekers with trusted
            international employers.
          </p>
        </div>

        <div class="container">
          <div class="row gy-4 text-start">
            <div class="col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div class="service-item d-flex position-relative h-100">
                <i class="bi bi-briefcase icon flex-shrink-0"></i>
                <div>
                  <h4 class="title">
                    <a href="service-details.html" class="stretched-link">
                      Overseas Job Placement
                    </a>
                  </h4>
                  <p class="description text-justify">
                    We help candidates find the best international job
                    opportunities by connecting them with trusted employers in
                    countries such as UAE, Qatar, Saudi Arabia, Kuwait, and
                    other global destinations.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div class="service-item d-flex position-relative h-100">
                <i class="bi bi-person-check-fill icon flex-shrink-0"></i>
                <div>
                  <h4 class="title">
                    <a href="service-details.html" class="stretched-link">
                      Candidate Screening
                    </a>
                  </h4>
                  <p class="description text-justify">
                    {" "}
                    Our recruitment team carefully screens and selects qualified
                    candidates based on skills, experience, and employer
                    requirements to ensure the right talent is placed in the
                    right job.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div class="service-item d-flex position-relative h-100">
                <i class="bi bi-file-earmark-text-fill icon flex-shrink-0"></i>
                <div>
                  <h4 class="title">
                    <a href="service-details.html" class="stretched-link">
                      Documentation Support
                    </a>
                  </h4>
                  <p class="description text-justify">
                    We assist candidates with all necessary documentation
                    including employment contracts, passport processing, and
                    other legal paperwork required for overseas jobs.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div class="service-item d-flex position-relative h-100">
                <i class="bi bi-globe-central-south-asia icon flex-shrink-0"></i>
                <div>
                  <h4 class="title">
                    <a href="service-details.html" class="stretched-link">
                      Visa Assistance
                    </a>
                  </h4>
                  <p class="description text-justify">
                    Keerthana Agency provides complete visa assistance to help
                    candidates travel abroad legally and safely for employment
                    opportunities in international companies.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div class="service-item d-flex position-relative h-100">
                <i class="bi bi-mic-fill icon flex-shrink-0"></i>
                <div>
                  <h4 class="title">
                    <a href="service-details.html" class="stretched-link">
                      Interview Coordination
                    </a>
                  </h4>
                  <p class="description text-justify">
                    We arrange interviews between employers and candidates
                    either online or offline to ensure a smooth recruitment
                    process and quick job placements.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-6" data-aos="fade-up" data-aos-delay="600">
              <div class="service-item d-flex position-relative h-100">
                <i class="bi bi-airplane-fill icon flex-shrink-0"></i>
                <div>
                  <h4 class="title">
                    <a href="service-details.html" class="stretched-link">
                      Travel & Pre-Departure Support
                    </a>
                  </h4>
                  <p class="description text-justify">
                    Our agency provides travel arrangements and pre-departure
                    guidance to help candidates prepare for working and living
                    in foreign countries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home_Service;
