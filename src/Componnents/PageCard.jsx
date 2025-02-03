import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import CreatePost from "./CreatePost";

function PageCard({ image, hobby, description }) {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState([]);

  const togglePopup = () => {
    setShowPopup(!showPopup);
    setSelectedMedia([]); // Reset media selection when closing popup
  };

  return (
    <div className="w-[440px] h-[540px] p-4 flex flex-col bg-[#321344] rounded-2xl items-center">
      <img src={image} className="h-[300px] rounded-b-full" alt="Hobby" />
      <h1 className="text-white text-[40px]">{hobby} Community</h1>
      <p className="text-white text-[16px] text-center px-4">{description}</p>
      <button
        className="w-[400px] h-[60px] flex rounded-lg bg-white/30 backdrop-blur-sm mt-4 items-center justify-center cursor-pointer gap-1 text-white hover:bg-white/40 transition"
        onClick={togglePopup}
      >
        <h1>Create a post</h1>
        <EditIcon />
      </button>

      {showPopup && (
        <CreatePost
          profile={image}
          showPopup={showPopup}
          togglePopup={togglePopup}
          selectedMedia={selectedMedia}
          setSelectedMedia={setSelectedMedia}
          hobby={hobby} // Pass the hobby as the community name
        />
      )}
    </div>
  );
}

export default PageCard;
