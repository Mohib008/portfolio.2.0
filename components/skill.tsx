import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  directionLeft?: boolean;
}


function skill({directionLeft}: Props) {
  return (

    <div className='group relative flex cursor-pointer'>
      <motion.img
          initial={{
           x: directionLeft ? -200 : 200,
           opacity: 0,
          }}
          transition={{ duration: 2, }}
          whileInView={{opacity: 1, x: 0 }}
          viewport={{once: true}}
   
          className='w-24 h-24 rounded-full filter group-hover:grayscale
                     object-cover xl:w-32 xl:h-32 border border-gray-500
                     md:w-28 md:h-28'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaGmgplXCdCGnKKttDm7IRcu01CMSL2JAdsg&usqp=CAU'           
          alt=""
        />
        <div className='absolute opacity-0 group-hover:opacity-70
                        transition duration-300 ease-in-out group-hover:bg-white
                         w-24 h-24 rounded-full z-0 md:w-28 md:h-28 xl:w-32 xl:h-32
                         '>
          <div className='flex items-center justify-center h-full'>
            <h3 className='text-black text-3xl font-bold opacity-100'>
              100%
            </h3>
          </div>
        </div>
    </div>
  )
}

export default skill