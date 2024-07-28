
import Image from "next/image";

const list = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
];
const title =[
    "Welding Department"
]
const WeldingDepartment = () => {
  return (
    <div className="w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 flex flex-col md:flex-row items-center md:gap-5 gap-10 mx-auto">
      {/* Right Side */}
      <div className="relative w-full md:w-1/2 order-1 justify-center flex">
        {/* Image */}
        <Image
          width={999}
          height={999}
          src="/welding.webp"
          alt="welding Image"
          className=" rounded-xl md:w-full sm:w-8/12 w-11/12 mx-auto xl:max-h-[400px] md:max-h-[350px] md:h-auto h-[300px] object-cover shadow-md shadow-gray-400"
          blurDataURL="data:..."
          automatically
          provided
          placeholder="blur"
        />
      </div>
      {/* Left Side */}
      <div className="sm:w-8/12 w-11/12 md:w-1/2 order-2">
        {/* Title */}
        <div className="text-[#8f705d] capitalize text-2xl md:text-2xl font-medium relative">
          {title}
          <div className="absolute top-[31px] left-0 w-1/4 border-b-4 border-cyan-700" />
        </div>
        {/* Description */}
        <div className="text-[#4F3527] text-2xl md:text-4xl font-semibold mb-5 pt-3">
          See what we can do for you
        </div>
        <div className="font-medium text-[16px] mb-6 text-left text-[#4F3527]">
          {list}
        </div>
      </div>
    </div>
  );
};

export default WeldingDepartment;
