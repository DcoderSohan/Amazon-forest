import React from "react";

const About = () => {
  const redirectToExternalURL = () => {
    window.open("https://en.wikipedia.org/wiki/Amazon_rainforest", "_blank");
  };

  return (
    <div className="p-4" id="about">
      <div className="about flex flex-col sm:flex-row sm:justify-center sm:items-center p-4 mt-8 space-y-6 sm:space-y-0 sm:space-x-5 bg-green-950 text-white rounded-md">
        {/* Left Section */}
        <div className="left w-full sm:w-1/2 flex justify-center sm:justify-end">
          <div className="relative">
            <img
              src="https://img.freepik.com/premium-photo/lungs-like-forest-nature-dark-background_927844-474.jpg"
              alt="Amazon Forest"
              className="rounded-lg w-full sm:w-[300px] md:w-[400px] lg:w-[500px] object-cover"
            />
            <div className="main-name bg-green-950 p-4 rounded-lg -mt-10 relative z-10 w-fit m-auto">
              <div className="name text-white border-2 border-white p-2 text-center text-md rounded-lg">
                Amazon Forest
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="right w-full sm:w-1/2 space-y-4 p-4">
          <h1 className="text-3xl sm:text-4xl font-bold">About</h1>
          <hr className="border-white" />
          <p className="text-base sm:text-lg">
            The Amazon Rainforest, often called the "lungs of the Earth," plays
            a vital role in global oxygen production and carbon dioxide
            absorption. Covering 5.5 million square kilometers, it is home to
            diverse ecosystems and species. Deforestation threatens this crucial
            natural resource, impacting climate regulation and biodiversity
            conservation worldwide.
          </p>
          <button
            className="bg-green-900 hover:bg-green-500 text-white border border-gray-500 rounded-lg p-3"
            onClick={redirectToExternalURL}
          >
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
