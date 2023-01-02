import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import { mohib } from "../public/mohib.jpg";


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

        <div>
          <h2 className='text-sm text-gray-500 uppercase tracking-[15px]'>
            Software Engineer
          </h2>
          <h1 className='text-5xl lg:6xl text-samibold text-gray-500'>
              <span>{text}</span>
              <Cursor cursorColor="#F7AB0A" />
          </h1>
          <div className="div" />
          <button className="heroButton">About</button>
          <button className="heroButton">Experience</button>
          <button className="heroButton">Skills</button>
          <button className="heroButton">Projects</button>
        </div>
    </div>
  )
}

export default Hero