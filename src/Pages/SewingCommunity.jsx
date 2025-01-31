import React, { useState } from "react";
import Header from "../Componnents/Header";
import PageCard from "../Componnents/PageCard";
import sewing from "../assets/sewing.jpg";
import Post from "../Componnents/Post";
import profile from "../assets/profile.jpg";
import postimage from "../assets/sewing.jpg";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import axios from "axios";

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

  const handleMediaSelection = (event) => {
    const files = Array.from(event.target.files);
    const fileURLs = files.map((file) => URL.createObjectURL(file)); // Create preview URLs
    setSelectedMedia(fileURLs);
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
            <PageCard
              image={sewing}
              hobby="Sewing"
              description="This is the sewing community"
              togglePopup={togglePopup} // Pass function to PageCard
            />
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

      {/* Popup */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="w-[600px] max-h-[80vh] bg-white p-6 rounded-xl shadow-lg relative overflow-y-auto">
            <div className="flex flex-row justify-start items-center gap-2">
              <img src={profile} alt="" className="rounded-full w-[50px]" />
              <h1>Devindi Karunathilaka</h1>
            </div>
            <textarea className="w-full h-[150px] p-2 border border-gray-300 rounded-md mt-2" placeholder="Write something..." />

            {/* File Upload Button */}
            <label htmlFor="media-upload" className="cursor-pointer flex items-center mt-4 text-blue-500">
              <PermMediaIcon className="mr-2" />
              Select Photos/Videos
            </label>
            <input
              id="media-upload"
              type="file"
              accept="image/*,video/*"
              multiple
              className="hidden"
              onChange={handleMediaSelection}
            />

            {/* Display selected media */}
            {selectedMedia.length > 0 && (
              <div className="mt-4">
                {showAllMedia ? (
                  // Show all media in a grid
                  <div className="grid grid-cols-3 gap-2">
                    {selectedMedia.map((media, index) => (
                      <img key={index} src={media} alt="Selected Media" className="w-full h-[100px] object-cover rounded-md" />
                    ))}
                  </div>
                ) : (
                  // Show only first 4 items in a 2x2 collage
                  <div className="grid grid-cols-2 gap-2 relative">
                    {selectedMedia.slice(0, 4).map((media, index) => (
                      <img key={index} src={media} alt="Selected Media" className="w-full h-[100px] object-cover rounded-md" />
                    ))}
                    {selectedMedia.length > 4 && (
                      <button
                        className="absolute bottom-2 right-2 bg-black/50 text-white p-2 rounded-md"
                        onClick={() => setShowAllMedia(true)}
                      >
                        +{selectedMedia.length - 4} more
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Close Button */}
            <button className="absolute top-2 right-2 text-red-500 font-bold cursor-pointer" onClick={togglePopup}>
              ✖
            </button>

            {/* Post Button */}
            <button className="w-full mt-4 bg-[#8B5DFF] text-white p-2 rounded-md cursor-pointer">
              Post
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SewingCommunity;
