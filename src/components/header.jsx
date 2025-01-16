import React from "react";
import "../css/header.css"; // Adjust import path
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <div className="bg-white border-b-[1px] border-[#BC965C] shadow-md">
        <div className="flex items-center lg:justify-between lg:mx-24 mx-5">
         <div className="flex items-center ">
         <div >
            <img src="voguevisionventures.png" className="lg:w-20 w-14" alt="voguevisionventures.png" />
          </div>
          <div className="rowdies">
            <h1 className="lg:text-[20px] text-[18px]  text-gray-700 lg:ml-2 ml-2 tracking-wide">VOGUE VISION VENTURES</h1>
          </div>
         </div>
         <div className="hidden sm:block lg:flex lg:row">
         <div>
             <div className="flex items-center tracking-wide border-r-2 border-gray-400 px-[5px]">
                <MdEmail size={20} className="text-dark-green"/>
                <h2 className=" ml-1 text-[14px]">director@voguevisionventures.com</h2>
             </div>
          </div>
          <div className="ml-[5px]">
             <div className="flex items-center tracking-wide ">
                <FaPhoneAlt size={15} className="text-dark-green"/>
                <h2 className=" ml-2 text-[14px]">9119558855</h2>
             </div>
          </div>
         </div>
        </div>
      </div>
    </>
  );
}
