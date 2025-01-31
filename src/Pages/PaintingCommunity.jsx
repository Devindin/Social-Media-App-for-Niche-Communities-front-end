import React from 'react'
import Header from '../Componnents/Header';  
import PageCard from '../Componnents/PageCard';  
import painting from "../assets/painting.jpg";
import Post from '../Componnents/Post';  
import profile from "../assets/profile.jpg";

function PaintingCommunity() {
  return (
    <div className="flex flex-col bg-[#FFF7D1]">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-10 bg-[#e1dddd] shadow-md">
        <Header />
      </div>

      <div className="grid grid-cols-3 mt-[100px]">
        {/* Fixed PageCard */}
        <div className="col-span-1 justify-end ml-[100px]">
          <div className="fixed top-[120px]">
            <PageCard
              image={painting}
              hobby="Painting"
              description="This is the painting community"
            />
          </div>
        </div>

        {/* Scrollable Post Section */}
        <div className="col-span-2 flex justify-center overflow-y-auto">
          <div className="flex flex-col gap-4 p-4">
            <Post
              profile={profile}
              name="Devindi Karunathilaka"
              caption="This is my new dish"
              image={painting} 
            />
            <Post
              profile={profile}
              name="Devindi Karunathilaka"
              caption="This is another dish"
              image={painting}
            />
            <Post
              profile={profile}
              name="Devindi Karunathilaka"
              caption="new dish"
              image={painting} 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaintingCommunity
