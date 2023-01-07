import React from 'react'
import { motion } from 'framer-motion'
import Skill from "../components/skill"

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div 
     className='flex relative flex-col text-center md:text-left xl:flex-row
      min-h-screen justify-center max-w-[2000px] items-center xl:px-10 mx-auto xl:space-y-0 '
    >
      <h3 className='text-gray-500 tracking-[20px] top-24 absolute uppercase text-2xl'>
        skills
      </h3>
      <h3 className='top-36 text-gray-500 text-sm tracking-[3px] uppercase absolute'>
        Hover over skills for currency Profieciency
      </h3>
      <div className='grid grid-cols-4 gap-5'>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  )
}

export default Skills