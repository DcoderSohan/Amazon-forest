import React, { useState, useEffect } from "react";
import galleryData from "./../utils/galleryData.json"; // Directly import the JSON file
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";

// Import plugins directly from 'lightgallery'
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Directly set the imported JSON data to the state
    setImages(galleryData);
  }, []);

  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <section id="gallery" className="h-full w-full">
      <div className="mt-[500px] sm:mt-96 lg:mt-[200px] mx-4">
        <h2 className="text-center text-2xl lg:text-4xl font-bold mb-8">
          Gallery
        </h2>
        <LightGallery
          onInit={onInit}
          speed={500}
          selector=".gallery-item" // Selector to target each gallery item
          plugins={[
            lgThumbnail,
            lgZoom,
            lgAutoplay,
            lgFullscreen,
            lgRotate,
            lgShare,
          ]}
          className="flex flex-wrap justify-center gap-4"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <a
                href={image.src}
                key={index}
                className="gallery-item flex" // Add class for the selector
                data-src={image.src} // Provide the data-src attribute
              >
                <img
                  className="w-full h-auto object-cover p-1 rounded-2xl transition-transform duration-200 hover:opacity-90 hover:scale-105"
                  alt={image.alt}
                  src={image.src}
                />
              </a>
            ))}
          </div>
        </LightGallery>
      </div>
    </section>
  );
};

export default Gallery;
