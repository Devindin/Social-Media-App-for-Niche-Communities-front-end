import React from 'react'
import Header from '../Componnents/Header';  
import PageCard from '../Componnents/PageCard';  
import paperQuiling from "../assets/paperQuiling.jpg";
import Post from '../Componnents/Post';  
import profile from "../assets/profile.jpg";

function PaperQuillingCommunity() {
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
            image={paperQuiling }
            hobby="Paper Quiling "
            description="This is the paper quiling  community"
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
            image={paperQuiling } 
          />
          <Post
            profile={profile}
            name="Devindi Karunathilaka"
            caption="This is another dish"
            image={paperQuiling }
          />
          <Post
            profile={profile}
            name="Devindi Karunathilaka"
            caption="new dish"
            image={paperQuiling } 
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default PaperQuillingCommunity
