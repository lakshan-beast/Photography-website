import React, { useRef } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiArrowRight,
  FiMapPin,
  FiCamera,
} from "react-icons/fi";

export default function ImageSlider() {
  const sliderRef = useRef(null);

  // const sliderImage = [
  //   {
  //     id: 1,
  //     title: "Romantic Sunset Session",
  //     category: "Couple Shoot",
  //     location: "Hantana, Kandy",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
  //   },
  //   {
  //     id: 2,
  //     title: "1st Birthday Cake Smash",
  //     category: "Birthday Shoot",
  //     location: "Kandy",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=800",
  //   },
  //   {
  //     id: 3,
  //     title: "Gentle Newborn Moments",
  //     category: "Baby Session",
  //     location: "Peradeniya",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=800",
  //   },
  //   {
  //     id: 4,
  //     title: "Intimate Outdoor Portrait",
  //     category: "Couple Shoot",
  //     location: "Ambuluwawa",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800",
  //   },
  //   {
  //     id: 5,
  //     title: "Little Explorer's Day",
  //     category: "Baby Session",
  //     location: "Kandy Lake Round",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800",
  //   },
  //   {
  //     id: 6,
  //     title: "Sweet Sixteen Party",
  //     category: "Birthday Shoot",
  //     location: "Kundasale",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800",
  //   },
  //   {
  //     id: 7,
  //     title: "Golden Hour Embrace",
  //     category: "Couple Shoot",
  //     location: "Digana",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=800",
  //   },
  //   {
  //     id: 8,
  //     title: "First Steps Celebration",
  //     category: "Baby Session",
  //     location: "Katugastota",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1544126592-807ade215a0c?auto=format&fit=crop&q=80&w=800",
  //   },
  //   {
  //     id: 9,
  //     title: "Wilderness Couple Tale",
  //     category: "Couple Shoot",
  //     location: "Knuckles Range",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=800",
  //   },
  //   {
  //     id: 10,
  //     title: "Milestone Birthday Joy",
  //     category: "Birthday Shoot",
  //     location: "Kandy",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800",
  //   },
  // ];

  // const sliderImage = [
  //   {
  //     id: 1,
  //     title: "Romantic Sunset Session",
  //     category: "Couple Shoot",
  //     location: "Hantana, Kandy",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&q=80&w=800",
  //   },
  //   {
  //     id: 2,
  //     title: "1st Birthday Cake Smash",
  //     category: "Birthday Shoot",
  //     location: "Kandy",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&q=80&w=800",
  //   },
  //   {
  //     id: 3,
  //     title: "Gentle Newborn Moments",
  //     category: "Baby Session",
  //     location: "Peradeniya",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1546015720-b8b30df5857f?auto=format&fit=crop&q=80&w=800",
  //   },
  //   {
  //     id: 4,
  //     title: "Intimate Outdoor Portrait",
  //     category: "Couple Shoot",
  //     location: "Ambuluwawa",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
  //   },
  //   {
  //     id: 5,
  //     title: "Little Explorer's Day",
  //     category: "Baby Session",
  //     location: "Kandy Lake Round",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800",
  //   },
  //   {
  //     id: 6,
  //     title: "Sweet Sixteen Party",
  //     category: "Birthday Shoot",
  //     location: "Kundasale",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=800",
  //   },
  //   {
  //     id: 7,
  //     title: "Golden Hour Embrace",
  //     category: "Couple Shoot",
  //     location: "Digana",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=800",
  //   },
  //   {
  //     id: 8,
  //     title: "First Steps Celebration",
  //     category: "Baby Session",
  //     location: "Katugastota",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800",
  //   },
  //   {
  //     id: 9,
  //     title: "Wilderness Couple Tale",
  //     category: "Couple Shoot",
  //     location: "Knuckles Range",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=800",
  //   },
  //   {
  //     id: 10,
  //     title: "Milestone Birthday Joy",
  //     category: "Birthday Shoot",
  //     location: "Kandy",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=800",
  //   },
  // ];

  const sliderImage = [
  {
    id: 1,
    title: "Romantic Sunset Session",
    category: "Couple Shoot",
    location: "Hantana, Kandy",
    imageUrl:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "1st Birthday Cake Smash",
    category: "Birthday Shoot",
    location: "Kandy",
    imageUrl:
      "https://images.unsplash.com/photo-1566140967404-b8b3932483f5?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Gentle Newborn Moments",
    category: "Baby Session",
    location: "Peradeniya",
    imageUrl:
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Intimate Outdoor Portrait",
    category: "Couple Shoot",
    location: "Ambuluwawa",
    imageUrl:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    title: "Little Explorer's Day",
    category: "Baby Session",
    location: "Kandy Lake Round",
    imageUrl:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    title: "Sweet Sixteen Party",
    category: "Birthday Shoot",
    location: "Kundasale",
    imageUrl:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 7,
    title: "Golden Hour Embrace",
    category: "Couple Shoot",
    location: "Digana",
    imageUrl:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 8,
    title: "First Steps Celebration",
    category: "Baby Session",
    location: "Katugastota",
    imageUrl:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 9,
    title: "Wilderness Couple Tale",
    category: "Couple Shoot",
    location: "Knuckles Range",
    imageUrl:
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 10,
    title: "Milestone Birthday Joy",
    category: "Birthday Shoot",
    location: "Kandy",
    imageUrl:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=800",
  },
];

  // manual scroll navigation functions
  const scroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollAmount = clientWidth * 0.75;

      sliderRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="slider"
      className="text-white bg-neutral-950 py-16 px-4 md:px-12 border-t border-b border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* slider section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 px-2">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 font-body tracking-widest uppercase">
              <FiCamera className="w-3.5 h-3.5 text-amber-400" />
              <span>Recent Highlights</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Captured Moments & Stories
            </h2>
          </div>

          {/* navigation controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 transition-all text-neutral-300 hover:text-white"
              aria-label="Previous Slide">
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700 transition-all text-neutral-300 hover:text-white"
              aria-label="Next Slide">
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* horizontal slider container */}
        <div
          ref={sliderRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none py-4 px-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {sliderImage.map((img) => (
            <div
              key={img.id}
              className="snap-start shrink-0 w-[280px] sm:w-[320px] md:w-[380px] h-[440px] relative rounded-3xl overflow-hidden group border border-neutral-800/80 bg-neutral-900/50 transition-transform duration-300 hover:-translate-y-1.5 select-none"
              onContextMenu={(e) => e.preventDefault()}>
              <img
                src={img.imageUrl}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                loading="lazy"
              />

              {/* dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-heading uppercase tracking-widest text-amber-300 border border-white/10">
                  {img.category}
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                  {img.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                  <FiMapPin className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{img.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* bottom cta link */}
        <div className="flex justify-center pt-4">
          <a
            href="#albums"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-neutral-900 border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-800 text-sm font-semibold tracking-wider uppercase transition-all group">
            <span>Explore All Albums ( 20+ Shoots )</span>
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
