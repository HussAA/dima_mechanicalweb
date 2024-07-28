import Link from "next/link";

const AboutHero = () => {
  return (
    <div className="pt-[40px] lg:pt-[70px] 2xl:pt-[100px] text-center">
      <div className="text-[42px] md:text-[54px] text-[#4F3527] font-semibold ">
      About Us / معلومات عنا
      </div>
      <div className="flex gap-4 md:text-lg font-semibold justify-center text-[#4F3527]">
        <Link href="/" className="hover:text-[#997e6f] duration-150">Home</Link>
        <div>/</div>
        <div className="text-[#997e6f]">About</div>
      </div>
    </div>
  );
};

export default AboutHero;
