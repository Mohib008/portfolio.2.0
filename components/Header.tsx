import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

export default function header({}: Props) {
  return (
    <header className=' sticky flex top-0 justify-between max-w-7xl mx-auto z-20 p-5 xl:items-center'> 
      <motion.div
        className='flex flex-row items-center'
        initial={{
         x: -500,
         opacity: 0,
         scale: 0.5,
        }}

        animate={{
         x: 0,
         opacity: 1,
         scale: 1,
        }}
        transition={{
         duration: 1.5,
        }}
      >
      {/* Socail Icons */} 
      <SocialIcon 
          url="https://youtube.com/in/jaketrent"
          fgColor='grey'
          bgColor='transparent'
       />
       <SocialIcon 
          url="https://whatsapp.com/in/jaketrent"
          fgColor='grey'
          bgColor='transparent'
       />
       <SocialIcon 
          url='https://twitter.com/in/jaketrent'
          fgColor='grey'
          bgColor='transparent'
       />
       <SocialIcon 
          url="https://facebook.com/in/jaketrent"
          fgColor='grey'
          bgColor='transparent'
       />

      </motion.div>

      <motion.div 
        className='flex flex-row items-center text-gray-300 cursor-pointer'
         initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
         }}
         animate={{
            x: 0,
            opacity: 1,
            scale: 1,
         }}
         transition={{
            duration: 1.5,
         }}
         >
      <SocialIcon 
          network='email'
          fgColor='grey'
          bgColor='transparent'
       />
       <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch!</p>
      </motion.div>
    </header>
  )
}