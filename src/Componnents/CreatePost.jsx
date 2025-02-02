import React, { useState, useEffect } from "react";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import axios from "axios";

function CreatePost({
  profile,
  showPopup,
  togglePopup,
  selectedMedia,
  setSelectedMedia,
  setShowAllMedia,
}) {
  const [userData, setUserData] = useState(null);
  const [caption, setCaption] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem("userId");
      if (userId) {
        try {
          const response = await axios.get(`http://localhost:3001/getUser/${userId}`);
          setUserData(response.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };
    fetchUserData();
  }, []);

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    setSelectedMedia((prevMedia) => [...prevMedia, ...newFiles]); // Append new files
  };

  const removeMedia = (index) => {
    setSelectedMedia((prevMedia) => prevMedia.filter((_, i) => i !== index));
  };

  const handlePost = async () => {
    if (!userData) return;

    const formData = new FormData();
    formData.append("name", userData.name);
    formData.append("caption", caption);
    formData.append("createdAt", new Date().toISOString());

    selectedMedia.forEach((file) => {
      formData.append("media", file);
    });

    try {
      await axios.post("http://localhost:3001/addPost", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Post added successfully!");
      setCaption("");
      setSelectedMedia([]);
      togglePopup();
    } catch (error) {
      console.error("Error adding post:", error);
      alert("Failed to add post");
    }
  };

  if (!showPopup) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="w-[600px] max-h-[80vh] bg-white p-6 rounded-xl shadow-lg relative overflow-y-auto">
        <div className="flex flex-row justify-start items-center gap-2">
          <img src={profile} alt="Profile" className="rounded-full w-[50px]" />
          <h1>{userData ? userData.name : "Loading..."}</h1>
        </div>

        <textarea
          className="w-full h-[150px] p-2 border border-gray-300 rounded-md mt-2"
          placeholder="Write something..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />

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
          onChange={handleFileChange}
        />

        {selectedMedia.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-2">
            {selectedMedia.map((media, index) => {
              const mediaUrl = URL.createObjectURL(media);
              return (
                <div key={index} className="relative">
                  {media.type.startsWith("image/") ? (
                    <img
                      src={mediaUrl}
                      alt="Selected"
                      className="w-full h-[100px] object-cover rounded-md"
                    />
                  ) : media.type.startsWith("video/") ? (
                    <video
                      src={mediaUrl}
                      controls
                      className="w-full h-[100px] object-cover rounded-md"
                    />
                  ) : (
                    <div className="text-red-500">Invalid file type</div>
                  )}
                  <button
                    onClick={() => removeMedia(index)}
                    className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full p-1"
                  >
                    ✖
                  </button>
                </div>
              );
            })}
          </div>
        )}

        <button
          onClick={handlePost}
          className="w-full mt-4 bg-[#8B5DFF] text-white p-2 rounded-md cursor-pointer"
        >
          Post
        </button>

        <button
          className="absolute top-2 right-2 text-red-500 font-bold cursor-pointer"
          onClick={togglePopup}
        >
          ✖
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
