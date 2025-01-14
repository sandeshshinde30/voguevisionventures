import React from "react";
import "../css/header.css"; // Adjust import path
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <div className="bg-white border-b-[1px] border-[#BC965C] shadow-md">
        <div className="flex items-center justify-between mx-24">
         <div className="flex items-center ">
         <div >
            <img src="voguevisionventures.png" width={80} alt="voguevisionventures.png" />
          </div>
          <div className="rowdies">
            <h1 className="text-[20px] text-gray-700 ml-2 tracking-wide">VOGUE VISION VENTURES</h1>
          </div>
         </div>
         <div className="flex row">
         <div>
             <div className="flex items-center tracking-wide border-r-2 border-gray-400 px-[5px]">
                <MdEmail size={20} className="text-dark-green"/>
                <h2 className=" ml-1 text-[12px]">director@vogueprism.com</h2>
             </div>
          </div>
          <div className="ml-[5px]">
             <div className="flex items-center tracking-wide ">
                <FaPhoneAlt size={15} className="text-dark-green"/>
                <h2 className=" ml-2 text-[12px]">9999999999</h2>
             </div>
          </div>
         </div>
        </div>
      </div>
    </>
  );
}
