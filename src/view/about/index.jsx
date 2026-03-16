import React from "react";
import Home_Component from "../../component/home/banner";
import Navbar from "../../shared/navbar";
import Home_AboutUs from "../../component/home/aboutus";
import Home_Service from "../../component/home/service";
import Home_testimoral from "../../component/home/testimoral";
import Home_countries from "../../component/home/countries";
import Home_chooseus from "../../component/home/chooseus";
import Footer from "../../shared/footer";

function About_View() {
  return (
    <>
      <Navbar />
      <main class="main">
        <Home_AboutUs />
        <Footer />
      </main>
    </>
  );
}

export default About_View;
