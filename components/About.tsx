import { motion } from 'framer-motion'
import React from 'react'


type Props = {}

function About({}: Props) {
  return (

    <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1, 
        }}
        viewport={{once: true}}
        transition = {{
          duration: 1.5,
        }}
     className='h-screen flex flex-col relative text-center md:text-left md:flex-row
      max-w-7xl mx-auto px-10 justify-evenly items-center'
    >
      <h3 className='top-24 uppercase text-center items-center  text-gray-500 text-2xl absolute tracking-[20px]'>
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1, }}
        viewport={{once: true}}
        transition = {{ duration: 1.2,}}
        src="https://pbs.twimg.com/profile_images/1053717990171176962/rIDEHTl3_400x400.jpg"
        
        className='-mb-20 md:mb-0 flex-shrink-0 w-60 h-60 rounded-full xl:items-center
         object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] mt-10'
       />

       <div className='space-y-10 md:px-10 px-0'>
        <h4 className='text-4xl font-semibold text-gray-400'>Here is a <span className='underline decoration-[#F7AB0A]/50'>Background</span></h4>
        <p className='text-md'>
          Here is a little bit about me... i have been coding for over 4 years now.
          as a front-end developer i have working with startup and corporation to help build & scale their companies as well Experienced Quality Assurance web-development/ data 
          analysis with a demonstrated history of working in the electrical,
          electronic manufacturing industry and Wold Bank program.
          Skilled in JavaScript, React, Angular, NextJs, TailwindCss, Css, 
          Git/Github, Pythan and Java.
        </p>
       </div>
    </motion.div>
  )
}

export default About