import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
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
    skill:'MongoDB',
    icon:SiMongodb
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
    skill:'MySQL',
    icon:SiMysql
  },
]

const AllSkills = () => {
  return (
    <div>
      <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
        {skills.map((items, index) => (
          <SingleSkills 
            key={index} 
            text={items.skill} 
            imgSvg={<items.icon />} 
          />
        ))}
      </div>
    </div>
  );
}

export default AllSkills;