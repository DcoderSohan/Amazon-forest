import React from "react";

const About = () => {
  const redirectToExternalURL = () => {
    window.open("https://en.wikipedia.org/wiki/Amazon_rainforest", "_blank"); 
  };

  return (
    <div>
      <div className="about flex flex-col sm:justify-center sm:items-center sm:flex-row p-20 mt-8 space-x-5 bg-green-950 text-white rounded-md">
        <div className="left w-[40%]">
          <img
            src="https://img.freepik.com/premium-photo/lungs-like-forest-nature-dark-background_927844-474.jpg"
            alt=""
            className="rounded-lg"
          />
          <div className="main-name bg-green-950 p-6 rounded-lg -mt-10 relative z-10 w-fit m-auto">
          <div className="name text-white border-2 border-white p-4 text-center rounded-lg">
            Amazon Forest
          </div>
          </div>
        </div>
        <div className="right w-[60%] space-y-10">
          <h1 className="text-[40px]">About</h1>
          <hr/>
          <p>
            The Amazon Rainforest, often called the "lungs of the Earth," plays
            a vital role in global oxygen production and carbon dioxide
            absorption. Covering 5.5 million square kilometers, it is home to
            diverse ecosystems and species. Deforestation threatens this crucial
            natural resource, impacting climate regulation and biodiversity
            conservation worldwide.
          </p>
          <button
            className="bg-green-900 hover:bg-green-500 text-white border-gray-500 rounded-lg p-3"
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
