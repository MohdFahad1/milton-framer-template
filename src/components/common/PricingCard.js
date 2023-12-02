import React from 'react'

const PricingCard = ({ bgColor, textColor, first, price, firstLine, secondLine, thirdLine, fourthLine, margin }) => {
  return (
    <div className={`${bgColor} flex flex-col justify-start items-start  h-[400px] w-[330px] p-5 rounded-2xl ${margin}`}>
        <div>
            <div className='flex'>
                <h1 className='text-[#FE8162] font-semibold px-4  rounded-2xl bg-white uppercase'>{first}</h1>
            </div>
            <h1 className={`${textColor} text-xl mt-5`}><span className='text-3xl font-semibold'>${price}</span>/month</h1>
        </div>

            <div className='flex flex-col gap-2 justify-start items-start mt-10 text-[#767575] text-xl'>
                <p>✅ {firstLine}</p>
                <p>✅ {secondLine}</p>
                <p>✅ {thirdLine}</p>
                <p>✅ {fourthLine}</p>
            </div>

            <button className=' bg-white border-[1px] hover:border-black text-xl font-medium flex justify-center items-center gap-2 h-14 w-[150px] rounded-2xl duration-300 mt-10'>Get Started</button>
    </div>
  )
}

export default PricingCard