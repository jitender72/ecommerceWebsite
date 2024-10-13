import React from "react";
import { assets } from "../../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <div className=" flex flex-col  sm:flex-row border broder-gray-400 p-8">
      {/* left side */}
      <div className="w-full sm:w-1/2 py-10 sm:py-0 flex flex-col items-center justify-center">
        <div className="flex  items-center gap-2 pt-8 w-full">
          <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          <p className="font-medium text-sm md:text-base">Our Bestsellers</p>
        </div>
        <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed">
          Latest Arrivals
        </h1>
        <div className="flex items-center gap-2  w-full">
          <p>Shop Now</p>
          <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
        </div>
      </div>
      {/* right side */}
      <img className="w-full sm:1/2 rounded-lg " src={assets.hero_img} alt="" />
    </div>
  );
};

export default Hero;
