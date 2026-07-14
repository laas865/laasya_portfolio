import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava, FaPython } from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";

const skills = [
  {
    skill: 'HTML',
    icon: FaHtml5,
  },
  {
    skill: 'CSS',
    icon: FaCss3Alt,
  },
  {
    skill: 'JavaScript',
    icon: IoLogoJavascript,
  },
  {
    skill: 'MongoDB',
    icon: SiMongodb,
  },
  {
    skill: 'Java',
    icon: FaJava,
  },
  {
    skill: 'Python',
    icon: FaPython,
  },
  {
    skill: 'MySQL',
    icon: SiMysql,
  },
]

const AllSkillsSM = () => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12'>
      {skills.map((item, index) => {
        return (
          <div key={index} className='flex flex-col items-center'>
            <item.icon className='text-7xl text-orange' />
            <p className='text-center mt-4 text-white'>
              {item.skill}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM