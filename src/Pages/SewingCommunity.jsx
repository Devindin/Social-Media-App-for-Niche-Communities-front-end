import React, { useState } from "react";
import Header from "../Componnents/Header";
import PageCard from "../Componnents/PageCard";
import sewing from "../assets/sewing.jpg";
import Post from "../Componnents/Post";
import profile from "../assets/profile.jpg";
import postimage from "../assets/sewing.jpg";
import CreatePost from "../Componnents/CreatePost";

function SewingCommunity() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState([]);
  const [showAllMedia, setShowAllMedia] = useState(false);
  const [community, setCommunity] = useState("Sewing");
  const [user] = useState({ name: "Devindi Karunathilaka" });

  const togglePopup = () => {
    setShowPopup(!showPopup);
    setSelectedMedia([]); // Clear media when closing popup
    setShowAllMedia(false); // Reset media view
  };

  return (
    <div className="flex flex-col bg-[#FFF7D1]">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-10 bg-[#e1dddd] shadow-md">
        <Header />
      </div>

      <div className="grid grid-cols-3 mt-[100px] h-full">
        {/* Fixed PageCard */}
        <div className="col-span-1 justify-end ml-[100px] h-full">
          <div className="fixed top-[120px]">
            <PageCard image={sewing} hobby="Sewing" description="This is the sewing community" togglePopup={togglePopup} />
          </div>
        </div>

        {/* Scrollable Post Section */}
        <div className="col-span-2 flex justify-center overflow-y-auto h-full">
          <div className="flex flex-col gap-4 p-4">
            <Post profile={profile} name="Devindi Karunathilaka" caption="This is my new frock" image={postimage} />
            <Post profile={profile} name="Devindi Karunathilaka" caption="This is another frock I made" image={postimage} />
            <Post profile={profile} name="Devindi Karunathilaka" caption="Sewing is my passion!" image={postimage} />
          </div>
        </div>
      </div>

      <CreatePost
        profile={profile}
        showPopup={showPopup}
        togglePopup={togglePopup}
        selectedMedia={selectedMedia}
        setSelectedMedia={setSelectedMedia}
        setShowAllMedia={setShowAllMedia}
        showAllMedia={showAllMedia}
      />
    </div>
  );
}

export default SewingCommunity;
