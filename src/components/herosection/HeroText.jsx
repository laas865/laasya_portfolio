import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from "../../framerMotion/variants.js";

const HeroText = () => {
  return (
    <div className='flex flex-col gap-4 h-full justify-center items-center md:text-center sm:text-center'>

      <motion.h2
        variants={fadeIn('down', 0)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0 }}
        className='lg:text-2xl sm:text-xl uppercase text-teal-400 font-bold'
      >
        Hello, I'm
      </motion.h2>

      <motion.h1
        variants={fadeIn('up', 0.05)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0 }}
        className='md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange'
      >
        Laasya Grandhi
      </motion.h1>

      <motion.p
        variants={fadeIn('up', 0.1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0 }}
        className='text-lg text-gray-400 mt-4 text-center'
      >
        CSE student skilled in frontend, backend, and AI/ML.<br />
        Focused on building smart and scalable tech solutions.
      </motion.p>

      <motion.a
        variants={fadeIn('up', 0.15)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0 }}
        href="../../public/images/myresume.pdf"
        download
      >
        <button className='mt-4 px-6 py-2 border-2 border-emerald-50 bg-orange text-white rounded-2xl shadow-md hover:bg-darkCyan transition-colors duration-300 ease-in-out'>
          Resume
        </button>
      </motion.a>
      
    </div>
  );
};

export default HeroText;
