import React from "react";
import "../css/header.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CiFacebook,CiTwitter,CiYoutube } from "react-icons/ci";
import { SlSocialYoutube } from "react-icons/sl";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { Link as RouterLink, useNavigate } from 'react-router-dom'; // Renamed to RouterLink

export default function Footer(){
    return(
        <>
            <div className="rowdies mx-20 lg:flex lg:justify-between justify-center items-center pb-5">
                <div className="">
                   <h1 className="font-normal text-sm"> © 2025 VOGUE VISION VENTURES</h1>
                </div>

                <div className="lg:flex justify-center items-center">
                <div className="justify-center items-center">
             <div className=" flex items-center tracking-wide lg:border-r-2 lg:border-gray-400 px-[5px]">
                <MdEmail size={20} className="text-dark-green"/>
                <h2 className=" font-normal ml-1 text-sm">director@vogueprism.com</h2>
             </div>
          </div>
          <div className="ml-[5px]">
             <div className="flex items-center tracking-wide ">
                <FaPhoneAlt size={15} className="text-dark-green"/>
                <h2 className="font-normal ml-2 text-sm">9999999999</h2>
             </div>
          </div>
                </div>

                <div className="">
                <div className='flex space-x-4'>
                       <a href="" target=''> <FaFacebook className="icon-outline text-dark-green hover:text-green-700 cursor-pointer" size={22} /></a>
                        <a href="" target=''><FaTwitter className="icon-outline text-dark-green hover:text-green-700 cursor-pointer" size={24} /></a>
                        <a href="https://youtube.com/@vogueprism2024?si=MtD5PJpIyjyBQkFE" target='_blank'><FaYoutube className="icon-outline text-dark-green hover:text-green-700 cursor-pointer" size={24} /></a>
                        <a href="https://www.instagram.com/vogue_prism?igsh=bXhkdGJiOHgwb3By" target='_blank'><AiFillInstagram className="icon-outline text-dark-green hover:text-green-700 cursor-pointer" size={26} /></a>
                    </div>
                </div>
            </div>
        </>
    )
}