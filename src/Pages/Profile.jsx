import React from "react";
import bg from "../assets/background.jpg";
import profile from "../assets/profile.jpg";
import ProfileCard from "../Componnents/ProfileCard";
import Post from "../Componnents/Post";
import cooking from "../assets/cooking.jpg"

function Profile() {
  return (
    <div className="w-full h-full flex flex-col bg-[#FFF7D1] p-8">
      <div className="relative w-full h-[300px] overflow-hidden">
        {/* Background Image */}
        <img src={bg} className="w-full h-full object-cover rounded-2xl" alt="Background" />

        {/* Circle */}
        <div className="flex flex-col absolute top-[50%] left-[70%] transform -translate-x-[50%] -translate-y-[48%] rounded-full w-[280px] h-[280px] border-4 border-white shadow-lg overflow-hidden">
          <img
            src={profile}
            className="w-full h-full object-cover"
            alt="Profile"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 ">
        <div>
         <ProfileCard/>
        </div>
        
        <div className="flex flex-col gap-4 p-4">
            <Post
              profile={profile}
              name="Devindi Karunathilaka"
              caption="This is my new dish"
              image={cooking}
            />
            <Post
              profile={profile}
              name="Devindi Karunathilaka"
              caption="This is another dish"
              image={cooking}
            />
            <Post
              profile={profile}
              name="Devindi Karunathilaka"
              caption="new dish"
              image={cooking}
            />
          
        
      </div>
        </div>
      </div>
    
  );
}

export default Profile;
