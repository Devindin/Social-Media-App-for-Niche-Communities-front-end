import React from "react";
import Heroimage from "../assets/heroImage.png";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Hero() {
  return (
    <div className="flex flex-row  mt-10 items-center justify-center ">
      <div className=" border-8 rotate-10 rounded-3xl border-[#E82561]  mb-10 ">
        <img
          src={Heroimage}
          className="w-[500px] rounded-3xl rotate-8  border-8 border-[#8B5DFF]"
        ></img>
      </div>

      <div className="flex flex-col  justify-center ml-10">
        <div className="flex flex-row">
          <h1 className="text-[120px] text-[#E82561] font-bold">
            {" "}
            Interestly{" "}
          </h1>
          <FavoriteIcon
            fontSize="large"
            sx={{ fontSize: "80px" }}
            className="text-[#E82561]"
          />
        </div>
        <p className="font-bold text-[#500073] ml-20 text-[16px] leading-0">
          Playful and modern, focusing on shared interests.
        </p>
      </div>
    </div>
  );
}

export default Hero;
