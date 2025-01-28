import React from 'react';
import Header from '../Componnents/Header';
import PageCard from '../Componnents/PageCard';
import sewing from '../assets/sewing.jpg';
import Post from '../Componnents/Post';
import profile from '../assets/profile.jpg';
import postimage from '../assets/sewing.jpg';

function SewingCommunity() {
  return (
    <div className="flex flex-col  bg-[#FFF7D1]">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-10 bg-[#e1dddd] shadow-md">
        <Header />
      </div>

      <div className="grid grid-cols-3 mt-[100px] h-full">
        {/* Fixed PageCard */}
        <div className="col-span-1 justify-end ml-[100px] h-full ">
          <div className="fixed top-[120px]">
            <PageCard
              image={sewing}
              hobby="Sewing"
              description="This is the sewing community"
            />
          </div>
        </div>

        {/* Scrollable Post Section */}
        <div className="col-span-2 flex justify-center overflow-y-auto h-full">
          <div className="flex flex-col gap-4 p-4">
            <Post
              profile={profile}
              name="Devindi Karunathilaka"
              caption="This is my new frock"
              image={postimage}
            />
            <Post
              profile={profile}
              name="Devindi Karunathilaka"
              caption="This is another frock I made"
              image={postimage}
            />
            <Post
              profile={profile}
              name="Devindi Karunathilaka"
              caption="Sewing is my passion!"
              image={postimage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SewingCommunity;
