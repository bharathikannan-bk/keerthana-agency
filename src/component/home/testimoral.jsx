import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image1 from "../../assets/img/testimonials/testimonials-1.jpg";
import Image2 from "../../assets/img/testimonials/testimonials-2.jpg";
import Image3 from "../../assets/img/testimonials/testimonials-3.jpg";
import Image4 from "../../assets/img/testimonials/testimonials-4.jpg";
import Image5 from "../../assets/img/testimonials/testimonials-5.jpg";

function Home_testimoral() {
  return (
    <>
      <section id="testimonials" className="testimonials section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div
          className="container text-start"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            loop={true}
            speed={600}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            <SwiperSlide>
              <div className="testimonial-item">
                <img src={Image1} className="testimonial-img" alt="" />
                <h3>Aravind Kumar</h3>
                <h4>Construction Worker – UAE</h4>
                <div class="stars">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
                <p className="text-justify">
                  <i class="bi bi-quote quote-icon-left"></i> I am very thankful
                  to this agency for helping me start my career in Dubai. The
                  whole process was very smooth and transparent. From document
                  verification to visa processing and ticket booking, their team
                  supported me at every step. Within a short time, I received my
                  visa and started working in a reputed construction company in
                  UAE. Today I am earning a good salary and supporting my
                  family. I highly recommend this agency for anyone who wants to
                  work abroad. <i class="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-item">
                <img src={Image2} className="testimonial-img" alt="" />
                <h3>Mohamed Riyaz</h3>
                <h4>Driver – Saudi Arabia</h4>
                <div class="stars">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
                <p className="text-justify">
                  <i class="bi bi-quote quote-icon-left"></i> This agency
                  provided excellent guidance throughout my overseas job
                  process. They helped me prepare for the interview and handled
                  all the documentation professionally. I got my driver job in
                  Saudi Arabia through them and the salary package is very good.
                  The team is very friendly and always ready to help. I truly
                  appreciate their effort and support.{" "}
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-item">
                <img src={Image3} className="testimonial-img" alt="" />
                <h3>Suresh Babu</h3>
                <h4>Electrician – Qatar</h4>
                <div class="stars">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
                <p className="text-justify">
                  <i class="bi bi-quote quote-icon-left"></i> I was searching
                  for an overseas job opportunity for a long time. Finally I
                  found this agency and it changed my life. They explained every
                  step clearly including medical tests, visa process and travel
                  arrangements. Within a few months I got placed as an
                  electrician in Qatar. Now I am working in a stable job with
                  good benefits. Thank you for making my dream come true.{" "}
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-item">
                <img src={Image4} className="testimonial-img" alt="" />
                <h3>Dinesh Kumar</h3>
                <h4>Factory Worker – Malaysia</h4>
                <div class="stars">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
                <p className="text-justify">
                  <i class="bi bi-quote quote-icon-left"></i> My experience with
                  this recruitment agency has been amazing. They guided me from
                  the beginning until my departure. All the procedures were done
                  legally and safely. I got a factory job in Malaysia with good
                  accommodation and salary. I am very happy with their service
                  and professionalism.
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-item">
                <img src={Image4} className="testimonial-img" alt="" />
                <h3>Prakash Raj</h3>
                <h4>Hotel Staff – Singapore</h4>
                <div class="stars">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
                <p className="text-justify">
                  <i class="bi bi-quote quote-icon-left"></i> I am very grateful
                  to this agency for helping me secure a hotel job in Singapore.
                  The process was quick and well organized. They supported me
                  with interview preparation, visa documentation and travel
                  arrangements. Today I am working in a well-known hotel and
                  gaining international experience. I strongly recommend this
                  agency to anyone who wants to work abroad.
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <div className="container-fluid mb-4 p-0 ">
        <div className="bg-img-handshack">
          <div className="overlay-container-hand">
            <div className="container">
              <h4>“Start Your Abroad Career Today”</h4>
              <p>
                Are you dreaming of building a successful career overseas? Our
                recruitment agency connects skilled professionals with trusted
                international employers. We guide you through every step of the
                journey including job selection, documentation, visa processing
                and travel arrangements. With years of experience and thousands
                of successful placements, we are committed to helping candidates
                achieve their goals and secure rewarding opportunities abroad.
                Take the first step towards a brighter future and apply today.
              </p>
              <button className="overlay-hand-button">Apply</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home_testimoral;
