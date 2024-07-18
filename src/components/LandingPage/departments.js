"use client";

import Marquee from "react-fast-marquee";
import { Departments } from "@/data/departmentCards";
import Image from "next/image";
const Description = {
  item1:
    "Precision-engineered components crafted with expertise and efficiency in our advanced Departments",
};

const DepartmentsLanding = () => {
  return (
    <div className="font-customFont mx-auto md:w-11/12 w-full">
      {/* Title */}
      <div className="text-[40px] font-semibold text-center text-[#4F3527]">
        Departments
      </div>
      {/* Description */}
      <div className="w-8/12 text-lg py-3 pb-10 mx-auto font-medium text-center text-[#4F3527]">
        {Description.item1}
      </div>
      {/* Cards */}
      <Marquee
        // play={false}
        speed={70}
        loop={0}
        gradient
        gradientColor="white"
        gradientWidth={35}
      >
        <div className="flex gap-16 ml-16 py-20">
          {Departments.concat(Departments).map((item, index) => (
            <div
              key={index}
              className="font-customFont min-h-[310px] w-[260px] bg-[#DDC7BB] rounded-lg shadow-lg shadow-gray-400 px-4 flex flex-col justify-center"
            >
              <div className="h-2/6 pt-3">
                <div className="relative min-w-20 min-h-20 w-1/3 h-1/3 bg-[#FBF5F1] rounded-lg flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={`${item.name} icon`}
                    layout="fill"
                    objectFit="none"
                    blurDataURL="data:..." automatically provided
                    placeholder="blur" 
                  />
                </div>
              </div>
              <div className="h-1/6 pt-3">
                <div className="text-lg font-bold text-[#2B1B12]">
                  {item.name}
                </div>
              </div>
              <div className="h-2/6 pt-3">
                <div className="text-base font-medium text-[#4F3527]">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default DepartmentsLanding;
