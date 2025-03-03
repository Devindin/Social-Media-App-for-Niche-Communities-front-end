import React, { useState, useEffect } from "react";
import axios from "axios";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useNavigate } from "react-router-dom";

function Post({ postId, profile, name, caption, images, userId }) {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  const [loggedUserName, setLoggedUserName] = useState("");
  const [saved, setSaved] = useState(false);

  // Add function to fetch logged user details
  const fetchLoggedUserDetails = async () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (!token || !userId) return;

    try {
      const response = await axios.get(
        `http://localhost:3001/getUser/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setLoggedUserName(response.data.name);
    } catch (err) {
      console.error("Error fetching user details:", err);
    }
  };

  const fetchLikeStatus = async () => {
    const token = localStorage.getItem("token");
    if (!postId || !token) return;

    try {
      const res = await axios.get(
        `http://localhost:3001/api/posts/${postId}/like-status`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLikes(res.data.likes);
      setLiked(res.data.liked);
      setError(null);
    } catch (err) {
      console.error("Error fetching like status:", err);
      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        navigate("/signin");
      }
    }
  };

  const handleLike = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
      return;
    }

    try {
      const res = await axios.post(
        `http://localhost:3001/api/posts/${postId}/like`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setLikes(res.data.likes);
      setLiked(res.data.liked);
      setError(null);
    } catch (err) {
      console.error("Error liking post:", err);
      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        navigate("/signin");
      } else {
        setError(err.response?.data?.error || "Failed to update like status");
      }
    }
  };

  // Add this function to fetch comments
  const fetchComments = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3001/api/posts/${postId}/comments`
      );
      setComments(res.data);
    } catch (err) {
      console.error("Error fetching comments:", err);
    }
  };

  // Update handleCommentSubmit to use logged user's name
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
      return;
    }

    try {
      const res = await axios.post(
        `http://localhost:3001/api/posts/${postId}/comments`,
        {
          content: newComment,
          userName: loggedUserName, // Use logged user's name instead of post creator's name
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setComments([...comments, res.data]);
      setNewComment("");
    } catch (err) {
      console.error("Error posting comment:", err);
      setError("Failed to post comment");
    }
  };

  // Update useEffect to fetch user details
  useEffect(() => {
    fetchLikeStatus();
    fetchComments();
    fetchLoggedUserDetails();
    fetchSaveStatus();
  }, [postId]);

  const handleImageClick = (index) => {
    setSelectedImage(images[index]);
    setCurrentImageIndex(index);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentImageIndex(newIndex);
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentImageIndex + 1) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentImageIndex(newIndex);
  };

  const closeImageView = () => {
    setSelectedImage(null);
  };

  // Add function to fetch save status
  const fetchSaveStatus = async () => {
    const token = localStorage.getItem("token");
    if (!postId || !token) return;
  
    try {
      const res = await axios.get(
        `http://localhost:3001/api/posts/${postId}/save-status`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSaved(res.data.saved);
    } catch (err) {
      console.error("Error fetching save status:", err);
    }
  };

  
  // Add handle save function
  const handleSave = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
      return;
    }
  
    try {
      const res = await axios.post(
        `http://localhost:3001/api/posts/${postId}/save`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSaved(res.data.saved);
    } catch (err) {
      console.error("Error saving post:", err);
      setError("Failed to save post");
    }
  };


  return (
    <div className="w-[700px] flex flex-col rounded-lg bg-white/30 backdrop-blur-sm p-8 space-y-4 border border-[#b497c4]">
      {/* User Info */}
      <div className="flex items-center gap-2">
        <img src={profile} alt="Profile" className="rounded-full w-[50px]" />
        <h1>{name}</h1>
        <div classname="flex flex-col">
            <h1></h1>
        </div>
      </div>

      {/* Caption */}
      <p>{caption}</p>

      {/* Images */}
      {images?.length > 0 && (
        <div className={`grid ${images.length > 1 ? "grid-cols-4" : "grid-cols-1"} gap-2`}>
          {images.map((img, idx) => (
            <img
              key={idx}
              src={`http://localhost:3001/uploads/${img}`}
              alt={`post-${idx}`}
              className="object-cover w-full h-full rounded-md cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => handleImageClick(idx)}
            />
          ))}
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeImageView}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full mx-4">
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
              onClick={closeImageView}
            >
              <CloseIcon fontSize="large" />
            </button>

            {images.length > 1 && (
              <>
                <button 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
                  onClick={handlePrevImage}
                >
                  <ArrowBackIosNewIcon fontSize="large" />
                </button>
                <button 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
                  onClick={handleNextImage}
                >
                  <ArrowForwardIosIcon fontSize="large" />
                </button>
              </>
            )}
          
          <img
              src={`http://localhost:3001/uploads/${selectedImage}`}
              alt="Selected"
              className="max-h-[90vh] max-w-full mx-auto object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <hr className="bg-[#b497c4]" />

      {/* Interaction Buttons */}

      <div className="flex flex-row items-center justify-between">
        {/* Like Button */}
        <div className="flex items-center cursor-pointer" onClick={handleLike}>
          {liked ? (
            <ThumbUpIcon className="text-[#E82561]" />
          ) : (
            <ThumbUpOutlinedIcon className="text-[#E82561]" />
          )}
          <span className="ml-1">{likes}</span>
        </div>

        {/* Comment Button */}
        <button
          className="flex items-center gap-2 text-[#E82561] font-medium hover:opacity-80 transition-opacity"
          onClick={() => setShowComments(!showComments)}
        >
          {showComments ? (
            <ChatBubbleIcon className="text-[#E82561]" />
          ) : (
            <ChatBubbleOutlineIcon className="text-[#E82561]" />
          )}
          <span className="text-sm">({comments.length})</span>
        </button>

         {/* Save Button */}
         <div className="flex items-center cursor-pointer" onClick={handleSave}>
            {saved ? (
              <BookmarkIcon className="text-[#E82561]" />
            ) : (
              <BookmarkBorderIcon className="text-[#E82561]" />
            )}
          </div>
        
      </div>

      
      {/* Comments Section */}
      {showComments && (
        <div className="mt-4 space-y-4">
          {/* Comment Form */}
          <form onSubmit={handleCommentSubmit} className="flex gap-2">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
              className="flex-1 rounded-lg p-2 bg-white/50 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#E82561] text-white rounded-lg"
              disabled={!newComment.trim()}
            >
              Post
            </button>
          </form>

          {/* Comments List */}
          <div className="space-y-2">
            {comments.map((comment, index) => (
              <div key={index} className="bg-white/50 p-3 rounded-lg">
                <div className="font-medium text-[#E82561]">
                  {comment.userName}
                </div>
                <div>{comment.content}</div>
                <div className="text-xs text-gray-500">
                  {new Date(comment.createdAt).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Error Message */}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}

export default Post;
