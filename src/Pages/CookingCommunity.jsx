import React from 'react'
import Header from '../Componnents/Header'
import PageCard from '../Componnents/PageCard'
import cooking from "../assets/cooking.jpg"
import Post from '../Componnents/Post'
import profile from "../assets/profile.jpg"

function CookingCommunity() {
  return (
    <div className="flex flex-col  bg-[#e1dddd]">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-10 bg-[#e1dddd] shadow-md">
        <Header />
      </div>

      <div className="grid grid-cols-3 mt-[100px] h-full">
        {/* Fixed PageCard */}
        <div className="col-span-1 justify-end ml-[100px] h-full ">
          <div className="fixed top-[120px]">
            <PageCard
              image={cooking }
              hobby="cooking "
              description="This is the cooking community"
            />
          </div>
        </div>

        {/* Scrollable Post Section */}
        <div className="col-span-2 flex justify-center overflow-y-auto h-full">
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
    </div>
  )
}

export default CookingCommunity
