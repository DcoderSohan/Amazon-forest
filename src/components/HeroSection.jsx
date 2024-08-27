import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const HeroSection = () => {
  return (
    <div className="flex items-center mt-6 lg:mt-20">
      <div className="left space-y-4 w-[50%]">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl  tracking-wide">
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
        <button className="bg-green-800 border-gray-500 rounded-md p-3">
          Know More...
        </button>
      </div>
      <div className="right w-[50%]">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
              <div className="grid-elements w-[300px]">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD9LtbYzkt_b7Jbxrthk8KP-3w5JZOYv7q-g&s"
                  alt=""
                />
              </div>
            </Grid>
            <Grid item xs={6} md={4}>
              <div className="grid-elements w-[250px]">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa43VCnOsZiB7vYuVBgKWjudunRRrf-Fl5IqwKK95ioW7ehB-tUfc7ihVgvNtrDvsOjEg&usqp=CAU"
                  alt=""
                />
              </div>
            </Grid>
            <Grid item xs={6} md={4}>
              <div className="grid-elements w-[250px]">
                <img
                  src="https://files.worldwildlife.org/wwfcmsprod/images/Jaguar_GPN7474/hero_small/63qidi36cn_Responsible_Forestry_8.10.2012_Biodiversiry_Loss_HI_7474.jpg"
                  alt=""
                />
              </div>
            </Grid>
            <Grid item xs={6} md={8}>
              <div className="grid-elements w-[300px]">
                <img
                  src="https://media.istockphoto.com/id/495292220/photo/colorful-cute-toucan-tropical-bird-in-brazilian-amazon-blurred-background.jpg?s=612x612&w=0&k=20&c=UUgfaSISnRJOGQfmzsUQyWIo_RFWHe3JPBmO3K3E6LA="
                  alt=""
                />
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default HeroSection;
