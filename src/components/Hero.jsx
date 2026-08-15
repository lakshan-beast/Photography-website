// import React from "react";

// import { FaBars } from "react-icons/fa6";

// export default function Hero() {
//   return (
//     <section className="relative w-full min-h-screen bg-dark text-white flex flex-col justify-between p-6 md:p-12 overflow-hidden">
//       {/* background image with dark overlay */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src="/hero.jpg"
//           alt="Lakshan Photography Hero"
//           className="w-full h-full object-cover object-center opacity-40 grayscale"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-[#0a0a0a]/80"></div>
//       </div>

//       {/* top navbar header */}
//       <header className="relative z-10 flex items-center justify-baseline w-full max-w-7xl mx-auto pt-2">
//         <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-semibold text-neutral-300">
//           <a href="#portfolio" className="hover:text-white transition-colors">
//             portfolio
//           </a>
//           <a href="#experience" className="hover:text-white transition-colors">
//             experience
//           </a>
//           <a href="#journal" className="hover:text-white transition-colors">
//             journal
//           </a>
//           <a href="#contact" className="hover:text-white transition-colors">
//             contact
//           </a>
//         </nav>

//         <div className="flex items-center gap-4 ml-auto">
//           <div className="flex place-items-center gap-2 bg-neutral-900/80 border border-neutral-800 px-3 py-1.5 rounded-full text-[11px] font-mono text-neutral-300">
//             <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
//             <span>NOW BOOKING FOR 2026</span>
//           </div>

//           <button type="button" className="p-2 text-white md:hidden">
//             <FaBars className="text-lg" />
//           </button>
//         </div>
//       </header>

//       {/* hero central content */}
//       {/* Hero Central Content */}
//       <div className="relative z-10 max-w-7xl mx-auto w-full my-auto pt-20 pb-12">
//         <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold uppercase tracking-tight leading-[0.92] max-w-5xl text-neutral-100">
//           LAKSHAN'S <br />
//           PHOTOGRAPHY: <br />
//           <span className="text-white">UNVEILING THE INVISIBLE.</span>
//         </h1>

//         <div className="mt-8 space-y-2">
//           <p className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400">
//             CREATIVE VISIONARY • 2026
//           </p>
//           <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">
//             © 2026 LAKSHAN PHOTOGRAPHY. ALL RIGHTS RESERVED.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { FaBars, FaCopyright } from "react-icons/fa6";

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
        <div className="text-sm font-bold tracking-[0.2em] uppercase">
          LAKSHAN'S
        </div>

        {/* Right Side Header Items */}
        <div className="flex items-center gap-6">
          {/* Availability Badge */}
          <div className="flex place-items-center gap-2 bg-neutral-900/60 backdrop-blur-md border border-neutral-800/80 px-4 py-2 rounded-full text-[10px] font-mono tracking-wider text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>NOW BOOKING FOR 2026</span>
          </div>

          {/* Mobile Menu Icon */}
          <button
            type="button"
            className="p-2 text-white md:hidden hover:text-neutral-400 transition-colors">
            <FaBars className="text-lg" />
          </button>
        </div>
      </header>

      {/* Main Content Area (Split into Text and Vertical Nav) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-end my-auto pt-24 pb-6 gap-8">
        {/* Left Side: Typography */}
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl sm:text-6xl md:text-[5.5rem] font-extrabold uppercase tracking-tighter leading-[0.9] text-white">
            LAKSHAN'S <br />
            PHOTOGRAPHY: <br />
            <span className="text-white">UNVEILING THE INVISIBLE.</span>
          </h1>

          {/* Subtext info hidden in design layout but placed cleanly */}
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500">
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
          <a href="#portfolio" className="hover:text-white transition-colors">
            PORTFOLIO
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
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col sm:flex-row justify-between items-start sm:items-center text-[10px] font-mono text-neutral-600 tracking-widest gap-2 border-t border-neutral-900/60 pt-4">
        <div>SCROLL DOWN TO EXPLORE</div>
        <div>
          <FaCopyright /> 2026 LAKSHAN PHOTOGRAPHY. ALL RIGHTS RESERVED.
        </div>
      </div>
    </section>
  );
}
