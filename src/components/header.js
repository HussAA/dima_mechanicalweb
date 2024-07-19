'use client'

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from 'next/link';
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="font-customFont font-bold">
      <div className="w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 mx-auto py-4 flex justify-between items-center">
        <div className="text-base lg:text-xl font-bold text-[#2B1B12]">DIMA AL UROUBA</div>
            <nav className="hidden md:flex space-x-4 lg:space-x-10 items-center">
                <Link href="/" className="text-[#2B1B12] hover:text-[#9c6240] duration-150">Home</Link>
                <Link href="/departments" className="text-[#2B1B12] hover:text-[#9c6240] duration-150">Departments</Link>
                <Link href="/about" className="text-[#2B1B12] hover:text-[#9c6240] duration-150">About</Link>
                <Link href="/terms" className="text-[#2B1B12] hover:text-[#9c6240] duration-150">Terms</Link>
                <Link href='#contact' className="bg-[#2B1B12] font-normal px-7 text-[16px] hover:bg-[#5a3b2a] duration-150 text-[#F0F0F0] py-2 rounded-md">Contact</Link>
            </nav>
        <div className="md:hidden">
          <Sheet isOpen={isOpen}>
            <SheetTrigger asChild>
            <div onClick={toggle} class="block lg:hidden p-2 text-black rounded cursor-pointer">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </div>
            </SheetTrigger>
            <SheetContent>
              <nav className="space-y-8 p-4 pt-8 font-medium">
                <Link href="/" className="block text-[#2B1B12] hover:text-[#9c6240] duration-150">Home</Link>
                <Link href="/departments" className="block text-[#2B1B12] hover:text-[#9c6240] duration-150">Departments</Link>
                <Link href="/about" className="block text-[#2B1B12] hover:text-[#9c6240] duration-150">About</Link>
                <Link href="/terms" className="block text-[#2B1B12] hover:text-[#9c6240] duration-150">Terms</Link>
                <Button href="#contact" className="w-full bg-[#2B1B12] px-5 text-[16px] hover:bg-[#9c6240] duration-150">Contact</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
