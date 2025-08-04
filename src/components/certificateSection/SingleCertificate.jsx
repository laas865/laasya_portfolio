import React from 'react'

const SingleCertificate = ({ title, year, image }) => {
  return (
    <div className='my-10 px-4 flex flex-col items-center gap-4'>
      <img src={image} alt='certificate' className='w-[1000px] h-auto rounded-2xl shadow-md' />
      <h2 className='text-2xl text-orange'>{title}</h2>
      <h3 className='text-white text-lg font-thin'>{year}</h3>
    </div>
  );
};

export default SingleCertificate;
