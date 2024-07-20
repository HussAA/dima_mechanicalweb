

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
      <div className="text-[30px] md:text-[40px] font-semibold text-center text-[#4F3527]">
        Departments
      </div>
      {/* Description */}
      <div className="w-8/12 md:text-lg py-3 pb-10 mx-auto font-medium text-center text-[#4F3527]">
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
        <div className="flex md:gap-10 md:ml-10 gap-5 ml-5 py-20">
          {Departments.concat(Departments).map((item, index) => (
            <div
              key={index}
              className="md:min-h-[310px] md:w-[260px] min-h-[240px] w-[220px] bg-[#DDC7BB] rounded-lg shadow-lg shadow-gray-400 px-4 flex flex-col justify-center"
            >
              <div className="h-2/6 md:pt-3">
                <div className="relative md:min-w-20 md:min-h-20 min-w-16 min-h-16 md:w-1/3 w-1/4 md:h-1/3 bg-[#FBF5F1] rounded-lg flex items-center justify-center">
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
              <div className="md:h-1/6 h-[10%] md:pt-3">
                <div className="md:text-lg font-bold text-[#2B1B12]">
                  {item.name}
                </div>
              </div>
              <div className="h-2/6 pt-3">
                <div className="md:text-base text-sm font-medium text-[#4F3527]">
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
