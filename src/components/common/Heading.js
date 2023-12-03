import React from 'react'

const Heading = ( {emoji, first, second, firstSpan, secondSpan, third, color, width } ) => {
    return (
        <>
            <p className={`uppercase text-sm text-[#8247FF] font-medium py-1 px-4 border-[1px] rounded-lg bg-white`}>{emoji} {first}</p>

            <h1 className={`lg:text-7xl text-5xl font-bold lg:w-[971px] w-auto my-8 ${color} ${width}`}>{second} <span className='text-[#FE8162]'>{firstSpan}</span> <span className={`${color} text-black`}>{secondSpan}</span></h1>

            <p className='text-xl font-medium text-[#767575] lg:w-[680px] w-auto px-3'>{third}</p>
        </>
    )
}

export default Heading