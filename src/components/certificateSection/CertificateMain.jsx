import React from 'react';
import CertificateText from './CertificateText';
import SingleCertificate from './SingleCertificate';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const certificates = [
  {
    title: 'Full Stack Development with MERN',
    year: '2025',
    image: '../../public/images/Screenshot 2025-07-19 230222.png',
  },
  {
    title: 'Skillfied Mentor Internship for Machine Learning',
    year: '2025',
    image: '../../public/images/Screenshot 2025-07-19 230156.png',
  },
];

const CertificateMain = () => {
  return (
    <div id='certificate' className='max-w-[1200px] mx-auto px-4'>
      <motion.div
        variants={fadeIn('up', 0.1)} // reduced initial delay
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.5 }}
      >
        <CertificateText />
      </motion.div>

      <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
        {certificates.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn('up', 0.1 + index * 0.05)} // minimal delay between items
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.5 }}
          >
            <SingleCertificate
              title={item.title}
              year={item.year}
              image={item.image}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CertificateMain;





