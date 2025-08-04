import React from 'react';
import SkillsText from './SkillsText';
import AllSkills from './AllSkills';
import AllSkillsSM from './AllSkillsSM';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const SkillsMain = () => {
  return (
    <div id='skills'>
      <div className='max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden'>

        <motion.div
          variants={fadeIn('up', 0.1)} // faster
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
        >
          <SkillsText />
        </motion.div>

        <div className='lg:block sm:hidden absolute bottom-[50px] left-1/2 -translate-x-1/2'>
          <motion.div
            variants={fadeIn('up', 0.15)} // faster
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
          >
            <AllSkills />
          </motion.div>
        </div>

        <div className='sm:block lg:hidden'>
          <motion.div
            variants={fadeIn('up', 0.15)} // faster
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
          >
            <AllSkillsSM />
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default SkillsMain;
