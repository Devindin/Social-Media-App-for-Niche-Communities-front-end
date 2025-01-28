import React from 'react'
import Diversity3Icon from '@mui/icons-material/Diversity3';

function HobbyCard({image,hobby}) {
  return (
    <div className='bg-[#8B5DFF] w-[400px] h-[420px]  flex flex-col items-center justify-center rounded-3xl'>
    <div className=' bg-white/30 backdrop-blur-sm  w-[400px] h-[420px] p-8 flex flex-col items-center justify-center rounded-3xl'>
      <img src={image} className=' w-[250px] h-[300px] rounded-b-full'  ></img>
      <h1 className='text-white text-[24px] font-bold'>{hobby}</h1>
      <button className='w-[300px] h-[60px] bg-[#E82561] rounded-2xl p-2 text-white cursor-pointer'>Join to community <Diversity3Icon className='text-white'/></button>
      </div>
    </div>
  )
}

export default HobbyCard
