'use client';

import React, { useEffect, useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  
  const [isClicked, setIsClicked] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    {
      isMobile &&
      <>
    <GiHamburgerMenu onClick={()=>setIsClicked(!isClicked)} color='white' size={30} className='absolute top-[10px] right-[10px] cursor-pointer'/>
      </>
    }
    {
     !(isMobile&&!isClicked)?
      <>
          <div className='flex flex-col h-[100vh] md:h-auto lg:h-auto lg:flex-row justify-center items-center lg:justify-around px-5 lg:px-72 md:px-5 py-5 bg-[#2974f1]'>
      <div className='cursor-pointer py-3 text-lg'>Logo</div>
      <div className='flex relative py-3 text-lg'>
        <input type="text" className='lg:w-[700px] w-full px-4 py-2 rounded-md outline-none placeholder:text-gray-700 text-black placeholder:text-sm' placeholder='Search For Products, Brand & More'/>
        <FaSearch className='absolute right-2 top-5 cursor-pointer' size={22} color='#2974f1'/>
      </div>
      <div className='flex justify-center items-center cursor-pointer py-3 text-lg'>
        Jhon &nbsp; <FaChevronDown/>
      </div>
      <div className='flex justify-center items-center cursor-pointer py-3 text-lg'>
        More &nbsp; <FaChevronDown/>
      </div>
      <div className='flex justify-center items-center cursor-pointer py-3 text-lg'>
       <IoCart size={40}/> &nbsp; Cart
      </div>
    </div>
      </>:""
    }
    </>
  )
}

export default Navbar