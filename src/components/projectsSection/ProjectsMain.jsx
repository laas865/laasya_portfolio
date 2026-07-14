import React from 'react';
import ProjectsText from './ProjectsText';
import SingleProject from './SingleProject';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const projects = [
  {
    name: 'TO-DO list',
    year: '2025',
    align: 'right',
    image: `${import.meta.env.BASE_URL}images/website-img-1.jpg`,
    link: 'https://github.com/laas865/To-Do-List_LAASYA.git',
  },
  {
    name: 'Glucose Prediction Test',
    year: '2025',
    align: 'left',
    image: `${import.meta.env.BASE_URL}images/website-img-2.webp`, // ✅ fixed path
    link: 'https://github.com/laas865/Glucose_prediction_test.git',
  },
  {
    name: 'Breast Cancer Prediction',
    year: '2025',
    align: 'right',
    image: `${import.meta.env.BASE_URL}images/website-img-3.jpg`, // ✅ fixed path
    link: 'https://github.com/laas865/Breast_Cancer_Prediction_test.git',
  },
];


const ProjectsMain = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4'>
      <motion.div
        variants={fadeIn('up', 0.1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.5 }}
      >
        <ProjectsText />
      </motion.div>

      <div className='flex flex-col gap-16 max-w-[900px] mx-auto mt-10'>
        {projects.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn(item.align === 'left' ? 'left' : 'right', 0.2 + index * 0.15)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.5 }}
          >
            <SingleProject
              name={item.name}
              year={item.year}
              align={item.align}
              image={item.image}
              link={item.link}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain



