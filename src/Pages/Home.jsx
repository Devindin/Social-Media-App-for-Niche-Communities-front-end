import React from 'react'
import Navbar from '../Componnents/Navbar'
import Hero from '../Componnents/Hero'
import Hobbies from '../Componnents/Hobbies'

function Home() {
  return (
    <div className='bg-[#FFF7D1] w-full h-full p-6'>
      <Navbar/>
      <Hero/>
      <Hobbies/>
    </div>
  )
}

export default Home
