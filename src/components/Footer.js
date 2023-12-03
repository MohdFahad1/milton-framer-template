import React from 'react';
import Heading from './common/Heading';
import customer from '../assets/customers.png';
import logo from '../assets/logo.png';
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-[#FDF2EC] lg:px-20 px-5 pt-10 py-5'>
    <div className='bg-white p-10 rounded-2xl flex lg:flex-row flex-col justify-between'>
        <div >
            <div className='flex flex-col justify-start items-start'>
                <Heading emoji={"👋"} first={"Don't miss out"} second={"Unleash your "} firstSpan={"Potential"} secondSpan={"with us"} third={"Join our community of ambitious individuals and organizations eager to make a difference."} width={"w-[350px]"}/>
            </div>

            <button className='bg-[#8247FF] text-white font-medium text-xl flex justify-center items-center gap-2 h-14 w-[150px] rounded-2xl duration-300 shadow-none hover:shadow-[0px_0px_2px_8px_#D0BFFF] mt-10'>Try out now</button>
        </div>

        <div>
            <img src={customer} alt="people"/>
        </div>
        </div>

        <footer className='mt-20 lg:text-left  text-center'>
            <div className='flex lg:flex-row flex-col justify-between'>
                <img src={logo} alt="logo" className='lg:h-[80px] h-auto lg:mb-0 mb-10'/>
                    <ul className='flex flex-col gap-3'>
                        <li className='text-xl hover:text-gray-600 cursor-pointer'>Features</li>
                        <li className='text-xl hover:text-gray-600 cursor-pointer'>FAQ</li>
                        <li className='text-xl hover:text-gray-600 cursor-pointer'>Pricing</li>
                        <li className='text-xl hover:text-gray-600 cursor-pointer'>Testimonials</li>
                    </ul>
            </div>

            <div className="border-t-2 flex justify-between lg:flex-row flex-col mt-5 items-center">
                <div className='my-5 text-lg'>
                    @2022 ManageWise, Inc.
                </div>
                <div className='flex gap-5 text-3xl'>
                    <AiFillInstagram />
                    <FaSquareXTwitter />
                    <FaLinkedinIn />
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer