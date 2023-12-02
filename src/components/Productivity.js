import React from 'react'
import Heading from './common/Heading'
import ProductivityCard from './common/ProductivityCard';
import firstLogo from '../assets/firstLogo.png';
import thirdLogo from '../assets/thirdLogo.png';
import secondLogo from '../assets/secondLogo.png';
import all from '../assets/all.png';
import filter from '../assets/filter.png';
import firstTech from '../assets/firstTech.png';
import secondTech from '../assets/secondTech.png';
import thirdTech from '../assets/thirdTech.png';
import fourthTech from '../assets/fourthTech.png';
import fifthTech from '../assets/fifthTech.png';
import sixthTech from '../assets/sixthTech.png';
import seventhTech from '../assets/seventhTech.png';
import eigthTech from '../assets/eigthTech.png';
import ninthTech from '../assets/ninthTech.png';
import tenthTech from '../assets/tenthTech.png';

const Productivity = () => {
  return (
    <div className='bg-[#1C1C1C] pt-10 px-20 flex flex-col justify-center items-center text-center'>
        <Heading emoji={"🤩"} first={"and more..."} second={"Explore an array of features that elevate your  "} firstSpan={"Productivity"} secondSpan={"to new heights"} third={"Discover the tools that will revolutionize the way you manage and optimize your operations"} color={"text-white"} bannerWidth={"w-200px"}/>
        
        {/* CARDS */}
        <div className='flex lg:flex-row flex-col gap-10 mt-10 justify-center items-center'>
            <ProductivityCard image={firstLogo} heading={"Cross-Platform Compatibility"} para={"Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device."}/>

            <ProductivityCard image={secondLogo} heading={"Stay Informed with Essential Notifications"} para={"Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support"}/>

            <ProductivityCard image={thirdLogo} heading={"Secure Data Encryption at all times"} para={"Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times."}/>

        </div>

      <div className='flex'>

        <div className='mt-20 lg:flex flex-col hidden gap-5'>
          <img src={firstTech} alt="logo" className='ml-5'/>
          <img src={secondTech} alt="logo"/>
          <img src={thirdTech} alt="logo" className='ml-5'/>
          <img src={fourthTech} alt="logo"/>
          <img src={fifthTech} alt="logo" className='ml-5'/>
        </div>

      <div className='flex justify-center items-center flex-col mt-[150px]'>
      <img src={all} alt="all" className='mb-10 lg:hidden block'/>
        <Heading emoji={"🛠️"} first={"integrations"} second={"Enable"} firstSpan={"integration"} secondSpan={"with other popular tools and platforms"} third={"Seamlessly connect and amplify your workflow by enabling integration with a diverse array of widely-used tools and platforms."} color={"text-white"} bannerWidth={"w-200px"}/>
        
        <img src={filter} alt="filter" className='mt-10 lg:h-[300px] h-[170px]'/>
        </div>

        <div className='mt-20 lg:flex flex-col hidden gap-5'>
          <img src={sixthTech} alt="logo"/>
          <img src={seventhTech} alt="logo"/>
          <img src={eigthTech} alt="logo"/>
          <img src={ninthTech} alt="logo"/>
          <img src={tenthTech} alt="logo"/>
        </div>

</div>
    </div>
  )
}

export default Productivity