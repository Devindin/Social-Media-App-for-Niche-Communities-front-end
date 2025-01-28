import React from 'react'
import EditIcon from '@mui/icons-material/Edit';

function PageCard({image ,hobby , description }) {
  return (
    <div className='w-[440px] h-[540px] p-4 flex flex-col bg-[#321344]  rounded-2xl  items-center '>
    <img src={image} className='h-[300px] rounded-b-full'></img>
     <h1 className='text-white text-[40px]'>{hobby}</h1> 
     <p className='text-white text-[16px]'>{description}</p>
     <button className='w-[400px] h-[60px] flex rounded-lg bg-white/30 backdrop-blur-sm mt-4 items-center justify-center cursor-pointer gap-1'>
     <h1>Create a post</h1>
     <EditIcon/>
     </button>
    </div>
  )
}

export default PageCard
