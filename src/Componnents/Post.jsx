import React, { useState, useEffect } from "react";
import axios from "axios";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { useNavigate } from "react-router-dom";

function Post({ postId, profile, name, caption, images, userId }) {
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const fetchLikeStatus = async () => {
        const token = localStorage.getItem("token");
        if (!postId || !token) return;
        
        try {
            const res = await axios.get(
                `http://localhost:3001/api/posts/${postId}/like-status`,
                {
                    headers: { 
                        Authorization: `Bearer ${token}` 
                    }
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

    useEffect(() => {
        fetchLikeStatus();
    }, [postId]);

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
                        Authorization: `Bearer ${token}` 
                    }
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

 


    return (
        <div className="w-[700px] flex flex-col rounded-lg bg-white/30 backdrop-blur-sm p-8 space-y-4 border border-[#b497c4]">
            {/* User Info */}
            <div className="flex items-center gap-2">
                <img src={profile} alt="Profile" className="rounded-full w-[50px]" />
                <h1>{name}</h1>
            </div>

            {/* Caption */}
            <p>{caption}</p>

            {/* Images */}
            {images?.length > 0 && (
                <div className={`grid ${images.length > 1 ? "grid-cols-4" : "grid-cols-1"} gap-2`}>
                    {images.map((img, idx) => (
                        <img key={idx} src={`http://localhost:3001/uploads/${img}`} alt={`post-${idx}`} className="object-cover w-full h-full rounded-md" />
                    ))}
                </div>
            )}

            <hr className="bg-[#b497c4]" />

            {/* Like Button */}
            <div className="flex items-center cursor-pointer" onClick={handleLike}>
                {liked ? <ThumbUpIcon className="text-[#E82561]" /> : <ThumbUpOutlinedIcon className="text-[#E82561]" />}
                <span className="ml-1">{likes}</span>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
}

export default Post;
