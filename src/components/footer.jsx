import React from "react";
import "../css/header.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoLogoWhatsapp } from "react-icons/io";
import { CiFacebook,CiTwitter,CiYoutube } from "react-icons/ci";
import { SlSocialYoutube } from "react-icons/sl";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { Link as RouterLink, useNavigate } from 'react-router-dom'; // Renamed to RouterLink

export default function Footer(){
    return(
        <>
            <div className="rowdies flex flex-col lg:flex justify-center items-center pb-5">
                <div className="">
                   <h1 className="font-normal text-xl"> © 2025 VOGUE VISION VENTURES</h1>
                </div>

                <div className="lg:mt-5 mt-3">
                <div className='flex space-x-4'>
                       <a href="https://www.facebook.com/profile.php?id=61556407060403" target='_blank'> <FaFacebook className="icon-outline text-dark-green hover:text-green-700 cursor-pointer lg:h-7 lg:w-8 h-7 w-6"  /></a>
                        <a href="https://chat.whatsapp.com/L8IniHeuD7p8ZdC50EM59V" target='_blank'><IoLogoWhatsapp className="icon-outline text-dark-green hover:text-green-700 cursor-pointer lg:h-8 lg:w-8 h-7 w-7"  /></a>
                        <a href="https://youtube.com/@vogueprism2024?si=MtD5PJpIyjyBQkFE" target='_blank'><FaYoutube className="icon-outline text-dark-green hover:text-green-700 cursor-pointer lg:h-8 lg:w-8 h-7 w-7" /></a>
                        <a href="https://www.instagram.com/vogue_prism?igsh=bXhkdGJiOHgwb3By" target='_blank'><AiFillInstagram className="icon-outline text-dark-green hover:text-green-700 cursor-pointer lg:h-8 lg:w-8 h-7 w-7"  /></a>
                    </div>
                </div>
            </div>
        </>
    )
}