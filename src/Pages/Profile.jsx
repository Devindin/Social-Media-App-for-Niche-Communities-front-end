import React from "react";
import bg from "../assets/background.jpg";
import profile from "../assets/profile.jpg";
import ProfileCard from "../Componnents/ProfileCard";
import Post from "../Componnents/Post";
import cooking from "../assets/cooking.jpg";

function Profile() {
  return (
    <div className="w-full h-screen flex flex-col bg-[#FFF7D1] overflow-hidden">
      {/* ✅ Background Image - Fixed */}
      <div className="fixed top-0 left-0 w-full h-[300px]">
        <img
          src={bg}
          className="w-full h-full object-cover"
          alt="Background"
        />
      </div>

      {/* ✅ Profile Image (Inside Fixed Container) */}
      <div className="fixed top-[35%] left-[70%] transform -translate-x-[50%] -translate-y-[80%] rounded-full w-[280px] h-[280px] border-4 border-white shadow-lg overflow-hidden">
        <img src={profile} className="w-full h-full object-cover" alt="Profile" />
      </div>

      {/* ✅ Content - Scrollable */}
      <div className="mt-[350px] h-[calc(100vh-350px)] overflow-y-auto p-8">
        <div className="grid grid-cols-2 gap-4">
          {/* Left Section */}
          <div>
            <ProfileCard />
          </div>

          {/* Right Section - Posts */}
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
              caption="New dish"
              image={cooking}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
