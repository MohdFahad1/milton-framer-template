import React from 'react'
import Heading from './common/Heading'

const Accordian = () => {
  return (
    <div className='flex justify-between items-center py-14 px-20'>
        <div>
        <Heading emoji={"🙋‍♀️"} first={"FAQ"} second={"Need "} firstSpan={"Answers?"} third={"Check out our most commonly asked questions below to find the information you need."}/>
        </div>

        <div>Accordian</div>
    </div>
  )
}

export default Accordian