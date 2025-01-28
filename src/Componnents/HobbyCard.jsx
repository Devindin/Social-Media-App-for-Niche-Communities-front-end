import React, { useState } from 'react';
import Diversity3Icon from '@mui/icons-material/Diversity3';

function HobbyCard({ image, hobby }) {
  const [showPopup, setShowPopup] = useState(false);
  const [isMember, setIsMember] = useState(false); // Track membership status
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // Track success message visibility

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleAgreeAndJoin = () => {
    setIsMember(true); // Update membership status
    setShowPopup(false); // Close the main popup
    setShowSuccessMessage(true); // Show success message
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
          onClick={isMember ? null : togglePopup} // Disable toggle when already a member
        >
          {isMember ? 'View Community' : 'Join to Community'}
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
              <button
                className="px-4 py-2 bg-[#E82561] text-white rounded-lg cursor-pointer"
                onClick={togglePopup}
              >
                Close
              </button>
              <button
                className="px-4 py-2 bg-[#5dd25f] text-white rounded-lg cursor-pointer"
                onClick={handleAgreeAndJoin}
              >
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
            <h2 className="text-xl font-bold mb-4">You are now a member of the {hobby} community!</h2>
            <button
              className="px-4 py-2 bg-[#5dd25f] text-white rounded-lg cursor-pointer"
              onClick={() => setShowSuccessMessage(false)} // Close the success message
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HobbyCard;
