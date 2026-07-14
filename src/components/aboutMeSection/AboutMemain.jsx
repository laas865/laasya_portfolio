import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';
import AboutMetext from './AboutMetext';
import AboutMeimage from './AboutMeimage';

const AboutMemain = () => {
  return (
    <div id='about' className='px-4 mt-[100px] flex justify-center'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-12 max-w-[1200px] w-full'>

        {/* Text Section */}
        <motion.div
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className='w-full md:w-1/2'
        >
          <AboutMetext />
        </motion.div>

        {/* Image Section */}
        <motion.div
          variants={fadeIn('right', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className='w-full md:w-1/2 flex justify-center md:justify-end'
        >
          <div className='max-w-[350px] w-full'>
            <AboutMeimage />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default AboutMemain;
