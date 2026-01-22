import React, { useState, useEffect, useRef } from "react";
import galleryData from "./../utils/galleryData.json";
import LightGallery from "lightgallery/react";

// LightGallery Styles & Plugins
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-rotate.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgRotate from "lightgallery/plugins/rotate";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    setImages(galleryData);
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (galleryRef.current) observer.observe(galleryRef.current);
    return () => galleryRef.current && observer.unobserve(galleryRef.current);
  }, []);

  /**
   * UNIQUE LAYOUT LOGIC
   * We define patterns that repeat every 6 items to ensure 
   * the grid always looks balanced but non-linear.
   */
  const getLayoutClass = (index) => {
    const patterns = [
      // Item 0: Big Featured (Top Left)
      "md:col-span-2 md:row-span-2 h-[400px] md:h-[620px]",
      // Item 1: Tall Vertical
      "md:col-span-1 md:row-span-2 h-[300px] md:h-[620px]",
      // Item 2: Small Square
      "md:col-span-1 md:row-span-1 h-[250px] md:h-[300px]",
      // Item 3: Wide Horizontal
      "md:col-span-2 md:row-span-1 h-[250px] md:h-[300px]",
      // Item 4: Tall Vertical
      "md:col-span-1 md:row-span-2 h-[300px] md:h-[620px]",
      // Item 5: Small Square
      "md:col-span-1 md:row-span-1 h-[250px] md:h-[300px]",
    ];
    return patterns[index % patterns.length];
  };

  return (
    <section id="gallery" ref={galleryRef} className="bg-slate-50 py-20 px-4">
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-green-900 mb-4">The Amazon Archive</h2>
          <p className="text-gray-600 max-w-xl mx-auto">A visual journey through the world's most vital ecosystem.</p>
        </div>

        <LightGallery
          speed={500}
          selector=".gallery-item"
          plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate]}
          elementClassNames="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {images.map((image, index) => (
            <a
              href={image.src}
              key={index}
              className={`gallery-item group relative overflow-hidden rounded-3xl shadow-sm transition-all duration-500 hover:shadow-2xl ${getLayoutClass(index)}`}
              data-src={image.src}
            >
              {/* Image Container */}
              <div className="w-full h-full relative overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  alt={image.alt}
                  src={image.src}
                  loading="lazy"
                />
                
                {/* Modern Glassmorphism Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <p className="text-white/70 text-xs uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    Amazon Expedition
                  </p>
                  <h3 className="text-white text-xl md:text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {image.alt}
                  </h3>
                  
                  {/* Plus Icon Button */}
                  <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30 transform scale-0 group-hover:scale-100 transition-transform duration-500">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </LightGallery>
      </div>

      <style>{`
        /* Custom Masonry Helper */
        @media (min-width: 768px) {
          .lg-react-element {
            grid-auto-flow: dense; /* This fills in the gaps automatically! */
          }
        }
        
        .lg-backdrop { background-color: rgba(0, 0, 0, 0.98) !important; }
        .lg-toolbar, .lg-prev, .lg-next { background: rgba(255,255,255,0.1) !important; backdrop-filter: blur(10px); }
      `}</style>
    </section>
  );
};

export default Gallery;