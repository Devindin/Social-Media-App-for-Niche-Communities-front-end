import React from 'react'
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

function Post({profile, name , caption , image} ) {
  return (
    <div className='w-[700px] h-auto flex flex-col rounded-lg bg-white/30 backdrop-blur-sm p-8 space-y-4  border-1 border-[#b497c4]'>
      <div className='flex flex-row justify-start items-center gap-2'>
       <img src={profile} alt="" className="rounded-full w-[50px]" />
       <h1>{name}</h1>
      </div>
      <div>
        <p>{caption}</p>
      </div>
      <div className='flex items-center justify-center'>
        <img src={image} alt="" className="w-[500px] " />
      </div>
      <hr className='bg-[#b497c4]'></hr>
      <div className='flex flex-row items-center justify-between ml-20 mr-20'>
      <ThumbUpOutlinedIcon className='text-[#E82561] cursor-pointer'/>
      <SmsOutlinedIcon className='text-[#E82561] cursor-pointer'/>
      <SendOutlinedIcon className='text-[#E82561] cursor-pointer'/>
      <BookmarkBorderOutlinedIcon className='text-[#E82561] cursor-pointer'/>
      </div>
    </div>
  )
}

export default Post
