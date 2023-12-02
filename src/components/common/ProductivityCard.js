import React from 'react'

const ProductivityCard = ({ image, heading, para }) => {
  return (
    <div className='rounded-2xl bg-[#212121] flex flex-col items-center p-10 h-[400px] w-[350px] justify-around'>
        <img src={image} alt={heading} />
        <div>
            <h1 className="text-white text-xl font-bold">{heading}</h1>
            <p className='text-[#767575]'>{para}</p>
        </div>
    </div>
  )
}

export default ProductivityCard