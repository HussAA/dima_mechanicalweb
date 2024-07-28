

import Image from "next/image";

const items = {
  text: "الوصول للعالمية في مجال الصناعة والخراطة والصيانة ليس بالأمر السهل ولكن بالصبر والاجتهاد وصلنا إلى ما نطمح إليه ولهذا السبب نحاول الحفاظ على المكانة التي وصلنا إليها لنحافظ دائماً على ترتيبنا الأول في مجالنا وبالتالي ننال ثقة عملائنا.",
};

const Stats = () => {
  return (
    <div className="w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 flex flex-col md:flex-row items-center gap-10 mx-auto">
      {/* Left Side */}
      <div className="relative w-full md:w-1/2">
        {/* Image */}
        <Image
          width={999}
          height={999}
          src="/AboutUs4.jpg"
          alt="stat Image"
          className="rounded-lg md:w-full sm:w-8/12 w-10/12 mx-auto xl:max-h-[350px] md:max-h-[300px] md:h-auto h-[240px] object-cover"
          blurDataURL="data:..." automatically provided
          placeholder="blur" 
        />
      </div>
      {/* Right Side */}
      <div className="sm:w-10/12 w-11/12 md:w-1/2 md:text-left">
        {/* Title */}
        <div className="text-3xl md:text-4xl font-medium mb-5 text-center md:text-left">
          About Us
        </div>
        {/* Description */}
        <div dir="rtl" className=" font-medium text-[14px] md:text-[16px] mb-6 text-balance text-center md:text-left">
          {items.text}
        </div>
        {/* Stats */}
        <div dir="rtl" className="flex gap-7 justify-center text-right">
          <div className="text-[#4F3527]">
            <div className="lg:text-[35px] text-[30px] leading-[50px] font-semibold">+8K</div>
            <div className="text-sm lg:text-base font-semibold">المنتجات التي تم شحنها</div>
          </div>
          <div className="text-[#4F3527]">
            <div className="lg:text-[35px] text-[30px] leading-[50px] font-semibold">+4K</div>
            <div className="text-sm lg:text-base font-semibold">الزبائن سعداء</div>
          </div>
          <div className="text-[#4F3527]">
            <div className="lg:text-[35px] text-[30px] leading-[50px] font-semibold">680</div>
            <div className="text-sm lg:text-base font-semibold">دعم الموظفين</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
