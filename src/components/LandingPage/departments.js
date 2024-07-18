"use client";
import Marquee from "react-fast-marquee";
import { Departments } from "@/data/departmentCards";
const Description = {
  item1:
    "Precision-engineered components crafted with expertise and efficiency in our advanced Departments",
};

const DepartmentsLanding = () => {
  return (
    <div className="font-customFont mx-auto w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12">
      {/* Title */}
      <div className="text-[40px] font-semibold text-center text-[#4F3527]">
        Departments
      </div>
      {/* Description */}
      <div className="w-8/12 text-lg py-3 pb-10 mx-auto font-medium text-center text-[#4F3527]">
        {Description.item1}
      </div>
      {/* Cards */}
      <Marquee speed={60} loop={0} gradient gradientColor="white" gradientWidth={35}>
        <div className="flex gap-16 ml-16">
          {Departments.concat(Departments).map((item, index) => (
            <div
              key={index}
              className="font-customFont h-[250px] w-[260px] bg-[#DDC7BB] rounded-lg shadow-lg shadow-gray-400 p-4 flex flex-col justify-center"
            >
              <div className="h-20 w-20 bg-[#FBF5F1] rounded-lg flex items-center justify-center">
                <img src={item.icon} alt={`${item.name} icon`} className="" />
              </div>
              <div className="text-lg font-bold py-3 text-[#2B1B12]">
                {item.name}
              </div>
              <div className="text-base font-medium text-[#4F3527]">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default DepartmentsLanding;
