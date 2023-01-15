import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience' 
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContectMe from '../components/ContectMe'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
         overflow-y-scroll overflow-x-hidden z-0 
         scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-green-700
         '>
      <Head>
        <title>Mohibs Portfolio</title>
      </Head>
     
     <Header />

     <section id='hero' className='snap-start'>
       <Hero />
     </section>

     <section id='about' className='snap-center'>
      <About />
     </section>

     <section id='experience' className='snap-center'>
      <Experience />
     </section>

     <section id='skills' className='snap-start' >
      <Skills />
     </section>

     <section id='projects' className='snap-start'>
      <Projects />
     </section>

     <section id="contctMe" className="snap-start">
      <ContectMe />
     </section>

     <Link href="#hero">
        <footer className='sticky w-full bottom-5 cursor-pointer'>
          <div className='flex items-center justify-center '>
          <img
           className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
              src='https://pbs.twimg.com/profile_images/1053717990171176962/rIDEHTl3_400x400.jpg'
           alt=''
           />
          </div>
        </footer>
     </Link>
     
    </div>

  )
}

export default Home
