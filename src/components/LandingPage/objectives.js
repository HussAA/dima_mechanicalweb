
import { objectives } from "@/data/objectivesCards";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Description = {
  item1:
    "Crafting precision-engineered components with expertise and efficiency in our advanced department",
};

const Objectives = () => {
  return (
    <div className="font-customFont mx-auto lg:w-11/12 w-full">
      {/* Title */}
      <div className="text-[30px] md:text-[40px] font-semibold text-center text-[#4F3527]">
        Objectives
      </div>
      {/* Description */}
      <div className="w-8/12 md:text-lg py-3 pb-10 mx-auto font-medium text-center text-[#4F3527]">
        {Description.item1}
      </div>
      {/* Cards */}
      <Marquee
        direction="right"
        speed={60}
        loop={0}
        gradient
        gradientColor="white"
        gradientWidth={35}
      >
        <div className="flex gap-16 ml-16 py-20">
          {objectives.concat(objectives).map((item, index) => (
            <div
              key={index}
              className="relative font-customFont h-[400px] w-[260px] bg-[#DDC7BB] rounded-lg shadow-lg shadow-gray-400 p-4 flex flex-col justify-center text-center"
            >
              <div className="absolute top-5 right-5">
                <Image
                  src="/quotation.svg"
                  alt="quotes icon"
                  width={30}
                  height={30}
                  blurDataURL="data:..." automatically provided
                  placeholder="blur" 
                  
                />
              </div>
              <div className="font-semibold text-[#4F3527]">{item}</div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Objectives;
