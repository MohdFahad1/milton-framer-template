import React, { useState } from 'react';
import Heading from './common/Heading';
import AccordianItem from './AccordianItem';


const Accordian = () => {

  const [open, setOpen] = useState(false);

  const toggle = (id) => {
    if(open === id){
      return setOpen(null)
    }

    setOpen(id)
  }
  const data = [
    {
      id: 0,
      ques: "What is Manage Wise and what does it offer?",
      ans: "Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more."
    },
    {
      id: 1,
      ques: "Is Manage Wise suitable for small businesses and larger enterprises alike?",
      ans: "Yes, Manage Wise is designed to cater to the needs of both small businesses and larger enterprises. Its scalable features and customizable options make it versatile for various business sizes."
    },
    {
      id: 3,
      ques: "Can I access Manage Wise from different devices and platforms?",
      ans: "Yes, Manage Wise offers cross-platform compatibility, allowing you to access and use the platform seamlessly on desktops, web browsers, and mobile devices.",
    },
    {
      id: 4,
      ques: "What kind of support options do you offer to users?",
      ans: "We provide responsive customer support via chat and email to assist you with any inquiries, issues, or guidance you may need while using Manage Wise."
    },
    {
      id: 5,
      ques: "How secure is the data stored within Manage Wise?",
      ans: "Your data's security is a top priority. Manage Wise employs robust data encryption and follows industry best practices to ensure your sensitive information is safe and protected."
    }
  ]

  return (
    <div className='flex lg:flex-row flex-col justify-between items-center py-14 lg:px-20 px-5'>
        <div className='flex flex-col justify-start items-start lg:w-1/2 w-auto'>
        <Heading emoji={"🙋‍♀️"} first={"FAQ"} second={"Need "} firstSpan={"Answers?"} third={"Check out our most commonly asked questions below to find the information you need."}/>
        </div>

        <div className='lg:mt-0 mt-10 lg:w-1/2 w-auto' data-aos="fade-up" data-aos-duration="1000">
          {data.map((item, id) => (
            <AccordianItem key={id} open={id === open} ques={item.ques} ans={item.ans} toggle={() => toggle(id)}/>
          ))}
        </div>
    </div>
  )
}

export default Accordian