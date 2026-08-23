import React from "react";
import { FaBars, FaRegCopyright } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-dark text-white flex flex-col justify-between p-6 md:p-12 overflow-hidden font-sans">
      {/* Background Image with Precise Overlay to match design */}
      <div className="absolute inset-0 z-0 flex justify-center items-center">
        <img
          src="/hero.jpg"
          alt="Lakshan Photography Hero"
          className="w-full h-full object-cover object-center opacity-40 grayscale md:max-w-4xl md:h-[85vh] md:rounded-lg"
        />
        {/* Dark Vignette / Gradient Overlays */}
        <div className="absolute inset-0 bg-linear-to-b from-dark/50 via-transparent to-dark"></div>
        <div className="absolute inset-0 bg-dark/30"></div>
      </div>

      {/* Top Navbar Header */}
      <header className="relative z-10 flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Brand Logo - Top Left */}
        <div className="text-2xl tracking-[0.2em] uppercase font-heading font-bold">
          LAKSHAN'S
        </div>

        {/* Right Side Header Items */}
        <div className="flex items-center gap-6 ">
          {/* Availability Badge */}
          <div className="hidden md:flex place-items-center gap-2 bg-neutral-900/60 backdrop-blur-md border border-neutral-500/80 px-4 py-2 rounded-full text-[10px] font-heading tracking-wider text-neutral-200 ">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>NOW BOOKING FOR 2026</span>
          </div>

          {/* Mobile Menu Icon */}
          <button
            type="button"
            // onClick={}
            className="p-2 text-white md:hidden hover:text-neutral-400 transition-colors">
            <FaBars className="text-3xl" />
          </button>
        </div>
      </header>

      {/* Main Content Area (Split into Text and Vertical Nav) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-end my-auto pt-24 pb-6 gap-8">
        {/* Left Side: Typography */}
        <div className="max-w-4xl space-y-8">
          <h1 className="text-5xl sm:text-6xl md:text-[5.5rem] font-extrabold uppercase tracking-tighter leading-[0.9] text-white">
            LAKSHAN'S <br />
            PHOTOGRAPHY : <br />
            <span className="text-white/50">UNVEILING THE INVISIBLE.</span>
          </h1>

          {/* Subtext info hidden in design layout but placed cleanly */}
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400 font-bold hover:text-emerald-600">
            custom fluid cursor &bull; editorial portfolio
          </p>
        </div>

        {/* Right Side: Vertical Navigation Menu (Exactly like the Design) */}
        <nav className="hidden md:flex flex-col items-end gap-4 text-[10px] uppercase tracking-[0.25em] font-medium text-neutral-400 border-l border-neutral-800/60 pl-6 h-fit mb-4">
          <a
            href="#home"
            className="hover:text-white text-white font-bold transition-colors">
            HOME
          </a>
          <a href="#slider" className="hover:text-white transition-colors">
            Memories
          </a>
          <a href="#services" className="hover:text-white transition-colors">
            SERVICES
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            ABOUT
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            CONTACT
          </a>
        </nav>
      </div>

      {/* Bottom Status / Footer Note of Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col sm:flex-row justify-between items-start sm:items-center text-[10px] font-body text-neutral-500 tracking-widest gap-2 border-t border-neutral-900/60 pt-4">
        <div>SCROLL DOWN TO EXPLORE</div>
        <div className="flex flex-row items-start md:items-center">
          <FaRegCopyright className="mr-1.5 text-sm mt-1" />{" "}
          {new Date().getFullYear()} LAKSHAN's PHOTOGRAPHY. ALL RIGHTS RESERVED.
        </div>
      </div>
    </section>
  );
}
