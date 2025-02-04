import React, { useState, useEffect } from "react";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import axios from "axios";
import profile from "../assets/profile.jpg";

function CreatePost({ showPopup, togglePopup, selectedMedia, setSelectedMedia, hobby }) {
  const [userData, setUserData] = useState(null);
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);

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

  const handleMediaSelection = (event) => {
    const files = Array.from(event.target.files);
    setSelectedMedia((prevMedia) => [...prevMedia, ...files]);
  };

  const handleSubmit = async () => {
    if (!caption || selectedMedia.length === 0) {
      alert("Caption and media are required!");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("name", userData?.name || "Anonymous");
    formData.append("caption", caption);
    formData.append("createdAt", new Date().toISOString());
    formData.append("community", hobby); // Get community name from props

    selectedMedia.forEach((file) => {
      formData.append("media", file);
    });

    try {
      const response = await axios.post("http://localhost:3001/addPost", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert(response.data.message);
      setCaption("");
      setSelectedMedia([]);
      togglePopup(); // Close popup after submission
    } catch (error) {
      console.error("Error adding post:", error);
      alert("Failed to create post!");
    } finally {
      setLoading(false);
    }
  };

  if (!showPopup) return null;

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showPopup]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="w-[600px] max-h-[80vh] bg-white p-6 rounded-xl shadow-lg relative overflow-y-auto">
        <button
          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 text-xs"
          onClick={togglePopup}
        >
          ✕
        </button>

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
          multiple
          accept="image/*,video/*"
          onChange={handleMediaSelection}
          className="hidden"
        />

        <div className="mt-4 flex flex-wrap gap-2">
          {selectedMedia.map((file, index) => (
            <div key={index} className="relative w-[100px] h-[100px]">
              <img src={URL.createObjectURL(file)} alt="Preview" className="w-full h-full object-cover rounded-md" />
              <button
                className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs"
                onClick={() => setSelectedMedia(selectedMedia.filter((_, i) => i !== index))}
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white p-2 rounded-lg mt-4"
          disabled={loading}
        >
          {loading ? "Posting..." : "Post"}
        </button>
      </div>
    </div>
  );
}

export default CreatePost;