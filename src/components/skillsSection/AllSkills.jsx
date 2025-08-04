import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import SingleSkills from './SingleSkills';
const skills = [
  {
    skill:'HTML',
    icon:FaHtml5,
  },
  {
    skill:'CSS',
    icon:FaCss3Alt,
  },
  {
    skill:'JavaScript',
    icon:IoLogoJavascript,
  },
  {
    skill:'TailwindCSS',
    icon:RiTailwindCssFill
  },
  {
    skill:'Java',
    icon:FaJava
  },
  {
    skill:'Python',
    icon:FaPython
  },
  {
    skill:'ReactJS',
    icon:RiReactjsFill
  },
]
const AllSkills = () => {
return (
  <div>
    <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
      {skills.map((items, index) => (
        <SingleSkills key={index} text={items.skill} imgSvg={<items.icon />} />
      ))}
    </div>
  </div>
  );
}

export default AllSkills