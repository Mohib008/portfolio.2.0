import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import mohib  from "../public/mohib.jpg";
import  Link  from 'next/link';



type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, This is Mohib Arsala",
            "Guys-who-love-NextJs/tsx",
            "<ButLoveToCodeMore/>",
        ],
        loop: true,
        delaySpeed: 2000,
    });


  return (
    <div className='h-screen flex flex-col overflow-hidden text-center justify-center 
    space-y-8 items-center'>
        <BackgroundCircles />
        <img 
         src="mohib.jpg" 
         alt=""
         className='relative rounded-full h-32 w-32 mx-auto object-cover'
         />

        <div className='z-20'>
          <h2 className='text-sm text-gray-500 uppercase tracking-[15px]'>
            Software Engineer
          </h2>
          <h1 className='text-5xl lg:6xl text-samibold text-gray-500'>
              <span>{text}</span>
              <Cursor cursorColor="#F7AB0A" />
          </h1>
          <div className="pt-5" />
          <Link href="#about">
          <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
          <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
          <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
          <button className="heroButton">Projects</button>
          </Link>
        </div>
    </div>
  )
}

export default Hero