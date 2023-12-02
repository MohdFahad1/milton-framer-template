import React from 'react'
import Heading from './common/Heading'
import ProductivityCard from './common/ProductivityCard';
import firstLogo from '../assets/firstLogo.png';
import thirdLogo from '../assets/thirdLogo.png';
import secondLogo from '../assets/secondLogo.png';

const Productivity = () => {
  return (
    <div className='bg-[#1C1C1C] py-10 px-20 flex flex-col justify-center items-center text-center'>
        <Heading emoji={"🤩"} first={"and more..."} second={"Explore an array of features that elevate your  "} firstSpan={"Productivity"} secondSpan={"to new heights"} third={"Discover the tools that will revolutionize the way you manage and optimize your operations"} color={"text-white"} bannerWidth={"w-200px"}/>
        
        {/* CARDS */}
        <div className='flex lg:flex-row flex-col gap-10 mt-10 justify-center items-center'>
            <ProductivityCard image={firstLogo} heading={"Cross-Platform Compatibility"} para={"Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device."}/>

            <ProductivityCard image={secondLogo} heading={"Stay Informed with Essential Notifications"} para={"Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support"}/>

            <ProductivityCard image={thirdLogo} heading={"Secure Data Encryption at all times"} para={"Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times."}/>

        </div>
    </div>
  )
}

export default Productivity