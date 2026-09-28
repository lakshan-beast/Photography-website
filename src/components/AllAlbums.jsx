import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiImage, FiArrowUpRight } from "react-icons/fi";

export default function AllAlbums() {
  const albums = [
    {
      id: 1,
      title: "Golden Hour Romance",
      category: "Couple Portraiture",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
      span: "md:col-span-1 md:row-span-2", // Masonry tall item
    },
    {
      id: 2,
      title: "First Smiles & Milestones",
      category: "Baby Photography",
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1000&auto=format&fit=crop",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 3,
      title: "Kandy Cultural Wedding Vows",
      category: "Wedding Story",
      image:
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop",
      span: "md:col-span-2 md:row-span-2", // Masonry large feature item
    },
    {
      id: 4,
      title: "Joyful 1st Birthday Bash",
      category: "Birthday Event",
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1000&auto=format&fit=crop",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 5,
      title: "Intimate Evening Portraits",
      category: "Couple Session",
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop",
      span: "md:col-span-1 md:row-span-2",
    },
    {
      id: 6,
      title: "Innocent Baby Dreams",
      category: "Infant Care",
      image:
        "https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=1000&auto=format&fit=crop",
      span: "md:col-span-2 md:row-span-1",
    },
  ];

  return (
    <section className="bg-neutral-950 text-white min-h-screen py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Bar: Back Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <Link
            to="/#slider"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 hover:text-white hover:border-neutral-700 transition-all cursor-pointer group">
            <FiArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        {/* Header & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 uppercase tracking-wider">
            <FiImage className="w-3.5 h-3.5 text-amber-400" />
            <span>Complete Visual Archive</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight uppercase leading-[1.05]">
            ALL ALBUMS & <br />
            <span className="text-neutral-600">STORY ARCHIVES.</span>
          </h1>

          <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
            Explore a curated collection of timeless moments frozen in time.
            From the quiet, intimate bonds of couple portraits to the purest
            giggles of infant milestones and joyous celebrations across Kandy
            and Sri Lanka.
          </p>
        </motion.div>

        {/* Modern Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] gap-6">
          {albums.map((album, index) => (
            <motion.div
              key={album.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900 group ${album.span}`}>
              {/* Image */}
              <img
                src={album.image}
                alt={album.title}
                className="w-full h-full object-cover grayscale-0 lg:grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Content Badge on Hover / Bottom */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="space-y-1">
                  <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-medium block">
                    {album.category}
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {album.title}
                  </h3>
                </div>

                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300">
                  <FiArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
