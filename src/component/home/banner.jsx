import React from "react";
import BannerImg from "../../assets/img/new/banner-img.jpg";

function Home_Component() {
  return (
    <>
      <section id="hero" class="hero section">
        <img src={BannerImg} alt="Overseas Recruitment Agency" data-aos="fade-in" />

        <div class="container">
          <div class="row text-start">
            <div class="col-lg-6">
              <h2 data-aos="fade-up" data-aos-delay="100">
                Trusted Overseas Recruitment Agency
              </h2>
              <p data-aos="fade-up" data-aos-delay="200">
                We help skilled and talented candidates find the best job
                opportunities abroad. Our agency connects job seekers with
                trusted employers across the Middle East, Europe, and other
                international destinations.
              </p>
              <div class="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
                <a href="#about" class="btn-get-started">
                  Apply For Jobs
                </a>
                <a
                  href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                  class="glightbox btn-watch-video d-flex align-items-center"
                >
                  <i className="bi bi-briefcase"></i>
                  <span>About Our Agency</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home_Component;
