import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
        <SingleContactSocial link='https://www.linkedin.com/in/laasya-grandhi-b94a56295' Icon={ FaLinkedin } />
        <SingleContactSocial link='https://github.com/laas865' Icon= { FaGithub }/>
    </div>
  )
}

export default ContactSocial