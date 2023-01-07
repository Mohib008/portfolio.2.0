import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    
    <article 
      className='flex flex-col flex-shrink-0 rounded-lg 
      items-center space-y-7 w-[500px] md:w-[600px] xl:w-[900px]
      snap-center bg-[#292929] hover:opacity-100 opacity-40
      transition-opacity duration-200 overflow-hidden p-10 cursor-pointer
      '>
       <motion.img
          initial={{
           y: -100,
           opacity: 0,
          }}
          transition={{ duration: 1.2, }}
          whileInView={{opacity: 1, y: 0 }}
          viewport={{once: true}}
   
          className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
          src="https://lh3.googleusercontent.com/5BkdwfaR7_cdpeMXfrl_c9V00hBByh0idlVP29zPxBELNaB-rHjW46dcVKDu7mMPSiEbq-doZJCcmVDLK2GYHVfUwgHx_vu0-iyulMFcds92sd1f7SplQUfGh5O8kczNDjvdB3h4Z6GJV_xwoniU5tylJnzBvkxPqCpVkSTQzJloyXkDs6IeXbRieyf_pskDg9SqhlfdLFX7APdy2jIQD3mq0whevhliRfN2TISvo0KDICpXHG__c-6XY1de7yuYPcNY7627OhUr1_m37ejSmk6Tvu9pYcE68tH7kO9trbid7tCN4Og-Sty6JEMqIzlTnx2S5f-jz3s-MuOvWJy6N4rzHR34rxJ3oKJ_Wb4_uN0w0_mHZLKHx8BpVYEqwEnTakYl9pMA4T26mAclXC3fqhu6BCUsKZDWZ2ou0Hgge__yIL3i0Vf3ZTz8r9GPm519LXrFLk6s9tZhO27n-cfYQoVL841ZiUer6wgl3gyifMe8GGWwHZLMgs3wxIlrha-VSFzjCu7Orc8F9DGnvvcuFQcjD6rnlvTpvdgmvcV39riGO166bKMuOeiaGTCuDxtu4mhRMEhvy3I08p6qXh9_pLObwgSWsFHjuTlCTL0qn5UVaoNDLTi1_ZOC6j6ILlJs9wtuor2IfdK0FSHiXlU-6mayHKycGVy15M0WRaqO8iiB1cCmPl9MmDZqiVNXJpI7n5ifJquQvXUcyLDdD1l_LZYO5q-XJaEbcBK_jlDIXQHfjek83XJXjQ1CE_CKIrukPR14NFq4pPUHYkXj0p0gAz3-SpkijYq8OiMpsWPWF06UEnFO2MBDhPrua9EV54G5AOpMkhePE2L4TFUCwC7PVECg7ItZgeZVtb0pY6rIkafg3HrQ-BBfl8Q0-xxk4DAouc6BtEm6qrCK_zbTTFakJhHW-nIAqhF-7CJtnNHUolnuqQ=w2256-h1269-no?authuser=0"
          alt=""
        />
     <div className='px-0 md:px-10'>
      <h4 className='text-4xl text-light'>CEO of SwiftRepair</h4>
      <p className='font-bold text-1xl mt-1'>Swift-Cell-Phone-Repair</p>
      <div className='flex space-x-2 my-2'>
        <img
          className='h-10 w-10 rounded-full'
          src="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png"
          alt=''
           />
           <img
          className='h-10 w-10 rounded-full'
          src="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png"
          alt=''
           />
           <img
          className='h-10 w-10 rounded-full'
          src="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png"
          alt=''
           />
      </div>
      <p>Worked Start ..... End</p>
      <ul className='list-disc ml-5 space-y-4 text-lg'>
      <li>summery points</li>
      <li>summery points</li>
      <li>summery points</li>
      <li>summery points</li>
      <li>summery points</li>
      </ul>
     </div>
   </article>
  );
}