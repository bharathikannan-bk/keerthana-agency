import React from "react";
import TabImg1 from "../../assets/img/working-1.jpg";
import TabImg2 from "../../assets/img/working-2.jpg";
import TabImg3 from "../../assets/img/working-3.jpg";
import TabImg4 from "../../assets/img/working-4.jpg";
import "./index.css";

function Home_AboutUs() {
  return (
    <>
      <div className="container mt-5">
        <div class="row">
          <div class="col-lg-6 order-1 order-lg-1 text-center">
            <img
              src={TabImg1}
              alt="Keerthana Overseas Recruitment Agency"
              class="img-fluid"
            />
          </div>
          <div class="col-lg-6 order-2 order-lg-2 p-4 mt-lg-0 text-start">
            <div class="aboutus-title">
              <h2>About us</h2>
            </div>
            <h3 className="mt-4">
              Trusted Overseas Recruitment Agency For International Job
              Opportunities
            </h3>
            <p class="fst-italic">
              Keerthana Agency is a professional overseas recruitment agency
              dedicated to helping job seekers find the best employment
              opportunities abroad. We connect skilled and talented candidates
              with trusted international employers across the Middle East,
              Europe, and other global destinations.
            </p>
            <p>
              Our agency specializes in providing reliable manpower solutions
              for industries such as construction, hospitality, healthcare,
              manufacturing, and technical sectors. We guide candidates through
              every step of the recruitment process including job selection,
              documentation, visa assistance, and travel support.
            </p>

            {/* <p>
              At Keerthana Agency, our mission is to build successful careers
              for job seekers while helping companies find the right talent. We
              focus on transparent recruitment, quick placements, and long-term
              relationships with both candidates and employers.
            </p> */}

            <button className="aboutus-btn-view">View more...</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home_AboutUs;
