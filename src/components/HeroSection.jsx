import * as React from "react";

const HeroSection = () => {

  const redirectToExternalURL = () => {
    window.open("https://en.wikipedia.org/wiki/Amazon_rainforest", "_blank"); 
  };


  return (
    <div className="flex flex-col text-lg gap-7 space-y-4 mt-4 items-center lg:flex lg:flex-row lg:mt-20">
      <div className="left space-y-4 w-[50%] lg:w-full py-5">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl  tracking-wide lg:text-l">
          Welcome to the Heart of the Amazon Jungle!
        </h1>
        <p className="mt-10 text-lg  text-neutral-500 max-w-4xl">
          Explore the untouched beauty and vibrant life of the Amazon
          Rainforest. Whether you're here to embark on a virtual adventure,
          discover the rich biodiversity, or shop for eco-friendly treasures,
          you've arrived at the gateway to nature's wonders. Let the wild
          inspire you, and may your journey through the jungle be as thrilling
          as the stories it holds.
        </p>
        <button className="bg-green-900 hover:bg-green-500 text-white border-gray-500 rounded-lg p-3" onClick={redirectToExternalURL}>
          Know More
        </button>
      </div>
      <div className="right w-[50%] lg:w-full lg:px-5 lg:content-center m-auto gap-4">
        {/* <div className="green absolute -z-20 w-[30%] h-full bg-green-700 top-16 flex justify-center items-center"></div> */}

        <div className="imgRow flex flex-col sm:justify-center sm:items-center sm:flex-row gap-4">
          <div className="img flex gap-4 flex-col lg:justify-center lg:items-center">
            <div className="grid-elements w-52 object-cover">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD9LtbYzkt_b7Jbxrthk8KP-3w5JZOYv7q-g&s"
                alt=""
                className="rounded"
              />
            </div>

            <div className="grid-elements w-52 object-cover">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa43VCnOsZiB7vYuVBgKWjudunRRrf-Fl5IqwKK95ioW7ehB-tUfc7ihVgvNtrDvsOjEg&usqp=CAU"
                alt=""
                className="rounded"
              />
            </div>
          </div>
          <div className="img-2 flex flex-col gap-4 mt-4 sm:justify-center sm:items-center">
            <div className="grid-elements w-52 object-cover">
              <img
                src="https://files.worldwildlife.org/wwfcmsprod/images/Jaguar_GPN7474/hero_small/63qidi36cn_Responsible_Forestry_8.10.2012_Biodiversiry_Loss_HI_7474.jpg"
                alt=""
                className="rounded w-[208px] h-[138px]"
              />
            </div>

            <div className="grid-elements w-52 object-cover">
              <img
                src="https://media.istockphoto.com/id/495292220/photo/colorful-cute-toucan-tropical-bird-in-brazilian-amazon-blurred-background.jpg?s=612x612&w=0&k=20&c=UUgfaSISnRJOGQfmzsUQyWIo_RFWHe3JPBmO3K3E6LA="
                alt=""
                className="rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
