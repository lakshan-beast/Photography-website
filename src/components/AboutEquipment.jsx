import React from "react";

import {
  FiCamera,
  FiShield,
  FiHeart,
  FiStar,
  FiHardDrive,
  FiSun,
  FiImage,
} from "react-icons/fi";

export default function AboutEquipment() {
  return (
    <section
      id="about"
      className="bg-neutral-950 text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* about section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* photographer image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-visible border border-neutral-800 bg-neutral-900 aspect-4/5">
              <img
                src="/camera-image.jpg"
                alt="Photograper Portfolio"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 rounded-4xl"
              />
              <div className="absolute inset-0 bg-linear-to-t from-neutral-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-5 left-6 right-6">
                <span className="text-xs uppercase tracking-widset text-neutral-400 font-medium">
                  Lead Photographer
                </span>
                <h3 className="text-xl font-bold mt-1">
                  Based in Kandy, Sri Lanka.
                </h3>
              </div>
            </div>
          </div>

          {/* about bio */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">
              <FiStar className="w-3.5 h-3.5 text-amber-400" />
              <span>Behind The Lens</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              Crafting timeless visual heirlooms for life's most cherished
              moments.
            </h2>

            <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
              Based in Kandy, Sri Lanka, I specialize in transforming fleeting
              moments into everlasting memories. From the gentle giggles of your
              baby's first milestones to the quiet intimacy of couple
              portraiture and the joyful energy of birthday celebrations, my
              approach centers on capturing authentic emotion with an artistic,
              timeless aesthetic.
            </p>

            {/* 3. key badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-900 space-y-2">
                <FiShield className="w-6 h-6 text-emerald-400" />
                <h4 className="font-semibold text-sm">Infant Safe & Gentle</h4>
                <p className="text-xs text-neutral-400">
                  Calm, soothing environments tailored for delicate baby shoots.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-900 space-y-2">
                <FiHeart className="w-6 h-6 text-rose-400" />
                <h4 className="font-semibold text-sm">Candid & Authentic</h4>
                <p className="text-xs text-neutral-400">
                  Focusing on genuine human connections rather than forced
                  poses.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-900 space-y-2">
                <FiStar className="w-6 h-6 text-amber-400" />
                <h4 className="font-semibold text-sm">Signature Aesthetics</h4>
                <p className="text-xs text-neutral-400">
                  Elegant color grading crafted to remain timeless for decades.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* divider */}
        <hr className="border-neutral-900" />

        {/* equiment & quality section */}
        <div className="space-y12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Professional Mastery & Uncompromising Quality
            </h2>
            <p className="text-neutral-400 text-sm md:text-base">
              Beyond technical specifications, my priority is delivering
              exceptional imagery while ensuring your raw memories are safely
              preserved.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* left : camera */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900 aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop"
                  alt="Camera Gear Setup"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-neutral-950/30" />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-neutral-950/80 backdrop-blur-md border border-neutral-800/80 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white text-black">
                    <FiCamera className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">
                      Flagship Full-Frame Systems
                    </p>
                    <p className="text-[11px] text-neutral-400">
                      Paired with ultra-sharp prime lenses
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Quality & Safety Highlights */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 order-1 lg:order-2">
              <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-900 hover:border-neutral-800 transition-all space-y-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-white">
                  <FiImage className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg">Ultra HD Resolution</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Captured for breathtaking large-format wall frames and luxury
                  heirloom albums with zero loss in detail.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-900 hover:border-neutral-800 transition-all space-y-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-rose-400">
                  <FiStar className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg">Cinematic Depth</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Fast prime lenses create a dreamy, soft-focus background that
                  naturally draws every eye to your emotion.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-900 hover:border-neutral-800 transition-all space-y-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-amber-400">
                  <FiSun className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg">
                  Infant-Safe Soft Lighting
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Flicker-free, continuous soft illumination designed to keep
                  sensitive eyes comfortable while yielding a natural glow.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-900 hover:border-neutral-800 transition-all space-y-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-emerald-400">
                  <FiHardDrive className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg">Redundant Data Safety</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  In-camera dual card slot backup guarantees your
                  once-in-a-lifetime moments are instantly protected against
                  data loss.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
