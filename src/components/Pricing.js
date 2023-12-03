import React from 'react'
import Heading from './common/Heading'
import PricingCard from './common/PricingCard'

const Pricing = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center py-10 lg:px-20 px-5'>
        <Heading emoji={`💲`} first={"Start your ideal"} firstSpan={"Pricing"} secondSpan={"plan"} third={"At Manage Wise, we believe in providing you with pricing plans that adapt to your unique needs."}/>

        <div className='flex lg:flex-row flex-col gap-5 mt-10'>
            <PricingCard bgColor={"bg-[#EDEDFA]"} first={"free"} price={"0"} firstLine={"Access to all basic features"} secondLine={"Reporting and analytics"} thirdLine={"Up to 5 individual users"} fourthLine={"Chat and email support"} />

            <PricingCard bgColor={"bg-[#1C1C1C]"} first={"standard"} price={"25"} firstLine={"Access to all basic features"} secondLine={"Reporting and analytics"} thirdLine={"Up to 5 individual users"} fourthLine={"Chat and email support"} textColor={"text-white"} margin={"lg:-mt-5 mt-0"}/>

            <PricingCard bgColor={"bg-[#EDEDFA]"} first={"business"} price={"0"} firstLine={"Access to all basic features"} secondLine={"Reporting and analytics"} thirdLine={"Up to 5 individual users"} fourthLine={"Chat and email support"} />
        </div>
    </div>
  )
}

export default Pricing