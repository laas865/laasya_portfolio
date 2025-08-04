import React from 'react';
import ExperienceText from './ExperienceText';
import ExperienceTop from './ExperienceTop';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const ExperienceMain = () => {
  return (
    <div id='experience' className='max-w-[1200px] mx-auto px-4'>

      <motion.div
        variants={fadeIn('up', 0.05)} // minimal delay
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
      >
        <ExperienceText />
      </motion.div>

      <motion.div
        variants={fadeIn('up', 0.1)} // faster
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
      >
        <ExperienceTop />
      </motion.div>

      <motion.div
        variants={fadeIn('up', 0.15)} // faster
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className='w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden'></div>
      </motion.div>

    </div>
  );
};

export default ExperienceMain;
