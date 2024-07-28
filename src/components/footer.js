import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
  IconBrandWhatsapp,
  IconMap2
} from "@tabler/icons-react";

import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-[#f5dfd4]">
      <div className="container flex flex-wrap  text-[#2B1B12] pt-10 pb-20 px-4">
        <div className="w-full md:w-[30%] p-4">
          <h2 className="text-[20px] md:text-[20px] mb-2 font-bold">
            DIMA AL UROUBA TURNERY
          </h2>
          <div className="text-[14px] md:text-[16px] font-semibold">
            Precision Crafting for a Brighter Tomorrow | صناعة دقيقة لمستقبل
            أكثر إشراقًا
          </div>
        </div>
        <span className="md:w-0 w-full border border-[#38302b]" />
        <div className="w-full md:ml-auto md:w-[60%] flex flex-wrap">
          <div className="sm:w-1/3 p-4 w-7/12">
            <h2 className="text-base md:text-lg font-semibold mb-4">Support</h2>
            <ul className="font-medium">
              <li className="mb-2">
                <Link
                  href="#"
                  className="text-[14px] md:text-[16px] text-[#4F3527] hover:text-[#9c6240] duration-150"
                >
                  FAQ
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/#contact"
                  className="text-[14px] md:text-[16px] text-[#4F3527] hover:text-[#9c6240] duration-150"
                >
                  Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/#contact"
                  className="text-[14px] md:text-[16px] text-[#4F3527] hover:text-[#9c6240] duration-150"
                >
                  Help Center
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/terms"
                  className="text-[14px] md:text-[16px] text-[#4F3527] hover:text-[#9c6240] duration-150"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div className="sm:w-1/3 p-4 w-5/12">
            <h2 className="text-base md:text-lg font-semibold mb-4">Pages</h2>
            <ul className="font-medium">
              <li className="mb-2">
                <Link
                  href="/departments"
                  className="text-[14px] md:text-[16px] text-[#4F3527] hover:text-[#9c6240] duration-150"
                >
                  Departments
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/about"
                  className="text-[14px] md:text-[16px] text-[#4F3527] hover:text-[#9c6240] duration-150"
                >
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/terms"
                  className="text-[14px] md:text-[16px] text-[#4F3527] hover:text-[#9c6240] duration-150"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
          <div className="sm:w-1/3 p-4">
            <h2 className="text-base md:text-lg font-semibold mb-4">
              Our Links
            </h2>
            <ul className="font-medium">
            <li className="mb-2 flex items-center">
                <IconMap2 className="mr-2" />
                <Link
                  href="https://maps.app.goo.gl/Qqr7gNYDMzKuTZMp8"
                  className="text-[14px] md:text-[16px] text-[#4F3527] hover:text-[#9c6240] duration-150"
                >
                  Our Address
                </Link>
              </li>
              <li className="mb-2 flex items-center">
                <IconBrandWhatsapp className="mr-2" />
                <Link
                  href="https://wa.me/"
                  className="text-[14px] md:text-[16px] text-[#4F3527] hover:text-[#9c6240] duration-150"
                >
                  WhatsApp
                </Link>
              </li>
              <li className="mb-2 flex items-center">
                <IconBrandInstagram className="mr-2" />
                <Link
                  href="https://www.instagram.com/"
                  className="text-[14px] md:text-[16px] text-[#4F3527] hover:text-[#9c6240] duration-150"
                >
                  Instagram
                </Link>
              </li>
              <li className="mb-2 flex items-center">
                <IconBrandFacebook className="mr-2" />
                <Link
                  href="https://www.facebook.com/"
                  className="text-[14px] md:text-[16px] text-[#4F3527] hover:text-[#9c6240] duration-150"
                >
                  Facebook
                </Link>
              </li>
              <li className="mb-2 flex items-center">
                <IconBrandX className="mr-2" />
                <Link
                  href="https://x.com/?lang=en"
                  className="text-[14px] md:text-[16px] text-[#4F3527] hover:text-[#9c6240] duration-150"
                >
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center bg-[#38302b] text-[#ccb4a6] p-2">
        Copyright © {new Date().getFullYear()}; Built by{" "}
        <Link
          href="mailto:hussain.alnakhli@majlisdev.com"
          rel="noreferrer"
          target="_blank"
          className="underline"
        >
          Majlis Dev
        </Link>
      </div>
    </footer>
  );
}
