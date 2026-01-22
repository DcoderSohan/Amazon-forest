import * as React from "react";

const HeroSection = () => {
  const redirectToExternalURL = () => {
    window.open("https://en.wikipedia.org/wiki/Amazon_rainforest", "_blank");
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] md:min-h-screen flex items-center bg-white overflow-hidden pt-16 sm:pt-20 md:pt-16 lg:pt-24"
    >
      {/* Decorative Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-green-50/50 -z-10 translate-x-10 skew-x-[-5deg]" />
      
      <div className="max-w-7xl mx-auto px-6 w-full py-12 sm:py-16 md:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* LEFT CONTENT: Centered Typography */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left space-y-8 animate-fadeIn">
            <div className="space-y-4">
              <span className="text-green-600 font-bold tracking-[0.3em] uppercase text-xs">
                Est. 2026 • Wilderness Archive
              </span>
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-black text-gray-900 leading-[0.9] tracking-tighter">
                PURE <br />
                <span className="italic font-light text-green-800">AMAZON.</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-lg mx-auto lg:mx-0 font-light">
              A curated visual exploration into the world's most vital ecosystem. 
              Experience the pulse of the jungle through high-fidelity storytelling.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
              <button
                onClick={redirectToExternalURL}
                className="group relative px-10 py-4 bg-gray-900 text-white rounded-full font-bold overflow-hidden transition-all hover:pr-14 active:scale-95 shadow-2xl"
              >
                <span className="relative z-10">Start Expedition</span>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  →
                </span>
              </button>
              
              <button className="group flex items-center gap-3 font-bold text-gray-400 hover:text-green-700 transition-colors">
                <span className="w-10 h-[1px] bg-gray-200 group-hover:w-16 group-hover:bg-green-700 transition-all duration-500" />
                Explore Species
              </button>
            </div>
          </div>

          {/* RIGHT CONTENT: Floating Stack Layout */}
          <div className="w-full lg:w-1/2 flex items-center justify-center relative">
            <div className="relative w-full max-w-[350px] md:max-w-[400px] aspect-[4/5]">
              
              {/* Main Background Image */}
              <div className="absolute inset-0 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl z-10 rotate-[-2deg] transition-transform duration-700 hover:rotate-0">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD9LtbYzkt_b7Jbxrthk8KP-3w5JZOYv7q-g&s"
                  className="w-full h-full object-cover"
                  alt="Amazon Landscape"
                />
              </div>

              {/* Top Floating Image */}
              <div className="absolute -top-8 -right-6 w-28 h-28 md:w-40 md:h-40 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border-4 md:border-8 border-white shadow-xl z-20 hidden sm:block animate-float">
                <img
                  src="https://media.istockphoto.com/id/495292220/photo/colorful-cute-toucan-tropical-bird-in-brazilian-amazon-blurred-background.jpg?s=612x612&w=0&k=20&c=UUgfaSISnRJOGQfmzsUQyWIo_RFWHe3JPBmO3K3E6LA="
                  className="w-full h-full object-cover"
                  alt="Toucan"
                />
              </div>

              {/* Bottom Info Tag */}
              <div className="absolute -bottom-4 -left-4 bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl z-30 border border-gray-50">
                <p className="text-xl md:text-2xl font-black text-green-900">400B+</p>
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-400 font-bold">Individual Trees</p>
              </div>

            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;