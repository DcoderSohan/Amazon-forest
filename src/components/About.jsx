import React from "react";

const About = () => {
  const redirectToExternalURL = () => {
    window.open("https://en.wikipedia.org/wiki/Amazon_rainforest", "_blank");
  };

  return (
    <section className="relative py-20 px-6 overflow-hidden bg-white" id="about">
      {/* Background Decorative Text - Very faint for modern look */}
      <div className="absolute top-10 left-10 text-[15vw] font-black text-gray-50 opacity-[0.03] pointer-events-none select-none">
        ECOSYSTEM
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Section: Layered Image Gallery Look */}
          <div className="relative w-full lg:w-1/2">
            {/* Main Image */}
            <div className="relative z-10 overflow-hidden rounded-[2.5rem] shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
              <img
                src="https://img.freepik.com/premium-photo/lungs-like-forest-nature-dark-background_927844-474.jpg"
                alt="Amazon Forest Lungs"
                className="w-full h-[400px] md:h-[550px] object-cover"
              />
              {/* Glassmorphism Badge Over Image */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/20 backdrop-blur-xl border border-white/30 p-6 rounded-3xl">
                <p className="text-white text-sm font-medium leading-tight">
                  "The Amazon is not just a forest; it is the heartbeat of our planet."
                </p>
              </div>
            </div>

            {/* Decorative Back-frame (The Modern Edge) */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-green-100 rounded-[2.5rem] -z-0 hidden md:block" />
            
            {/* Floating Stats Badge */}
            <div className="absolute -bottom-10 -right-6 md:right-10 z-20 bg-green-600 text-white p-8 rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <span className="block text-3xl font-bold">5.5M</span>
              <span className="text-xs uppercase tracking-widest opacity-80">Square Kilometers</span>
            </div>
          </div>

          {/* Right Section: Clean Typography */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-3">
              <span className="w-12 h-[2px] bg-green-600"></span>
              <span className="text-green-600 font-bold uppercase tracking-[0.3em] text-sm">
                Our Mission
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Protecting the <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400">Lungs of the Earth</span>
            </h2>

            <p className="text-gray-600 text-lg md:text-lg leading-relaxed font-light">
              The Amazon Rainforest plays a vital role in global oxygen production and carbon dioxide absorption. It is home to diverse ecosystems and species that exist nowhere else on Earth.
            </p>

            <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-green-500 italic text-gray-700 text-sm">
              "Deforestation threatens this crucial natural resource, impacting climate regulation and biodiversity conservation worldwide."
            </div>

            <button
              onClick={redirectToExternalURL}
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-green-700"
            >
              Discover the Impact
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;