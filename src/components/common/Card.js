import React from 'react';


const Card = ({ heading, para, image, height, width, imageHeight }) => {
  return (
    <div className={`text-left border-2 rounded-2xl ${height} ${width} flex flex-col justify-between`} data-aos="fade-up" data-aos-duration="1300">
        <img src={image} alt="second" className={`lg:${imageHeight}`}/>
        <div className='p-5'>
            <h1 className='text-2xl font-semibold'>{heading}</h1>
            <p className='text-[#767575] font-medium'>{para}</p>
        </div>
    </div>
  )
}

export default Card