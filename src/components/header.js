'use client'

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Hamburger from 'hamburger-react'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow font-customFont font-bold">
      <div className="container mx-auto px-8 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-[#2B1B12]">DIMA AL UROUBA TURNERY</div>
            <nav className="hidden md:flex space-x-4 lg:space-x-12 items-center">
                <a href="#" className="text-[#2B1B12] hover:text-[#9c6240] duration-150">Home</a>
                <a href="#" className="text-[#2B1B12] hover:text-[#9c6240] duration-150">Departments</a>
                <a href="#" className="text-[#2B1B12] hover:text-[#9c6240] duration-150">About</a>
                <a href="#" className="text-[#2B1B12] hover:text-[#9c6240] duration-150">Terms</a>
                <Button className="bg-[#2B1B12] px-5 text-[16px] hover:bg-[#9c6240] duration-150">Contact</Button>
            </nav>
        <div className="md:hidden">
          <Sheet isOpen={isOpen}>
            <SheetTrigger asChild>
            <button onClick={toggle} class="block lg:hidden p-2 text-black rounded">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            </SheetTrigger>
            <SheetContent>
              <nav className="space-y-8 p-4 pt-8">
                <a href="#" className="block text-[#2B1B12] hover:text-[#9c6240] duration-150">Home</a>
                <a href="#" className="block text-[#2B1B12] hover:text-[#9c6240] duration-150">Departments</a>
                <a href="#" className="block text-[#2B1B12] hover:text-[#9c6240] duration-150">About</a>
                <a href="#" className="block text-[#2B1B12] hover:text-[#9c6240] duration-150">Terms</a>
                <Button className="w-full bg-[#2B1B12] px-5 text-[16px] hover:bg-[#9c6240] duration-150">Contact</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
