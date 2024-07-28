import {
  IconMessageFilled,
  IconMailFilled,
  IconUserCircle,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function contact() {
  return (
    <div className="flex font-customFont justify-center">
      <div className="p-8 w-full max-w-xl">
        <h1 dir="rtl" className="text-[23px] md:text-[30px]  font-bold mb-6 text-center text-[#2B1B12]">
        هل لديك أي أسئلة؟ احصل على المساعدة منا
        </h1>
        <div className="flex justify-center mb-4 md:space-x-10">
          <Link
            href="/terms"
            className="text-[#2B1B12] hover:text-[#c4815b] mx-2 duration-150 font-[600]"
          >
            Terms and Conditions
          </Link>
          <Link
            href="https://maps.app.goo.gl/Qqr7gNYDMzKuTZMp8"
            className="text-[#2B1B12] hover:text-[#c4815b] mx-2 duration-150 font-[600]"
          >
            Our Address
          </Link>
        </div>
        <form>
          <div className="mb-3 relative">
            <IconUserCircle
              className="absolute left-3 top-3 text-[#543E32]"
              size={20}
            />
            <input
              type="name"
              placeholder="Enter your name..."
              className="w-full pl-10 p-[10px] bg-[#DDC7BB] rounded-md focus:outline-none focus:bg-[#d6b4a2] placeholder-[#543E32] placeholder:text-[14px] font-[600] focus:placeholder-opacity-30"
            />
          </div>

          <div className="mb-[7px] relative">
            <IconMessageFilled
              className="absolute left-3 top-3 text-[#543E32]"
              size={20}
            />
            <textarea
              rows={3}
              placeholder="How can we help?"
              className="w-full pl-10 p-[10px] bg-[#DDC7BB] rounded-md focus:outline-none focus:bg-[#d6b4a2] placeholder-[#543E32] placeholder:text-[14px] font-[600] focus:placeholder-opacity-30"
            ></textarea>
          </div>

          <div className="mb-3 relative">
            <IconMailFilled
              className="absolute left-3 top-3 text-[#543E32]"
              size={20}
            />
            <input
              type="email"
              placeholder="Enter your email..."
              className="w-[75%] mr-[2%] pl-10 p-[10px] bg-[#DDC7BB] rounded-md focus:outline-none focus:bg-[#d6b4a2] placeholder-[#543E32] placeholder:text-[14px] font-[600] focus:placeholder-opacity-30"
            />

            <button
              type="submit"
              className="w-[23%] p-[10px] bg-[#493b34] text-white rounded-md hover:bg-[#5a3b2a] duration-150 md:text-base text-sm"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
