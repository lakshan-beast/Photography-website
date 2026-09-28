import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

import Slider from "./components/ImagesSlider";
import About from "./components/AboutEquipment";
import Services from "./components/ServicesPackages";
import FAQ from "./components/FAQ";
import AllAlbums from "./components/AllAlbums";

function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

// Home Page Component එක
function HomePage() {
  return (
    <>
      <Hero />
      <Slider />
      <Services />
      <About />
      <FAQ />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollTop />

      <div className="bg-dark-bg min-h-screen text-white select-none">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/all-albums" element={<AllAlbums />} />
        </Routes>
      </div>
    </Router>
  );
}
