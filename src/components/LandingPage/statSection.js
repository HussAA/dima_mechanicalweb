"use client";

const items = {
  text: "Reaching the world in the field of industry, turning, and maintenance is not easy, but with patience and diligence, we have reached what we aspire to. For this reason, we are trying to preserve the place we have reached, to always maintain our first ranking in our field, and thus we gain the trust of our customers.",
};

const Stats = () => {
  return (
    <div className="font-customFont w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 flex flex-col md:flex-row items-center gap-10 mx-auto">
      {/* Left Side */}
      <div className="w-full md:w-1/2">
        {/* Image */}
        <img
          src="/AboutUs4.jpg"
          alt="stat Image"
          className="rounded-lg md:w-full sm:w-8/12 w-10/12 mx-auto xl:max-h-[350px] md:max-h-[300px] md:h-auto h-[240px] object-cover"
        />
      </div>
      {/* Right Side */}
      <div className="w-full md:w-1/2 md:text-left">
        {/* Title */}
        <div className="text-4xl font-medium mb-4 text-center md:text-left">
          Something Else
        </div>
        {/* Description */}
        <div className="font-medium text-[16px] mb-6 text-balance text-center md:text-left">
          {items.text}
        </div>
        {/* Stats */}
        <div className="flex justify-between">
          <div className="text-[#4F3527]">
            <div className="text-[44px] leading-[50px] font-semibold">+8K</div>
            <div className="font-semibold">Products Shipped</div>
          </div>
          <div className="text-[#4F3527]">
            <div className="text-[44px] leading-[50px] font-semibold">+4K</div>
            <div className="font-semibold">Happy Customers</div>
          </div>
          <div className="text-[#4F3527]">
            <div className="text-[44px] leading-[50px] font-semibold">680</div>
            <div className="font-semibold">Staff Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;