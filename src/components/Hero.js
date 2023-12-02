import React from 'react';
import { FaPlayCircle } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import banner from '../assets/hero-banner.png';
import Heading from './common/Heading';

const Hero = () => {
  return (
    <div className='bg-[#FDF2EC] h-auto flex flex-col items-center justify-center py-20'>

    {/* text block */}
        <div className='flex flex-col justify-center items-center text-center lg:pt-0 pt-10'>
          <Heading emoji={"👋"} first={"welcome to mangae wise!"} second={"Empower your business with"} firstSpan={"Strategic"} secondSpan={"insights"} third={"Powerful management platform designed to streamline your business operations, boost productivity, and drive success"}/>

          {/* buttons */}
          <div className='flex lg:flex-row flex-col gap-10 mt-8'>
            <button className='bg-[#8247FF] text-white font-medium text-xl flex justify-center items-center gap-2 h-14 lg:w-[220px] sm:w-[700px] w-[300px] rounded-2xl duration-300 shadow-none hover:shadow-[0px_0px_2px_8px_#D0BFFF]'>Get Started <FaArrowCircleRight /></button>
            <button className=' bg-white border-[1px] hover:border-black text-xl font-medium flex justify-center items-center gap-2 h-14 lg:w-[220px] sm:w-[700px] w-[300px] rounded-2xl duration-300'>Watch Demo <FaPlayCircle /></button>
          </div>
        </div>

        {/* banner image */}
        <div className='bg-[#FDF2EC] mt-20 rounded-xl px-8'>
          <img src={banner} alt="banner" className='lg:h-[700px] h-auto  shadow-xl lg:rounded-[30px] md:rounded-3xl rounded-2xl'/>
        </div>
    </div>
  )
}

export default Hero