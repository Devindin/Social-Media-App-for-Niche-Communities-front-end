import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Componnents/Header";
import PageCard from "../Componnents/PageCard";
import sewing from "../assets/sewing.jpg";
import Post from "../Componnents/Post";
import profile from "../assets/profile.jpg";
import CreatePost from "../Componnents/CreatePost";

function SewingCommunity() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState([]);
  const [posts, setPosts] = useState([]);
  const [community] = useState("Sewing");

  const togglePopup = () => {
    setShowPopup(!showPopup);
    setSelectedMedia([]); 
  };

  // Fetch posts 
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/getPosts/${community}`
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [community]);

  return (
    <div className="flex flex-col bg-[#FFF7D1] min-h-screen">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-10 bg-[#e1dddd] shadow-md">
        <Header />
      </div>

      <div className="grid grid-cols-3 mt-[100px]">
        {/* Fixed PageCard */}
        <div className="col-span-1 ml-[100px]">
          <div className="fixed top-[120px]">
            <PageCard
              image={sewing}
              hobby="Sewing"
              description="This is the sewing community"
              togglePopup={togglePopup}
            />
          </div>
        </div>

        {/* Scrollable Post Section */}
        <div className="col-span-2 flex justify-center overflow-y-auto">
          <div className="flex flex-col gap-4 p-4">
            {posts.length === 0 ? (
              <p>No posts yet.</p>
            ) : (
              posts.map((post) => (
                <Post
                  key={post._id}
                  profile={profile}
                  name={post.name}
                  caption={post.caption}
                  images={post.media} 
                />
              ))
            )}
          </div>
        </div>
      </div>

      {/* Render CreatePost at the top level */}
      {showPopup && (
        <CreatePost
          showPopup={showPopup}
          togglePopup={togglePopup}
          selectedMedia={selectedMedia}
          setSelectedMedia={setSelectedMedia}
          hobby={community}
        />
      )}
    </div>
  );
}

export default SewingCommunity;
