import { IconBrandFacebook, IconBrandInstagram, IconBrandX} from '@tabler/icons-react';

import Link from 'next/link'
export default function Footer() {
    return (
      <footer className='bg-[#DDC7BB]'>
      <div className="font-customFont font-bold container flex flex-wrap  text-[#2B1B12] pt-10 pb-20 px-4">
      <div className="w-full md:w-[30%] p-4">
        <h2 className="text-[20px] md:text-[20px] mb-2">DIMA AL UROUBA TURNERY</h2>
        <div className='text-[14px] md:text-[16px] font-bold'>Precision Crafting for a Brighter Tomorrow | صناعة دقيقة لمستقبل أكثر إشراقًا</div>
      </div>
      <span className='md:w-0 w-full border border-[#2B1B12]'/>
      <div className="w-full md:ml-auto md:w-[60%] flex flex-wrap">
        <div className="sm:w-1/3 p-4 w-7/12">
          <h2 className="text-base md:text-lg font-bold mb-4">Support</h2>
          <ul>
            <li className='mb-2'><Link href="#" className="text-[14px] md:text-[16px] text-[#4F3527] hover:text-[#9c6240] duration-150">FAQ</Link></li>
            <li className='mb-2'><Link href="#" className="text-[14px] md:text-[16px] text-[#4F3527] hover:text-[#9c6240] duration-150">Contact Us</Link></li>
            <li className='mb-2'><Link href="#" className="text-[14px] md:text-[16px] text-[#4F3527] hover:text-[#9c6240] duration-150">Help Center</Link></li>
            <li className='mb-2'><Link href="#" className="text-[14px] md:text-[16px] text-[#4F3527] hover:text-[#9c6240] duration-150">Terms of Service</Link></li>
          </ul>
        </div>
        <div className="sm:w-1/3 p-4 w-5/12">
          <h2 className="text-base md:text-lg font-bold mb-4">Pages</h2>
          <ul>
            <li className='mb-2'><Link href="#" className="text-[14px] md:text-[16px] text-[#4F3527] hover:text-[#9c6240] duration-150">Departments</Link></li>
            <li className='mb-2'><Link href="#" className="text-[14px] md:text-[16px] text-[#4F3527] hover:text-[#9c6240] duration-150">About</Link></li>
            <li className='mb-2'><Link href="#" className="text-[14px] md:text-[16px] text-[#4F3527] hover:text-[#9c6240] duration-150">Terms</Link></li>
          </ul>
        </div>
        <div className="sm:w-1/3 p-4">
          <h2 className="text-base md:text-lg font-bold mb-4">Our Social</h2>
          <ul>
            <li className='mb-2 flex items-center'>
              <IconBrandInstagram className="mr-2" />
              <Link href="#" className="text-[14px] md:text-[16px] text-[#4F3527] hover:text-[#9c6240] duration-150">Instagram</Link>
            </li>
            <li className='mb-2 flex items-center'>
              <IconBrandFacebook className="mr-2" />
              <Link href="#" className="text-[14px] md:text-[16px] text-[#4F3527] hover:text-[#9c6240] duration-150">Facebook</Link>
            </li>
            <li className='mb-2 flex items-center'>
              <IconBrandX className="mr-2" />
              <Link href="#" className="text-[14px] md:text-[16px] text-[#4F3527] hover:text-[#9c6240] duration-150">Twitter</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className='text-center bg-[#2B1B12] text-[#b37f61] p-2'>
    Copyright © {new Date().getFullYear()}; Built by <Link href="https://hussainalnakhli.com/" rel='noreferrer' target="_blank" className='underline'>Hussain Alnakhli</Link> 
    </div>
    </footer>
      
    );
}