import React from 'react';
import ContactMeLeft from './ContactMeLeft';
import ContactMeRight from './ContactMeRight';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const ContactMeMain = () => {
  return (
    <div id='contact' className='max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4'>

      <motion.h2
        variants={fadeIn('up', 0.1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.2 }}
        className='text-6xl text-cyan mb-10 text-center'
      >
        Contact Me
      </motion.h2>

      <motion.div
        variants={fadeIn('up', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.2 }}
        className='flex justify-between gap-24 bg-brown p-8 rounded-2xl lg:flex-row sm:flex-col'
      >
        <motion.div
          variants={fadeIn('right', 0.05)} // 🔥 reduced delay
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.2 }}
        >
          <ContactMeLeft />
        </motion.div>

        <motion.div
          variants={fadeIn('left', 0.1)} // 🔥 reduced delay
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.2 }}
        >
          <ContactMeRight />
        </motion.div>
      </motion.div>

    </div>
  );
};

export default ContactMeMain;
