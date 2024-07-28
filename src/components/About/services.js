
import Image from "next/image";

const list = [
  "We have succeeded in providing many services since we established the entity Al-Orouba lathe for maintenance and with the passage of days we are developing our services to suit modern technology and the needs of the times and on top of that lathes or what is included under it and a large group of industrial equipment.",
];
const title =[
    "Services"
]
const AboutServices = () => {
  return (
    <div className="w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 flex flex-col md:flex-row items-center gap-10 mx-auto">
      {/* Right Side */}
      <div className="relative w-full md:w-1/2 xl:w-5/12 md:order-2 order-1 flex justify-center">
        {/* Image */}
        <Image
          width={400}
          height={200}
          src="/services.webp"
          alt="machinery Image"
          className="rounded-xl md:w-full sm:w-8/12 w-11/12 mx-auto xl:max-h-[400px] md:max-h-[350px] md:h-auto h-[280px] object-cover shadow-lg shadow-gray-400"
          blurDataURL="data:..."
          automatically
          provided
          placeholder="blur"
        />
      </div>
      {/* Left Side */}
      <div className="sm:w-8/12 w-11/12 md:w-1/2 xl:w-7/12 md:order-1 order-2">
        {/* Title */}

        {/* Description */}
        <div className="text-[#4F3527] relative text-2xl md:text-4xl font-semibold mb-5 pt-3">
        {title}
        <div className="absolute top-[50px] left-0 w-2/12 border-b-4 border-[#c0945b]" />
        </div>
        <div className="font-medium text-[16px] mb-6 text-left text-[#4F3527]">
          {list}
        </div>
      </div>
    </div>
  );
};

export default AboutServices;
