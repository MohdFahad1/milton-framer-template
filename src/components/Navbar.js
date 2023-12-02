import React from 'react';
import logo from '../assets/logo.png';
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className='py-4 px-6 bg-[#FDF2EC] border-b-[1px] flex justify-between items-center'>

    {/* banner logo */}
      <div>
        <img src={logo} alt="logo" className="h-[45px]" />
      </div>

    {/*Links*/}
      <div className='lg:flex hidden items-center gap-10'>

      {/* Quick Links */}
        <ul className='flex gap-10'>
          <li className='cursor-pointer hover:text-[#8247FF] text-lg font-medium duration-300'>Features</li>
          <li className='cursor-pointer hover:text-[#8247FF] text-lg font-medium duration-300'>FAQ</li>
          <li className='cursor-pointer hover:text-[#8247FF] text-lg font-medium duration-300'>Pricing</li>
          <li className='cursor-pointer hover:text-[#8247FF] text-lg font-medium duration-300'>Testimonials</li>
        </ul>

      {/* Button */}
      <button className='bg-white border-[1px] hover:border-black duration-300 border-white p-3 rounded-xl text-lg font-bold'>
        Buy Template
      </button>
      </div>

      {/* responsive bars */}
      <FaBars className='text-3xl lg:hidden block'/>
    </nav>
  )
}

export default Navbar