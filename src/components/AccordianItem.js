import React from 'react'
import { Collapse } from 'react-collapse'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const AccordianItem = ({ open, toggle, ques, ans, id }) => {

  return (
    <div className='pt-[10px]'>
        <div onClick={toggle} className={open ? "cursor-pointer flex justify-between bg-[#F7F8FD] rounded-t-2xl p-5 items-center" : "cursor-pointer flex justify-between bg-[#F7F8FD] rounded-2xl p-5 items-center"}>
            <p className={open ? `text-[#8247FF] text-2xl font-semibold` : `text-black text-2xl font-semibold`}>{ques}</p>
            <div className={open ? `text-[#8247FF] text-2xl font-semibold` : `text-black text-2xl font-semibold`}>{ open ? <AiOutlineMinus /> : <AiOutlinePlus />}</div>
        </div>

        <Collapse isOpened={open}>
            <div className='text-[#767575] text-lg bg-[#F7F8FD] p-5 rounded-b-2xl'>{ans}</div>
        </Collapse>
    </div>
  )
}

export default AccordianItem