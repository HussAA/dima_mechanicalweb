
import { objectives } from "@/data/objectivesCards";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Description = {
  item1:
    "تصنيع مكونات مصممة بدقة مع الخبرة والكفاءة في قسمنا المتقدم",
};

const Objectives = () => {
  return (
    <div className="mx-auto lg:w-11/12 w-full">
      {/* Title */}
      <div className="text-[30px] md:text-[40px] font-semibold text-center text-[#4F3527]">
        Objectives
      </div>
      {/* Description */}
      <div dir="rtl" className="w-8/12 md:text-lg py-3 pb-10 mx-auto font-medium text-center text-[#4F3527]">
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
        <div className="flex md:gap-10 md:ml-10 gap-5 ml-5 py-20">
          {objectives.concat(objectives).map((item, index) => (
            <div
              key={index}
              className="relative md:h-[400px] md:w-[260px] h-[320px] w-[220px] bg-[#DDC7BB] rounded-lg shadow-lg shadow-gray-400 p-4 flex flex-col justify-center text-center"
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
              <div dir="rtl" className="font-semibold text-[#4F3527] md:text-base text-sm">{item}</div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Objectives;
