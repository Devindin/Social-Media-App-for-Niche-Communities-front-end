import React from 'react'
import Heroimage from "../assets/heroImage.png"
import FavoriteIcon from '@mui/icons-material/Favorite';

function Hero() {
  return (
    <div className='flex flex-row  mt-10 items-center justify-center '>
        <img src={Heroimage} className='w-[500px] rounded-3xl'></img>
        <div className='flex flex-col  justify-center ml-10'>
        <h1 className='text-[160px] text-[#E82561] font-bold'> Interestly </h1>
        <p className="font-bold text-[#500073]">Playful and modern, focusing on shared interests.</p>
        </div>
    </div>
  )
}

export default Hero
