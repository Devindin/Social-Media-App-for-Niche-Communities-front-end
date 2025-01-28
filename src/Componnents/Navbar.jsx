import React from 'react'
import Profile from "../assets/profile.jpg"
import SignIn from '../Pages/SignIn'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();

  const handleSignIn=()=>{
   navigate("/signin");
  }

  const handleSingUp=()=>{
    navigate("/signup");
  }

  const handleProfile=()=>{
    navigate("/profile");
  }

  return (
    
    <div className='bg-[#8B5DFF] w-full h-[100px] rounded-2xl flex flex-row justify-end gap-20 items-center p-8'>
      <button className='bg-[#FFD65A] p-4 rounded-2xl w-[100px] h-[50px] cursor-pointer' onClick={handleSignIn}>Sign In</button>
      <button className='bg-[#FFD65A] p-4 rounded-2xl w-[100px] h-[50px] cursor-pointer' onClick={handleSingUp}>Sign Up</button>
      <img src={Profile} className='rounded-full w-[50px] cursor-pointer'onClick={handleProfile}></img>
    </div>
  )
}

export default Navbar
