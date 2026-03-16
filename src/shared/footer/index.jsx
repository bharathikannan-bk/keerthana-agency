import React from "react";
import Logo from '../../assets/img/new/footer-logo.png'

function Footer() {
  return (
    <>
      <footer id="footer" class="footer dark-background text-start">
        <div class="container footer-top">
          <div class="row gy-4">
            <div class="col-lg-4 col-md-6 footer-about">
              <a href="index.html" class="logo d-flex align-items-center">
                <img src={Logo} alt="" />
              </a>
              <div class="footer-contact pt-3">
                <p>2/54,bharathi nagar,</p>
                <p>Paramakudi,Ramanathapuram - 623601</p>
                <p class="mt-3">
                  <strong>Phone:</strong> <span>+91 6384626418</span>
                </p>
                <p>
                  <strong>Email:</strong> <span>keerthanaagency@gmail.com</span>
                </p>
              </div>
              <div class="social-links d-flex mt-4">
                <a href="">
                  <i class="bi bi-twitter-x"></i>
                </a>
                <a href="">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="">
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>
            </div>

            <div class="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-2 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="#">Overseas Job Placement</a>
                </li>
                <li>
                  <a href="#">Visa Processing</a>
                </li>
                <li>
                  <a href="#">Passport Assistance</a>
                </li>
                <li>
                  <a href="#">Document Verification</a>
                </li>
                <li>
                  <a href="#">Medical Checkup Support</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-4 col-md-12 footer-newsletter">
              <h4>Job Alert</h4>
              <p>
                Subscribe to receive latest overseas job opportunities, recruitment updates and visa information directly to your email.
              </p>
              <form
                action="forms/newsletter.php"
                method="post"
                class="php-email-form"
              />
              <div class="newsletter-form">
                <input type="email" name="email" placeholder="Enter your email" />
                <input type="submit" value="Subscribe" />
              </div>
              {/* <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">
                Your subscription request has been sent. Thank you!
              </div> */}
              {/* </form> */}
            </div>
          </div>
        </div>

        <div class="container copyright text-center mt-4">
          <p>
           © 2026 Keerthana Overseas Recruitment Agency. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
