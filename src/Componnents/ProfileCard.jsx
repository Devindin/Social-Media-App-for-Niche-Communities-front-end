import React, { useState, useEffect } from "react";
import Diversity3Icon from '@mui/icons-material/Diversity3';
import axios from "axios";

function ProfileCard() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.log("Token not found");
          return; // Stop execution if token is missing
        }

        const response = await axios.get("http://localhost:3001/loggedUserDetails", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    getUserDetails();
  }, []);

  return (
    <div className="flex w-[680px] bg-white/30 backdrop-blur-sm rounded-2xl mt-2 p-4 flex-col">
      
      {userData ? (
        <>
          <h1 className="text-[#500073] text-[30px] font-bold mr-[250px] mb-4 ml-10">
            {userData.name}
          </h1>
          <h1 className="text-[#500073] text-[20px] font-bold mr-[250px] mb-4 ml-10">
            {userData.country}
          </h1>

          <div className="flex flex-row">
            <Diversity3Icon className='ml-10' />
            <h1 className="text-[#500073] text-[20px] ml-4 mb-4 ">
              My Communities
            </h1>
          </div>

          <div className="flex flex-col items-center justify-center mb-10 space-y-2">
            {userData.joinedCommunities.length > 0 ? (
              userData.joinedCommunities.map((community, index) => (
                <button
                  key={index}
                  className="bg-[#5dd25f] p-2 w-[400px] h-[50px] rounded-2xl text-white font-semi-bold"
                >
                  {community}
                </button>
              ))
            ) : (
              <p className="text-gray-600">No communities joined yet.</p>
            )}
          </div>
        </>
      ) : (
        <p className="text-white text-center">Loading...</p>
      )}
    </div>
  );
}

export default ProfileCard;
