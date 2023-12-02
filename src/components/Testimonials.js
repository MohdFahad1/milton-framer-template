import React from 'react'
import Heading from './common/Heading';
import AutoPlay from './AutoPlay';

const Testimonials = () => {
  return (
    <div className='py-10 px-20'>
        <div className='flex flex-col justify-start items-start'>
            <Heading emoji={"❤️"} first={"welcome to mangae wise!"} second={"Hear from our "} firstSpan={"Statisfied"} secondSpan={"clients"} third={"Discover why our clients love working with us. Read their testimonials and learn how we has helped businesses."}/>
        </div>
        <div>
            <AutoPlay />
        </div>
    </div>
  )
}

export default Testimonials