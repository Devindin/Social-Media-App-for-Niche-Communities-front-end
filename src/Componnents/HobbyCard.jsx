import React, { useEffect, useState } from 'react';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function HobbyCard({ image, hobby }) {
  const [showPopup, setShowPopup] = useState(false);
  const [isMember, setIsMember] = useState(false); // Track membership status
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // Track success message visibility

  const navigate = useNavigate();

  // Retrieve userId from local storage (modify as needed based on auth handling)
  const userId = localStorage.getItem("userId");

  const togglePopup = () => {
    if (!localStorage.getItem("token")) {
      alert("Please log in to join a community.");
      return;
    }
    setShowPopup(!showPopup);
  };

  const handleAgreeAndJoin = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please log in to join a community.");
      return;
    }
  
    if (!userId) {
      alert("User ID not found. Please log in again.");
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:3001/joinCommunity", { userId, hobby });
  
      if (response.data.message === "Joined successfully") {
        setIsMember(true);
        setShowPopup(false);
        setShowSuccessMessage(true);
      } else {
        alert(response.data.error || "Failed to join community.");
      }
    } catch (error) {
      console.error("Error joining community:", error.response?.data || error.message);
      alert("Failed to join community. Please try again.");
    }
  };
  


  useEffect(() => {
    // Check if the user is a member of this community
    if (userId) {
      axios
        .get(`http://localhost:3001/checkMembership/${userId}/${hobby}`)
        .then(response => {
          if (response.data.isMember) setIsMember(true);
        })
        .catch(error => console.error("Error checking membership:", error));
    }
  }, [userId, hobby]);



  const handleNavigate = () => {
    if (isMember) {
      // Convert hobby name to a valid route (e.g., "Sewing" → "sewingcommunity")
      const communityPage = `/${hobby.toLowerCase()}community`;
      navigate(communityPage);
    }
  };

  return (
    <div className='bg-[#8B5DFF] w-[400px] h-[420px] flex flex-col items-center justify-center rounded-3xl'>
      <div className='bg-white/30 backdrop-blur-sm w-[400px] h-[420px] p-8 flex flex-col items-center justify-center rounded-3xl'>
        <img src={image} className='w-[250px] h-[300px] rounded-b-full' alt="Hobby" />
        <h1 className='text-white text-[24px] font-bold'>{hobby}</h1>
        <button
          className={`w-[300px] h-[60px] rounded-2xl p-2 text-white cursor-pointer ${
            isMember ? 'bg-[#5dd25f]' : 'bg-[#E82561]'
          }`}
          onClick={isMember ? handleNavigate : togglePopup}// Prevents null function
        >
          {isMember ? 'View Community' : 'Join Community'}
          <Diversity3Icon className='text-white ml-4' />
        </button>
      </div>

      {/* Join Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white/30 backdrop-blur-sm p-6 rounded-lg shadow-lg w-[600px] text-center">
            <h2 className="text-xl font-bold mb-4">Welcome to the {hobby} community!</h2>
            <p className="mb-4">Before joining, please review the community guidelines:</p>
            <ul className="text-left mb-6 list-disc list-inside">
              <li className="mb-2">Be respectful and courteous to all members.</li>
              <li className="mb-2">Avoid posting inappropriate or offensive content.</li>
              <li className="mb-2">Engage positively and contribute to the community discussions.</li>
              <li className="mb-2">Report any issues to the moderators promptly.</li>
              <li className="mb-2">Stay on-topic and follow the community's purpose.</li>
            </ul>
            <div className="flex justify-center gap-4">
              <button className="px-4 py-2 bg-[#E82561] text-white rounded-lg cursor-pointer" onClick={togglePopup}>
                Close
              </button>
              <button className="px-4 py-2 bg-[#5dd25f] text-white rounded-lg cursor-pointer" onClick={handleAgreeAndJoin}>
                Agree and Join
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white/30 backdrop-blur-sm p-6 rounded-lg shadow-lg w-[400px] text-center">
            <h2 className="text-[30px] text-[#E82561] font-bold mb-4">Welcome!</h2>
            <h2 className="text-xl font-bold mb-4">You are now a member of the {hobby} community!</h2>
            <button className="px-4 py-2 bg-[#5dd25f] text-white rounded-lg cursor-pointer" onClick={() => setShowSuccessMessage(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HobbyCard;
