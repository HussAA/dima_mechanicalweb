
import Image from "next/image";
import Link from "next/link";

const description = [
  "Reaching the world in the field of industry, turning, and maintenance is not easy, but with patience and diligence we have reached what we aspire to, and for this reason we are trying to preserve the place we have reached, to always maintain our first ranking in our field, and thus we gain the trust of our customers.",
];
const title =[
    "Our Vision"
]
const AboutVision = () => {
  return (
    <div className="w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 flex flex-col md:flex-row items-center md:gap-5 gap-10 mx-auto">
      {/* Right Side */}
      <div className="relative w-full xl:w-5/12 md:w-1/2 order-2 md:order-1 justify-center flex">
        {/* Image */}
        <Image
          width={999}
          height={999}
          src="/vision.webp"
          alt="cnc Image"
          className="object-cover h-full min-w-[400px] rounded-xl shadow-lg shadow-gray-400"
          blurDataURL="data:..."
          automatically
          provided
          placeholder="blur"
        />
      </div>
      {/* Left Side */}
      <div className="sm:w-8/12 w-11/12 md:w-1/2 xl:w-7/12 order-1 md:order-2 ">
        {/* Title */}
        <div className="text-[#4F3527] text-2xl md:text-4xl font-semibold mb-5 pt-3">
            {title}
        </div>
        {/* Description */}
        <div className="font-medium text-[16px] mb-6 text-left text-[#4F3527]">
          {description}
        </div>
      </div>
    </div>
  );
};

export default AboutVision;
