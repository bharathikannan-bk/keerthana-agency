import React from "react";
// import { Helmet } from "react-helmet";
import Home_Component from "../../component/home/banner";
import Navbar from "../../shared/navbar";
import Home_AboutUs from "../../component/home/aboutus";
import Home_Service from "../../component/home/service";
import Home_testimoral from "../../component/home/testimoral";
import Home_countries from "../../component/home/countries";
import Home_chooseus from "../../component/home/chooseus";
import Footer from "../../shared/footer";

function Home_View() {
  return (
    <>
      {/* <Helmet>
        <title>Home | Keerthana Agency</title>
      </Helmet> */}
      <Navbar />
      <main className="main">
        <Home_Component />
        <Home_AboutUs />
        <Home_Service />
        <Home_countries />
        <Home_chooseus />
        <Home_testimoral />
        <Footer />
      </main>
    </>
  );
}

export default Home_View;
