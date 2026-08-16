// import React from "react";

// import {
//   FaInstagram,
//   FaWhatsapp,
//   FaEnvelope,
//   FaArrowUp,
//   FaArrowUpRightFromSquare,
//   FaFacebookF,
//   FaYoutube,
// } from "react-icons/fa6";

// export default function Footer() {
//   // smooth scroll to top function
//   const scrollTop = () => {
//     window.scrollTop({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer className="w-full bg-[#0a0a0a] text-white pt-24 pb-10 px-6 md:px-16 border-t border-[#1a1a1a]">
//       <div className="max-w-7xl mx-auto">
//         {/* top section */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
//           {/* left column : heading */}
//           <div className="lg:col-span-7 space-y-4">
//             <span className="text-xs uppercase tracking-[0.03rem] text-neutral-500 font-semibold"></span>
//             <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase leading-[0.95]">
//               LET’S COLLABORATE. <br />
//               <span className="text-neutral-500">BOOK YOUR STORY.</span>
//             </h2>
//           </div>

//           {/* right column : short about whatsapp btn */}
//           <div className="lg:col-span-5 bg-[#121212] p-8 rounded-2xl border border-neutral-800/80 space-y-6">
//             <h3 className="text-xs uppercase tracking-widest text-neutral-400 font-bold">
//               About The Studio
//             </h3>
//             <p className="text-neutral-400 text-sm leading-relaxed">
//               Capturing raw emotions, timeless stories, and high-fashion
//               editorial portraits. Based in Colombo, Sri Lanka — available
//               worldwide for destination projects.
//             </p>

//             <div className="pt-2">
//               <a
//                 href="https://wa.me/94707046840?text=Hi%User,%20I'd%20like%20to%20inquire%20about%20a%20photography%20session!"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="w-full bg-white text-black font-semibold py-3.5 px-6 rounded-full hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 text-sm tracking-wide group">
//                 <span>START A CONVERSATION</span>
//                 <FaArrowUpRightFromSquare className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* 2. middle bar : socail media links & live location */}
//         <div className="flex flex-wrap items-center justify-between gap-6 py-8 border-y border-neutral-900">
//           <div className="flex items-center gap-6 text-sm text-neutral-400">
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-white transition-colors flex items-center gap-2 text-base"
//               title="Instagram">
//               <FaInstagram className="text-lg" />
//               <span className="text-xs uppercase tracking-wider hidden sm:inline">
//                 Instagram
//               </span>
//             </a>

//             <a
//               href="https://wa.me/94770000000"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-white transition-colors flex items-center gap-2 text-base"
//               title="WhatsApp">
//               <FaWhatsapp className="text-lg" />
//               <span className="text-xs uppercase tracking-wider hidden sm:inline">
//                 WhatsApp
//               </span>
//             </a>

//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-white transition-colors flex items-center gap-2 text-base"
//               title="Facebook">
//               <FaFacebookF className="text-base" />
//               <span className="text-xs uppercase tracking-wider hidden sm:inline">
//                 Facebook
//               </span>
//             </a>

//             <a
//               href="https://youtube.com"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-white transition-colors flex items-center gap-2 text-base"
//               title="YouTube">
//               <FaYoutube className="text-lg" />
//               <span className="text-xs uppercase tracking-wider hidden sm:inline">
//                 YouTube
//               </span>
//             </a>

//             <a
//               href="mailto:info@malliphotography.com"
//               className="hover:text-white transition-colors flex items-center gap-2 text-base"
//               title="Email">
//               <FaEnvelope className="text-base" />
//               <span className="text-xs uppercase tracking-wider hidden sm:inline">
//                 Email
//               </span>
//             </a>
//           </div>

//           {/* location & availability badge */}
//           <div className="text-xs text-neutral-500 font-mono tracking-wider flex items-center gap-2">
//             <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
//             COLOMBO, LK 🇱🇰 — AVAILABLE FOR 2026
//           </div>
//         </div>

//         {/* 3. bottom bar */}
//         <div className="flex items-center justify-between pt-08 text-xs text-neutral-600 font-mono">
//           <p>© 2026 USER'S PHOTOGRAPHY. ALL RIGHTS RESERVED.</p>

//           <button
//             type="button"
//             onClick={scrollTop}
//             className="flex items-center gap-2 hover:text-white transition-colors group">
//             <span className="hidden sm:inline">BACK TO TOP</span>
//             <div className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 group">
//               <FaArrowUp className="text-xs" />
//             </div>
//           </button>
//         </div>
//       </div>
//     </footer>
//   );
// }

// import React from "react";
// import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa6";

// export default function Footer() {
//   return (
//     <footer className="w-full bg-dark-bg text-white pt-20 pb-8 px-6 md:px-16 border-t border-[#1a1a1a]">
//       <div className="max-w-7xl mx-auto space-y-16">

//         {/* Top Section: Heading & Form Fields */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">

//           {/* Left: Huge Heading */}
//           <div className="lg:col-span-8 space-y-2">
//             <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase leading-[0.95]">
//               LET’S COLLABORATE. <br />
//               <span className="text-neutral-100">BOOK YOUR 2026 STORY.</span>
//             </h2>
//           </div>

//           {/* Right: Inputs & Get in Touch Button */}
//           <div className="lg:col-span-4 space-y-4">
//             <div>
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="w-full bg-neutral-950 border border-neutral-800 rounded-full py-3 px-5 text-sm focus:outline-none focus:border-neutral-500 transition-colors placeholder:text-neutral-600"
//               />
//             </div>
//             <div>
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full bg-neutral-950 border border-neutral-800 rounded-full py-3 px-5 text-sm focus:outline-none focus:border-neutral-500 transition-colors placeholder:text-neutral-600"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full mt-2 bg-neutral-300 text-black font-extrabold py-3.5 rounded-full hover:bg-white transition-all text-xs tracking-widest uppercase shadow-[0_0_20px_rgba(255,255,255,0.15)]"
//             >
//               GET IN TOUCH FOR 2026
//             </button>
//           </div>

//         </div>

//         {/* Bottom Bar: Social Icons & Copyright */}
//         <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-neutral-900 text-xs text-neutral-500 font-mono">

//           {/* Social Icons */}
//           <div className="flex items-center gap-5 text-neutral-400">
//             <a href="#instagram" className="hover:text-white transition-colors"><FaInstagram className="text-base" /></a>
//             <a href="#facebook" className="hover:text-white transition-colors"><FaFacebookF className="text-sm" /></a>
//             <a href="#twitter" className="hover:text-white transition-colors"><FaTwitter className="text-base" /></a>
//             <a href="#youtube" className="hover:text-white transition-colors"><FaYoutube className="text-base" /></a>
//           </div>

//           {/* Copyright */}
//           <p className="text-[11px] uppercase tracking-wider text-neutral-600 text-center sm:text-right">
//             © 2026 LAKSHAN PHOTOGRAPHY. ALL RIGHTS RESERVED.
//           </p>
//         </div>

//       </div>
//     </footer>
//   );
// }

import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaArrowUp,
  FaArrowUpRightFromSquare,
  FaFacebookF,
  FaYoutube,
  FaRegCopyright,
  FaTiktok,
} from "react-icons/fa6";

export default function Footer() {
  // Smooth scroll to top function
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-dark text-white pt-24 pb-10 px-6 md:px-16 border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        {/* 1. Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-semibold block mb-2">
              CONTACT
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter uppercase leading-[0.95]">
              LET’S COLLABORATE. <br />
              <span className="text-neutral-600">BOOK YOUR STORY.</span>
            </h2>
          </div>

          {/* Right Column: Short About & WhatsApp Button */}
          <div className="lg:col-span-5 bg-dark p-8 rounded-2xl border-2 border-neutral-700/90 shadow-sm space-y-6">
            <h3 className="text-xs uppercase tracking-widest text-neutral-300 font-bold">
              About The Studio
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Capturing precious milestones, romantic stories, and golden
              childhood memories. Based in Kandy, Sri Lanka — available
              island-wide to freeze your special moments in time.
            </p>

            <div className="pt-2">
              <a
                href="https://wa.me/94707046840?text=Hi%20Lakshan%2C%20I%27d%20like%20to%20inquire%20about%20a%20photoshoot%21"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-white text-black font-semibold py-3.5 px-6 rounded-full hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 text-sm tracking-wide group">
                <span>START A CONVERSATION</span>
                <FaArrowUpRightFromSquare className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* 2. Middle Bar: Social Media Links & Live Location */}
        <div className="flex flex-wrap items-center justify-between gap-12 py-8 border-y border-neutral-900">
          <div className="flex flex-wrap items-center gap-8 text-sm  text-neutral-400">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-2 text-base"
              title="Instagram">
              <FaInstagram className="text-lg" />
              <span className="text-xs uppercase tracking-wider hidden sm:inline">
                Instagram
              </span>
            </a>

            <a
              href="https://wa.me/+94707046840"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-2 text-base"
              title="WhatsApp">
              <FaWhatsapp className="text-lg" />
              <span className="text-xs uppercase tracking-wider hidden sm:inline">
                WhatsApp
              </span>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-2 text-base"
              title="Facebook">
              <FaFacebookF className="text-base" />
              <span className="text-xs uppercase tracking-wider hidden sm:inline">
                Facebook
              </span>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-2 text-base"
              title="YouTube">
              <FaYoutube className="text-lg" />
              <span className="text-xs uppercase tracking-wider hidden sm:inline">
                YouTube
              </span>
            </a>

            <a
              href="mailto:info@malliphotography.com"
              className="hover:text-white transition-colors flex items-center gap-2 text-base"
              title="Email">
              <FaEnvelope className="text-base" />
              <span className="text-xs uppercase tracking-wider hidden sm:inline">
                Email
              </span>
            </a>

            <a
              href="https://tikto.com"
              className="hover:text-white transition-colors flex items-center gap-2 text-base"
              title="TikTok">
              <FaTiktok className="text-base" />
              <span className="text-xs uppercase tracking-wider hidden sm:inline">
                TikTok
              </span>
            </a>
          </div>

          {/* Location & Availability Badge */}
          <div className="text-xs text-neutral-400 font-body tracking-wider flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            KANDY, Sri Lanka 🇱🇰 —  Available for 2026
          </div>
        </div>

        {/* 3. Bottom Bar */}
        <div className="flex items-center justify-between pt-8 text-xs text-neutral-500 font-body ">
          <div className="flex flex-col   gap-1 ">
            <div className="flex flex-row items-start md:items-center">
              <FaRegCopyright className="mr-1.5 text-sm " /> Copyrights 
               <span className="mx-2">{new Date().getFullYear()}</span> LAKSHAN's PHOTOGRAPHY. All Rights Reserved.
            </div>

            <div className="">
              <p className="mt-2 md:mt-0">
                Designed & Developed by
                <a
                  href="https://lakshan-sandeepa-dev.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-300 hover:text-white font-medium transition-colors underline underline-offset-4 pl-1">
                  Lakshan
                </a>
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={scrollTop}
            className="flex items-center gap-2 hover:text-white transition-colors group">
            <span className="hidden sm:inline">BACK TO TOP</span>
            <div className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 transition-colors group-hover:border-neutral-700">
              <FaArrowUp className="text-xs transition-transform group-hover:-translate-y-0.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
