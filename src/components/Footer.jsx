import React from "react";

import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaArrowUp,
  FaArrowUpRightFromSquare,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  // smooth scroll to top function
  const scrollTop = () => {
    window.screenTop({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#0a0a0a] text-white pt24 pb-10 px-6 md:px-16 border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        {/* top section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
          {/* left column : heading */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-[0.03rem] text-neutral-500 font-semibold"></span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase leading-[0.95]">
              LET’S COLLABORATE. <br />
              <span className="text-neutrl-500">BOOK YOUR STORY.</span>
            </h2>
          </div>

          {/* right column : short about whatsapp btn */}
          <div className="lg:col-span-5 bg-[#121212] p-8 rounded-2xl border border-neutral-800/80 spcae-y-6">
            <h3 className="text-xs uppercase tracking-widset text-neutral-400 font-bold">
              About The Studio
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Capturing raw emotions, timeless stories, and high-fashion
              editorial portraits. Based in Colombo, Sri Lanka — available
              worldwide for destination projects.
            </p>

            <div className="pt-2">
              <a
                href="https://wa.me/94707046840?text=Hi%20Malli,%20I'd%20like%20to%20inquire%20about%20a%20photography%20session!"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-white text-black font-semibold py-3.5 px-6 rounded-full hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 text-sm tracking-wide group">
                <span>START A CONVERSATION</span>
                <FaArrowUpRightFromSquare className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
