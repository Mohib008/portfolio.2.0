import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, The Name's Mohib Arsala",
            "Guy who love to learn more about JS & React.tsx",
            "I Love to code everyday & learn about all languages",
        ],
        loop: true,
        delaySpeed: 2000,
    });


  return (
    <div>
        <BackgroundCircles />
        <h1>
            <span>{text}</span>
            <Cursor cursorColor="#F7AB0A" />
        </h1>
    </div>
  )
}

export default Hero