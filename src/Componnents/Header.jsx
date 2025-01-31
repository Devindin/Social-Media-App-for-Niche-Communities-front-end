import React from 'react'
import Profile from "../assets/profile.jpg"
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleIcon from '@mui/icons-material/People';
import { Navigate, useNavigate } from 'react-router-dom';
import FavoriteIcon from "@mui/icons-material/Favorite";

function Header() {
   const navigate = useNavigate();
   const handleprofileClick=()=>{
    navigate("/profile")
   }

   
  return (
    <div className='bg-[#8B5DFF] w-full h-[80px] rounded-2xl flex flex-row  items-center p-8 '>
      <h1 className='text-[#8d052e] font-bold text-[30px] ml-10'>Interestly</h1>
      <FavoriteIcon
            fontSize="large"
            sx={{ fontSize: "30px" }}
            className="text-[#8d052e]"
          />

      <div className="w-full flex flex-row justify-end gap-[180px] items-center  p-8">
      <HomeIcon fontSize="large" sx={{ fontSize: '30px' }} className='text-[#FFF7D1]' />
    <PeopleIcon fontSize="large" sx={{ fontSize: '30px' }} className='text-[#FFF7D1]'/>
    <NotificationsIcon fontSize="large" sx={{ fontSize: '30px' }} className='text-[#FFF7D1]'/>
    <img src={Profile} className='rounded-full w-[50px] cursor-pointer' onClick={handleprofileClick}></img>
      </div>
      
    
    
          
    
    </div>
  )
}

export default Header
