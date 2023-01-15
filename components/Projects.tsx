import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Projects({}: Props) {
  const projects = [1, 2, 3, 4];
  return (
    <>
      <motion.div 
       initial={{ opacity: 0, }}
       transition={{ duration: 1.5, }}
       whileInView={{ opacity: 1, }}
      
      className='h-screen relative flex flex-col items-center mx-auto overflow-hidden max-w-full z-0 md:flex-row text-left justify-evenly'>
         <h3 className='text-gray-500 text-2xl tracking-[20px] absolute top-24'>Projects</h3>
           <div className='flex w-full relative overflow-x-scroll overflow-y-hidden
                snap-x snap-mandatory z-20'>
              {projects.map((project, i) => (
               <div className='flex flex-col w-screen h-screen flex-shrink-0 space-y-5
                snap-center justify-center p-20 md:p-44 items-center'>
                 <motion.img 
                    initial={{
                      y: -300,
                      opacity: 0
                    }}

                  whileInView = {{
                    opacity: 1, 
                    y: 0,
                  }}
                  viewport = {{ once: true }}
                  transition ={{
                    duration: 1.2,
                  }}
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8fdUCk_VXyQIE4EgtyNT7CDQJPCxi_ucFCg&usqp=CAU'
                     />
                  <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                   <h4 className='text-4xl font-semibold text-center'>
                     <span className='underline decoration-[#F7AB0A]/40'>
                      case study {i + 1} of { projects.length} Repair
                     </span>
                    </h4>

                    <p className='text-center text-lg md:text-center'>
                      fjskfj;skfjlksjf;sakfjksjfsdf;kfdjdgk;jdkgjsdkjsdkjfksdfj
                      skdfjskjflksafjksjdfksjfksfjjfjfffsdkfljskl;fjsklfjskfsdkj
                      sfdjsakfjskfjksdjfksdjfkjsfjfjfjffsdkfjs;lfjksjfksjfksdfkj
                      lskfjskfjskjfksdfksfjsfjdsfsjfffsslkdfj;sakdljfiweiewioqio
                    </p>
                   </div>
                  </div>
               ))}
            </div>
         <div className='w-full absolute top-[30%] bg-[#F7AB0A]/20 left-0 h-[500px] -skew-y-12' />
      </motion.div>
    </>
  );
}

export default Projects