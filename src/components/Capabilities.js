import React from 'react'
import Heading from './common/Heading';
import first from '../assets/first.png';
import Card from './common/Card';
import second from '../assets/second.png';
import third from '../assets/third.png';
import fourth from '../assets/fourth.png';
import fifth from '../assets/fifth.png';


const Capabilities = () => {

  return (
    <div className='py-20 flex flex-col justify-center items-center text-center lg:px-8 px-5'>

    {/* heading section */}
        <Heading emoji={"🔥"} first={"PREMIER FEATURES"} second={"Discover our product's"} firstSpan={"Capabilities"} secondSpan={""} third={"Don't settle for mediocrity - embrace the future of management with Manage Wise."}/>

        {/* images section */}
        <div className='mt-10 flex flex-col'>

        {/* 2 Cards */}
            <div className='flex lg:flex-row flex-col lg:gap-20 gap-10 justify-center items-center'>
                <img src={first} alt="first" className='lg:h-[450px] lg:w-[558px] h-[300px] w-[372px]' data-aos="fade-up" data-aos-duration="1000"/>
                <Card image={second} height={"h-[450px]"} width={"lg:w-[558px] w-[350px]"} heading={"Smart Task Management"} para={"Say goodbye to chaos with our smart task management system"}  data-aos="fade-up" data-aos-duration="1200"/>
            </div>


            {/* 3 cards */}
            <div className='flex lg:flex-row flex-col gap-10 mt-10 justify-center items-center'>
                <Card image={third} height={"lg:h-[450px]"} width={"lg:w-[372px] w-[350px]"} heading={"Flexible Scheduling"} para={"Stay productive with our flexible scheduling system"} imageHeight={"100px"}/>

                
                <Card image={fourth} height={"lg:h-[450px]"} width={"lg:w-[372px] w-[350px]"} heading={"Easy Communication"} para={"Collaborate seamlessly with your team in real-time"} imageHeight={"100px"}/>

                
                <Card image={fifth} height={"lg:h-[450px]"} width={"lg:w-[372px] w-[350px]"} heading={"Analytics"} para={"Gain valuable insights with our advanced analytics feature"} imageHeight={"100px"}/>
            </div>
        </div>
    </div>
  )
}

export default Capabilities