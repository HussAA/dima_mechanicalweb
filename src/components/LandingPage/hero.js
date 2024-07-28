"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IconBrandWhatsapp } from "@tabler/icons-react";

const images = ["/heroimage.png", "/heroimage2.jpg", "/heroimage3.png"];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:mx-auto w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 flex flex-col md:flex-row md:items-center py-10 gap-3">
      {/* Left Section */}
      <div className="md:w-5/12 pl-[4.166667%] md:pl-0">
        {/* Title */}
        <div className="text-6xl mb-2 font-extrabold text-[#2B1B12]">
          DIMA AL UROUBA
        </div>
        {/* Slogan */}
        <div className="text-[#4F3527] my-4 font-bold">
          Precision Crafting for a Brighter Tomorrow | صناعة دقيقة لمستقبل أكثر
          إشراقًا
        </div>
        {/* Button and Link */}
        <div className="my-10 flex">
          <Link
            href="https://wa.me/"
            className="flex items-center bg-[#2B1B12] px-7 text-[16px] hover:bg-[#5a3b2a] duration-150 text-[#F0F0F0] py-2 rounded-md"
          >
            <IconBrandWhatsapp
              width={20}
              height={20}
              className="ml-1 order-2"
            />
            WhatsApp
          </Link>
          <Link
            href="/about"
            className="px-7 text-[16px] font-medium hover:text-[#5a3b2a] duration-150 text-black py-2 rounded-md"
          >
            Learn More
          </Link>
        </div>
      </div>
      {/* Right Section */}
      <div className="relative md:w-7/12 md:flex md:justify-end pl-[4.166667%] md:pl-0 h-96">
        <AnimatePresence>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute w-full h-full"
          >
            <Image
              src={images[currentImageIndex]}
              alt="Hero Image"
              layout="fill"
              objectFit="cover"
              blurDataURL="data:..."
              placeholder="blur"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Hero;
