import React from 'react';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

function Post({ profile, name, caption, images }) {
  return (
    <div className='w-[700px] h-auto flex flex-col rounded-lg bg-white/30 backdrop-blur-sm p-8 space-y-4 border border-[#b497c4]'>
      <div className='flex flex-row justify-start items-center gap-2'>
        <img src={profile} alt="Profile" className="rounded-full w-[50px]" />
        <h1>{name}</h1>
      </div>

      <div>
        <p>{caption}</p>
      </div>

      {/* Render images if available */}
      {images && images.length > 0 && (
        <div className={`grid ${images.length > 1 ? 'grid-cols-4' : 'grid-cols-1'} gap-2`}>
          {images.map((img, idx) => (
            <img
              key={idx}
              src={`http://localhost:3001/uploads/${img}`}
              alt={`post-${idx}`}
              className="object-cover w-full h-full rounded-md"
            />
          ))}
        </div>
      )}

      <hr className='bg-[#b497c4]' />

      <div className='flex flex-row items-center justify-between ml-20 mr-20'>
        <ThumbUpOutlinedIcon className='text-[#E82561] cursor-pointer' />
        <SmsOutlinedIcon className='text-[#E82561] cursor-pointer' />
        <SendOutlinedIcon className='text-[#E82561] cursor-pointer' />
        <BookmarkBorderOutlinedIcon className='text-[#E82561] cursor-pointer' />
      </div>
    </div>
  );
}

export default Post;
