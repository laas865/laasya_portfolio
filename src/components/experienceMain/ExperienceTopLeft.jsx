import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
        <p className='text-orange font-bold uppercase text-3xl font-special text-center'>Since 2023</p>
        <div className='flex justify-center items-center gap-4'>
            <ExperienceInfo number='2' text='year'/>
            <p className='font-bold text-6xl text-lightBrown'>-</p>
            <ExperienceInfo number='2' text='WebSites'/>
        </div>
        <p className='text-center text-white'>Building skills and gaining experience since 2023.</p>
    </div>
  )
}

export default ExperienceTopLeft