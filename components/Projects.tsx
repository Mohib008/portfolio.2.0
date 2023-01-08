import React from 'react'

type Props = {}

function Projects({}: Props) {
  const projects = [1,2,3,4];
  return (
    <div className='h-screen relative flex flex-col items-center mx-auto
          overflow-hidden max-w-full z-0 md:flex-row text-left justify-evenly '
    >
      <h3 className='text-gray-500 text-2xl tracking-[20px] absolute top-24'>Projects</h3>
      <div className='flex w-full relative overflow-x-scroll overflow-y-hidden
           snap-x snap-mandatory z-20'>
         {projects.map((project) => (
          <div className='flex w-screen flex-shrink-0 h-screen space-y-5
           snap-center flex-col justify-center p-20 md:p-44 items-center'>
            <img 
               src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8fdUCk_VXyQIE4EgtyNT7CDQJPCxi_ucFCg&usqp=CAU'
               alt=''
             />
          </div>
         ))}
      </div>
      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/20 left-0 h-[500px] -skew-y-12' />
    </div>
  )
}

export default Projects