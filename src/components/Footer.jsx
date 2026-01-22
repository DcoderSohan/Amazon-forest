import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaHeart } from "react-icons/fa";
import logo from "./../assets/images/logo.png";

const Footer = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Animals", href: "#animals" },
    { label: "Birds", href: "#birds" },
    { label: "Gallery", href: "#gallery" },
  ];

  return (
    <footer className="relative w-full pt-20 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden rounded-t-[3rem]">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/5">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 group cursor-pointer w-fit">
              <div className="relative overflow-hidden w-12 h-12 bg-white rounded-2xl p-2.5 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] group-hover:-rotate-12">
                <img
                  className="w-full h-full object-contain"
                  src={logo}
                  alt="Logo"
                />
              </div>
              <span className="text-3xl font-black bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent tracking-tighter">
                Amazon
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Documenting the pulse of the rainforest through photography and conservation awareness.
            </p>
          </div>

          {/* Animated Navigation Menu */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-xs tracking-[0.3em] uppercase opacity-50">
              Navigation
            </h4>
            <ul className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <li key={index} className="overflow-hidden">
                  <a 
                    href={item.href} 
                    className="group relative flex items-center text-gray-400 hover:text-white transition-all duration-300 transform hover:translate-x-2"
                  >
                    {/* The "Bullet" animation */}
                    <span className="w-0 h-[1px] bg-green-500 transition-all duration-300 group-hover:w-4 group-hover:mr-2" />
                    
                    <span className="text-sm font-medium tracking-wide">
                      {item.label}
                    </span>

                    {/* Subtle underline for modern look */}
                    <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-green-500/30 transition-all duration-500 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Community */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-xs tracking-[0.3em] uppercase opacity-50">
              Community
            </h4>
            <div className="flex gap-4">
              {[FaTwitter, FaGithub, FaLinkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:bg-green-500 hover:text-white hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(34,197,94,0.2)] transition-all duration-500"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <div className="pt-2">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Join 2,400+ Explorers</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <p className="text-xs text-gray-400 font-medium">
                  &copy; {new Date().getFullYear()} <span className="text-white font-bold ml-1">Sohan</span>
                </p>
            </div>
            <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] text-green-500 font-bold uppercase tracking-widest">Active System</span>
            </div>
          </div>

          <p className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold">
            Made with <FaHeart className="text-red-500 animate-pulse" /> in the Jungle
          </p>
        </div>
      </div>

      <style jsx>{`
        footer {
          background-color: #050a05; /* Darker Forest Black */
        }
      `}</style>
    </footer>
  );
};

export default Footer;