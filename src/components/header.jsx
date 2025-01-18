import React from "react";
import "../css/header.css"; // Adjust import path
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
 import { AiFillInstagram } from "react-icons/ai";
 import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import LanguageSelector from "./langSelector";
import { useTranslation } from "react-i18next";

export default function Header() {
  const {t} = useTranslation()


  return (
    <>
      <div className="bg-white lg:p-0 p-2 border-b-[1px] border-[#BC965C] shadow-md">
        <div className="flex items-center lg:justify-between lg:mx-24 mx-5">
         <div className="flex items-center ">
         <div >
            <img src="voguevisionventures.png" className="lg:w-20 w-14" alt="voguevisionventures.png" />
          </div>
          <div className="rowdies">
            <h1 className="lg:text-[20px] text-[18px]  text-gray-700 lg:ml-2 ml-2 tracking-wide">{t("header.title")}</h1>
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
             <div className="flex items-center tracking-wide border-r-2 border-gray-400 px-[5px]">
                <FaPhoneAlt size={15} className="text-dark-green"/>
                <h2 className=" ml-2 text-[14px]">911 955 88 55</h2>
             </div>
          </div>
          <div className="hidden lg:block ml-[10px]">
                <div className='flex space-x-3'>
                       <a href="https://www.facebook.com/profile.php?id=61556407060403" target='_blank'> <FaFacebook className="icon-outline text-dark-green hover:text-green-700 cursor-pointer" size={20} /></a>
                        <a href="https://chat.whatsapp.com/L8IniHeuD7p8ZdC50EM59V" target='_blank'><IoLogoWhatsapp className="icon-outline text-dark-green hover:text-green-700 cursor-pointer" size={22} /></a>
                        <a href="https://youtube.com/@vogueprism2024?si=MtD5PJpIyjyBQkFE" target='_blank'><FaYoutube className="icon-outline text-dark-green hover:text-green-700 cursor-pointer" size={22} /></a>
                        <a href="https://www.instagram.com/vogue_prism?igsh=bXhkdGJiOHgwb3By" target='_blank'><AiFillInstagram className="icon-outline text-dark-green hover:text-green-700 cursor-pointer" size={24} /></a>
                    </div>
        </div>
        
         </div>
         
        <div className="flex flex-col">
       
         <div>
          <LanguageSelector/>
         </div>
         </div>
        </div>
      </div>
    </>
  );
}
