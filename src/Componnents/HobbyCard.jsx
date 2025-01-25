import React from 'react'

function HobbyCard({image,hobby}) {
  return (
    <div className='bg-[#8B5DFF] w-[400px] h-[400px] p-8 flex flex-col items-center justify-center rounded-3xl'>
      <img src={image} className=' w-[250px] h-[300px] rounded-b-full'  ></img>
      <h1 className='text-white text-[24px] font-bold'>{hobby}</h1>
    </div>
  )
}

export default HobbyCard
