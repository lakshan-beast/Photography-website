// import React from "react";
// import Footer from "./components/Footer";
// import Hero from "./components/Hero";

// export default function App() {
//   return (
//     <div className="min-h-screen bg-dark text-white selection:bg-white selection:text-black">
//       <main>
//         <Hero />
//       </main>
//       <Footer />
//     </div>
//   );
// }

import React from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

import About from "./components/AboutEquipment";
import Services from "./components/ServicesPackages";

export default function App() {
  return (
    <div className="bg-dark-bg min-h-screen text-white select-none">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Portfolio Section  */}
      {/* <main className="w-full">
        <div className="h-[50vh] flex items-center justify-center border-b border-neutral-900 font-mono text-xs text-neutral-600">
          [PORTFOLIO SECTION WILL BE PLACED HERE]
        </div>
      </main> */}

      <Services />
      <About />

      {/* 3. Footer Section */}
      <Footer />
    </div>
  );
}
