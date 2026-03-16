import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import AOS from "aos";
import "./App.css";
import Home_View from "./view/home";
import "./assets/css/main.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/aos/aos.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import About_View from "./view/about";
import { HashRouter } from "react-router-dom";
import PageNotFound from "./component/404";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="App">
       <HashRouter>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home_View />} />
          <Route path="/about-us" element={<About_View />} />
        </Routes>
       </HashRouter>
    </div>
  );
}

export default App;
