import React from 'react'
import ExperienceCard from '../components/ExperienceCard'
import { motion } from 'framer-motion'

type Props = {}

function Experience({}: Props) {
  return (

    <motion.div
      initial={{ opacity: 0,}}
      whileInView={{ opacity: 1,}}
      transition={{ duration: 1.5,}}
     className='h-screen relative flex flex-col items-center text-left
      md:flew-row overflow-hidden max-w-full mx-auto px-10 justify-evenly
       '>
      <h3 className='absolute top-24 tracking-[20px] text-2xl text-gray-500 uppercase '>
        Experience
      </h3>
      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-32 '>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  )
}

export default Experience