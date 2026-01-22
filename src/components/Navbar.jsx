import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "./../assets/images/logo.png";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Animals", href: "#animals" },
    { label: "Birds", href: "#birds" },
    { label: "Gallery", href: "#gallery" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-500 px-4 md:px-10 py-4">
      <nav
        className={`mx-auto max-w-7xl transition-all duration-500 px-6 py-3 rounded-2xl md:rounded-[2rem] flex items-center justify-between ${
          isScrolled
            ? "bg-white/80 backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.05)] border border-white/20 translate-y-2"
            : "bg-transparent border-transparent"
        }`}
      >
        {/* Logo Section */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="relative overflow-hidden w-8 h-8 md:w-10 md:h-10 bg-white rounded-2xl p-1.5 md:p-2">
            <img
              className="w-full h-full object-contain transition-transform duration-500 group-hover:rotate-[360deg]"
              src={logo}
              alt="Logo"
            />
          </div>
          <span className="text-xl md:text-2xl font-black bg-gradient-to-r from-green-900 to-green-600 bg-clip-text text-transparent">
            Amazon
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8 xl:gap-12">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="relative text-sm font-bold text-gray-700 hover:text-green-600 transition-colors duration-300 group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-green-500 rounded-full transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button (Desktop) */}
        <div className="hidden lg:block">
          <button className="bg-green-900 text-white text-xs font-bold px-6 py-2.5 rounded-full hover:bg-green-700 hover:shadow-lg hover:shadow-green-900/20 transition-all active:scale-95">
            Donate Now
          </button>
        </div>

        {/* Mobile/Tablet Menu Button */}
        <button
          onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
          className="lg:hidden p-2 rounded-xl bg-gray-50 text-gray-900 hover:bg-green-50 hover:text-green-600 transition-all"
        >
          {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile/Tablet Menu Drawer */}
      <div
        className={`fixed inset-0 top-0 left-0 w-full h-screen bg-white z-[-1] transition-transform duration-500 ease-in-out lg:hidden ${
          mobileDrawerOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setMobileDrawerOpen(false)}
              className="text-3xl font-black text-gray-900 hover:text-green-600 transition-all transform hover:scale-110"
            >
              {item.label}
            </a>
          ))}
          <button className="mt-8 bg-green-600 text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-green-100">
            Get Involved
          </button>
        </div>
        
        {/* Subtle background decoration for mobile menu */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-100 font-black text-6xl -z-10 opacity-40">
          AMAZON
        </div>
      </div>
    </header>
  );
};

export default Navbar;