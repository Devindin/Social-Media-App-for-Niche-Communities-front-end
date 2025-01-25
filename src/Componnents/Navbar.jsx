import React from 'react'
import Profile from "../assets/sewing.jpg"

function Navbar() {
  return (
    <div className='bg-[#8B5DFF] w-full h-[100px] rounded-2xl flex flex-row justify-end gap-20 items-center p-8'>
      <button className='bg-[#FFD65A] p-4 rounded-2xl w-[100px] h-[50px]'>Sign In</button>
      <button className='bg-[#FFD65A] p-4 rounded-2xl w-[100px] h-[50px]'>Sign Up</button>
      <img src={Profile} className='rounded-full w-[50px]'></img>
    </div>
  )
}

export default Navbar
