import Image from "next/image";

const list = [
  "Work to expand the circle of products to meet the needs of the labor market",
  "Attracting the largest number of trained cadres, especially the maintenance team",
  "Permanent development of our services and methods of work",
  "Work on the geographical expansion of our headquarters in all cities of the Kingdom of Saudi Arabia",
  "Work on me. Our work will be distinct and distinct from others",
  "Work to manufacture all spare parts of all shapes and types",
];

const AboutObjectives = () => {
  return (
    <div className="w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 flex flex-col md:flex-row items-center gap-10 mx-auto">
      {/* Left Side */}
      <div className="relative w-full md:w-1/2 justify-center">
        {/* Gray background div */}
        <div className="hidden sm:block md:-top-[35%] 2xl:bottom-[8%] 2xl:-left-[1%] md:right-[1%] md:w-[60%] h-[150%] sm:right-[15%] sm:-bottom-[18%] sm:w-5/12 bg-[#fdddd3] absolute rounded-xl" />

        {/* Image */}
        <Image
          width={999}
          height={999}
          src="/objective.webp"
          alt="stat Image"
          className="rounded-xl md:w-full sm:w-8/12 w-11/12 mx-auto xl:max-h-[400px] md:max-h-[350px] md:h-auto h-[280px] object-cover sm:relative sm:-left-5 sm:-top-5"
          blurDataURL="data:..."
          automatically
          provided
          placeholder="blur"
        />
      </div>

      {/* Right Side */}
      <div className="sm:w-8/12 w-11/12 md:w-1/2">
        {/* Title */}
        <div className="text-[#4F3527] capitalize text-3xl md:text-4xl font-bold mb-5">
          Objectives
        </div>
        {/* Description */}
        <p className="text-[#4F3527] capitalize lg:text-lg font-semibold mb-5 pt-10">
          At Dima Al-Orouba Turner Foundation for Maintenance, we have set a set
          of different goals that contribute to enriching our march with more
          successes, whether at the local or global level as well, and with our
          goals we have devised many practical solutions that have supported us
          in the labor market in the field of turning and maintenance, our goals
          are:
        </p>
        <div className="font-medium text-[16px] mb-6 text-left text-[#4F3527]">
          <ul className="list-disc list-inside">
            {list.length &&
              list.map((item, index) => (
                <span className="flex" key={index}>
                  <li></li>
                  {item}
                </span>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutObjectives;
