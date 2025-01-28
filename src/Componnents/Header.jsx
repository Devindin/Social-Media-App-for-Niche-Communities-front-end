import React from 'react'
import Profile from "../assets/profile.jpg"
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FaceIcon from '@mui/icons-material/Face';

function Header() {
  return (
    <div className='bg-[#8B5DFF] w-full h-[80px] rounded-2xl flex flex-row justify-end gap-[180px] items-center p-8 '>
    <HomeIcon fontSize="large" sx={{ fontSize: '30px' }} className='text-[#FFF7D1]'/>
    <FaceIcon fontSize="large" sx={{ fontSize: '30px' }} className='text-[#FFF7D1]'/>
    <NotificationsIcon fontSize="large" sx={{ fontSize: '30px' }} className='text-[#FFF7D1]'/>
    
          
    <img src={Profile} className='rounded-full w-[50px]'></img>
    </div>
  )
}

export default Header
