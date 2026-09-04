// import React from "react";
// import {
//   FaInstagram,
//   FaWhatsapp,
//   FaEnvelope,
//   FaArrowUp,
//   FaArrowUpRightFromSquare,
//   FaFacebookF,
//   FaYoutube,
//   FaRegCopyright,
//   FaTiktok,
// } from "react-icons/fa6";

// export default function Footer() {
//   // Smooth scroll to top function
//   const scrollTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer
//       id="contact"
//       className="w-full bg-dark text-white pt-24 pb-10 px-6 md:px-16 border-t border-[#1a1a1a]">
//       <div className="max-w-7xl mx-auto">
//         {/* 1. Top Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
//           {/* Left Column: Heading */}
//           <div className="lg:col-span-7 space-y-4">
//             <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-semibold block mb-2">
//               CONTACT
//             </span>
//             <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter uppercase leading-[0.95]">
//               LET’S COLLABORATE. <br />
//               <span className="text-neutral-600">BOOK YOUR STORY.</span>
//             </h2>
//           </div>

//           {/* Right Column: Short About & WhatsApp Button */}
//           <div className="lg:col-span-5 bg-dark p-8 rounded-2xl border-2 border-neutral-700/90 shadow-sm space-y-6">
//             <h3 className="text-xs uppercase tracking-widest text-neutral-300 font-bold">
//               About The Studio
//             </h3>
//             <p className="text-neutral-400 text-sm leading-relaxed">
//               Capturing precious milestones, romantic stories, and golden
//               childhood memories. Based in Kandy, Sri Lanka — available
//               island-wide to freeze your special moments in time.
//             </p>

//             <div className="pt-2">
//               <a
//                 href="https://wa.me/94707046840?text=Hi%20Lakshan%2C%20I%27d%20like%20to%20inquire%20about%20a%20photoshoot%21"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="w-full bg-white text-black font-semibold py-3.5 px-6 rounded-full hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 text-sm tracking-wide group">
//                 <span>START A CONVERSATION</span>
//                 <FaArrowUpRightFromSquare className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* 2. Middle Bar: Social Media Links & Live Location */}
//         <div className="flex flex-wrap items-center justify-between gap-12 py-8 border-y border-neutral-900">
//           <div className="flex flex-wrap items-center gap-8 text-sm  text-neutral-400">
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
//               href="https://wa.me/+94707046840"
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

//             <a
//               href="https://tikto.com"
//               className="hover:text-white transition-colors flex items-center gap-2 text-base"
//               title="TikTok">
//               <FaTiktok className="text-base" />
//               <span className="text-xs uppercase tracking-wider hidden sm:inline">
//                 TikTok
//               </span>
//             </a>
//           </div>

//           {/* Location & Availability Badge */}
//           <div className="text-xs text-neutral-400 font-body font-semibold tracking-wider flex items-center gap-3">
//             <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
//             KANDY, Sri Lanka 🇱🇰 — Available for 2026
//           </div>
//         </div>

//         {/* 3. Bottom Bar */}
//         {/* <div className="flex items-center justify-between pt-8 text-xs text-neutral-500 font-body bg-white">
//           <div className="flex flex-row items-center justify-between gap-1">
//             <div className="flex flex-row items-start md:items-center justify-between text-center mx-auto">
//               Copyrights
//               <FaRegCopyright className="ml-1.5 text-sm mt-0.5" />
//               <span className="mx-2">{new Date().getFullYear()}</span>{" "}
//               <span className="font-semibold text-white/60 mr-2">
//                 SyncXel Web Solutions.
//               </span>
//               All rights reserved.
//             </div>
//             {/* </div> *

//             <button
//               type="button"
//               onClick={scrollTop}
//               className="pt-2 lg:pt-0 flex items-center justify-end gap-2 hover:text-white transition-colors group">
//               <span className="hidden sm:inline">BACK TO TOP</span>
//               <div className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 transition-colors group-hover:border-neutral-700">
//                 <FaArrowUp className="text-xs transition-transform group-hover:-translate-y-0.5" />
//               </div>
//             </button>
//           </div>
//         </div> */}

//         <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-neutral-500 font-sans border-t border-neutral-900">
//           {/* Left: Copyrights Info */}
//           <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1 text-center text-xs">
//             <span>Copyright</span>
//             <FaRegCopyright className="text-xs" />
//             <span>{new Date().getFullYear()}</span>
//             <span className="font-semibold text-neutral-300">
//               SyncXel Web Solutions.
//             </span>
//             <span className="hidden sm:inline">All rights reserved.</span>
//           </div>

//           {/* Right: Back to Top Button */}
//           <button
//             type="button"
//             onClick={scrollTop}
//             className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group cursor-pointer"
//             aria-label="Back to top">
//             <span className="text-[10px] font-mono tracking-widest uppercase">
//               BACK TO TOP
//             </span>
//             <div className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 transition-colors group-hover:border-neutral-700">
//               <FaArrowUp className="text-xs transition-transform group-hover:-translate-y-0.5" />
//             </div>
//           </button>
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
import { motion } from "framer-motion";

export default function Footer() {
  // Smooth scroll to top function
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="w-full bg-neutral-950 text-white pt-24 pb-10 px-6 md:px-16 border-t border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* 1. Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
          {/* Left Column: Heading with motion */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-semibold block mb-2">
              CONTACT
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter uppercase leading-[0.95]">
              LET’S COLLABORATE. <br />
              <span className="text-neutral-600">BOOK YOUR STORY.</span>
            </h2>
          </motion.div>

          {/* Right Column: Short About & WhatsApp Button */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 bg-neutral-900/50 p-8 rounded-3xl border border-neutral-800 shadow-xl space-y-6">
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
                className="w-full bg-white text-black font-semibold py-3.5 px-6 rounded-full hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 text-sm tracking-wide group cursor-pointer">
                <span>START A CONVERSATION</span>
                <FaArrowUpRightFromSquare className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* 2. Middle Bar: Social Media Links & Live Location */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-between gap-12 py-8 border-y border-neutral-900">
          <div className="flex flex-wrap items-center gap-8 text-sm text-neutral-400">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-2 text-base cursor-pointer"
              title="Instagram">
              <FaInstagram className="text-lg" />
              <span className="text-xs uppercase tracking-wider hidden sm:inline">
                Instagram
              </span>
            </a>

            <a
              href="https://wa.me/94707046840"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-2 text-base cursor-pointer"
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
              className="hover:text-white transition-colors flex items-center gap-2 text-base cursor-pointer"
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
              className="hover:text-white transition-colors flex items-center gap-2 text-base cursor-pointer"
              title="YouTube">
              <FaYoutube className="text-lg" />
              <span className="text-xs uppercase tracking-wider hidden sm:inline">
                YouTube
              </span>
            </a>

            <a
              href="mailto:info@malliphotography.com"
              className="hover:text-white transition-colors flex items-center gap-2 text-base cursor-pointer"
              title="Email">
              <FaEnvelope className="text-base" />
              <span className="text-xs uppercase tracking-wider hidden sm:inline">
                Email
              </span>
            </a>

            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-2 text-base cursor-pointer"
              title="TikTok">
              <FaTiktok className="text-base" />
              <span className="text-xs uppercase tracking-wider hidden sm:inline">
                TikTok
              </span>
            </a>
          </div>

          {/* Location & Availability Badge */}
          <div className="text-xs text-neutral-400 font-body font-semibold tracking-wider flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            KANDY, Sri Lanka 🇱🇰 — ACCEPTING 2026 SESSIONS
          </div>
        </motion.div>

        {/* 3. Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-neutral-500 font-sans">
          {/* Left: Copyrights Info */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1 text-center text-xs">
            <span>Copyright</span>
            <FaRegCopyright className="text-xs" />
            <span>{new Date().getFullYear()}</span>
            <span className="font-semibold text-neutral-300">
              SyncXel Web Solutions.
            </span>
            <span className="hidden sm:inline">All rights reserved.</span>
          </div>

          {/* Right: Back to Top Button */}
          <button
            type="button"
            onClick={scrollTop}
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group cursor-pointer"
            aria-label="Back to top">
            <span className="text-[10px] font-mono tracking-widest uppercase">
              BACK TO TOP
            </span>
            <div className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 transition-colors group-hover:border-neutral-700">
              <FaArrowUp className="text-xs transition-transform group-hover:-translate-y-0.5" />
            </div>
          </button>
        </motion.div>
      </div>
    </footer>
  );
}
