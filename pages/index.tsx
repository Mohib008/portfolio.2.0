import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen'>
      <Head>
        <title>Mohib's Portfolio</title>
      </Head>
     
     <Header />

     <Hero />

     {/*about*/}

     {/*experince*/}

     {/*skilles*/}

     {/*Projects*/}

     {/*contect me */}
     
    </div>

  )
}

export default Home
