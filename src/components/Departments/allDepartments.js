
import Image from "next/image";
import Link from "next/link";

const list = [
  "CNC Department",
  "Conventional machinery",
  "electrical Department ",
  "mold & die work department",
  "sheet & metal work department",
  "welding department",
  "gear box maintenance",
];

const href = [
  "cnc",
  "conventional",
  "electrical",
  "mold",
  "sheet",
  "welding",
  "gears",
]
const AllDepartments = () => {
  return (
    <div className="w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 flex flex-col md:flex-row items-center gap-10 mx-auto">
      {/* Left Side */}
      <div className="relative w-full md:w-1/2 order-2 md:order-1">
        {/* Image */}
        <Image
          width={999}
          height={999}
          src="/worker.jpg"
          alt="stat Image"
          className="rounded-xl md:w-full sm:w-8/12 w-11/12 mx-auto xl:max-h-[400px] md:max-h-[350px] md:h-auto h-[280px] object-cover"
          blurDataURL="data:..."
          automatically
          provided
          placeholder="blur"
        />
        <div className="absolute top-1/2 xs:right-[30%] sm:right-[27%] md:right-[17%] 2xl:right-[37%] right-[21%] m-5 flex items-center 2xl:w-8/12 md:w-10/12 sm:w-7/12 xs:w-8/12 w-9/12 h-[230px] rounded-xl text-gray-800 bg-[#f5f5f5] bg-opacity-80 backdrop-blur-md shadow-md shadow-gray-400 text-lg">
          <div className="p-5">
            <div className="sm:pb-10 pb-6 text-base sm:text-lg font-medium">
              We&apos;re here to assist you. If you have any questions or need
              support, please contact us.
            </div>
            <Link
              className="p-3 px-4 text-gray-900 font-semibold bg-[#d6d1cb] hover:shadow-md shadow-md rounded-md hover:bg-[#ebe2d7] duration-150"
              href="#contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="sm:w-8/12 w-11/12 md:w-1/2 order-1 md:order-2">
        {/* Title */}
        <div className="text-[#4F3527] capitalize text-3xl md:text-4xl font-bold mb-5">
          our departments
        </div>
        {/* Description */}
        <div className="text-[#4F3527] capitalize text-lg md:text-xl font-semibold mb-5 pt-10">
          Explore the specialized capabilities of our Departments:
        </div>
        <div className="font-medium text-[16px] mb-6 text-left text-[#4F3527]">
          <ol className="list-decimal list-inside">
            {list.length &&
              list.map((item, index) => <li key={index}>
                <Link href={`#${href[index]}`}>{item}</Link>
                </li>)}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AllDepartments;
