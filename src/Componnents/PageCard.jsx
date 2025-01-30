import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";

function PageCard({ image, hobby, description }) {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <div className="w-[440px] h-[540px] p-4 flex flex-col bg-[#321344] rounded-2xl items-center">
        <img src={image} className="h-[300px] rounded-b-full" alt="Hobby" />
        <h1 className="text-white text-[40px]">{hobby}</h1>
        <p className="text-white text-[16px]">{description}</p>
        <button
          className="w-[400px] h-[60px] flex rounded-lg bg-white/30 backdrop-blur-sm mt-4 items-center justify-center cursor-pointer gap-1"
          onClick={togglePopup}
        >
          <h1>Create a post</h1>
          <EditIcon />
        </button>
      </div>

      {/* Centered Popup */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="w-[500px] h-[400px] bg-white p-6 rounded-xl shadow-lg relative">
            <h1 className="text-black text-lg font-bold">Create a post</h1>
            <textarea
              className="w-full h-[200px] p-2 border border-gray-300 rounded-md mt-2"
              placeholder="Write something..."
            />
            <button
              className="absolute top-2 right-2 text-red-500 font-bold cursor-pointer"
              onClick={togglePopup}
            >
              ✖
            </button>
            <button className="w-full mt-4 bg-blue-500 text-white p-2 rounded-md">
              Post
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PageCard;
