"use client";
import { objectives } from "@/data/objectivesCards";
import Marquee from "react-fast-marquee";

const Description = {
  item1:
    "Crafting precision-engineered components with expertise and efficiency in our advanced department",
};

const Objectives = () => {
  return (
    <div className="font-customFont mx-auto w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12">
      {/* Title */}
      <div className="text-[40px] font-semibold text-center text-[#4F3527]">
        Objectives
      </div>
      {/* Description */}
      <div className="w-8/12 text-lg py-3 pb-10 mx-auto font-medium text-center text-[#4F3527]">
        {Description.item1}
      </div>
      {/* Cards */}
      <Marquee direction="right" speed={60} loop={0} gradient gradientColor="white" gradientWidth={35}>
        <div className="flex gap-16 ml-16">
          {objectives.concat(objectives).map((item, index) => (
            <div
              key={index}
              className="relative font-customFont h-[400px] w-[260px] bg-[#DDC7BB] rounded-lg shadow-lg shadow-gray-400 p-4 flex flex-col justify-center text-center"
            >
              <div className="absolute top-5 right-5">
                <img src='/quotation.svg' alt='quotes icon' className="" />
              </div>
              <div className="font-semibold text-[#4F3527]">
                {item}
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Objectives;
