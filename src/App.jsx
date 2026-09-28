import React from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

import Slider from "./components/ImagesSlider";
import About from "./components/AboutEquipment";
import Services from "./components/ServicesPackages";
import FAQ from "./components/FAQ";

export default function App() {
  return (
    <div className="bg-dark-bg min-h-screen text-white select-none">
      <Hero />
      <Slider />
      <Services />
      <About />
      <FAQ />
      <Footer />
    </div>
  );
}
