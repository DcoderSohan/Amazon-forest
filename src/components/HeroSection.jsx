import * as React from "react";

const HeroSection = () => {
  const redirectToExternalURL = () => {
    window.open("https://en.wikipedia.org/wiki/Amazon_rainforest", "_blank");
  };

  return (
    <div id="home" className="flex flex-col text-lg gap-7 space-y-4 mt-4 items-center lg:flex-row lg:mt-20">
      <div className="left w-full lg:w-1/2 py-5 space-y-4">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-wide">
          Welcome to the Heart of the Amazon Jungle!
        </h1>
        <p className="mt-10 text-lg text-neutral-500 max-w-4xl">
          Explore the untouched beauty and vibrant life of the Amazon
          Rainforest. Whether you're here to embark on a virtual adventure,
          discover the rich biodiversity, or shop for eco-friendly treasures,
          you've arrived at the gateway to nature's wonders. Let the wild
          inspire you, and may your journey through the jungle be as thrilling
          as the stories it holds.
        </p>
        <button
          className="bg-green-900 hover:bg-green-500 text-white border-gray-500 rounded-lg p-3"
          onClick={redirectToExternalURL}
        >
          Know More
        </button>
      </div>
      <div className="right w-full lg:w-1/2 lg:px-5 lg:content-center m-auto">
        <div className="imgRow grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-2">
          <div className="grid-elements">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD9LtbYzkt_b7Jbxrthk8KP-3w5JZOYv7q-g&s"
              alt="Amazon River"
              className="rounded w-full h-auto object-cover"
            />
          </div>
          <div className="grid-elements">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa43VCnOsZiB7vYuVBgKWjudunRRrf-Fl5IqwKK95ioW7ehB-tUfc7ihVgvNtrDvsOjEg&usqp=CAU"
              alt="Amazon Rainforest"
              className="rounded w-full h-auto object-cover"
            />
          </div>
          <div className="grid-elements">
            <img
              src="https://files.worldwildlife.org/wwfcmsprod/images/Jaguar_GPN7474/hero_small/63qidi36cn_Responsible_Forestry_8.10.2012_Biodiversiry_Loss_HI_7474.jpg"
              alt="Jaguar in the Amazon"
              className="rounded w-full h-auto object-cover"
            />
          </div>
          <div className="grid-elements">
            <img
              src="https://media.istockphoto.com/id/495292220/photo/colorful-cute-toucan-tropical-bird-in-brazilian-amazon-blurred-background.jpg?s=612x612&w=0&k=20&c=UUgfaSISnRJOGQfmzsUQyWIo_RFWHe3JPBmO3K3E6LA="
              alt="Toucan in the Amazon"
              className="rounded w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
