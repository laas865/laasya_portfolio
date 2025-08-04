import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from './SingleInfo';
const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white'>
        <SingleInfo text='laasya865@gmail.com' Image={MdOutlineMail}/>
        <SingleInfo text='Hyderabad,India' Image={IoLocationOutline}/>
    </div>
  )
}

export default ContactInfo