import React from "react";
import Header from "./header";
import Capex from "./capex";
import "../css/header.css";
import Opex from "./opex";
import Sales from "./sales";
import StoreROI from "./storeROI";
import Footer from "./footer";
import { Navigate, useNavigate } from "react-router-dom";
import FixCost from "./fixCost";


export default function MainPage(){
    const navigate = useNavigate();

    const handleClick = () => {
       navigate("/contactus")
      };

    return(
    <>
        <div className="bg-background-green h-auto">
           <Header/>
           <div>
            <h1 className="rowdies2 lg:text-[25px] text-[18px] tracking-normal text-center mt-20 text-dark-green" >VOGUE VISION VENTURES FRANCHISE PLAN</h1>
           </div>
           <div className="mt-20">
           <FixCost/>
           </div>
           <div className="mt-20">
           <Capex/>
           </div>
           <div className="mt-32">
           <Opex/>
           </div>
           <div className="mt-32">
           <Sales/>
           </div>
           <div className="mt-32">
           <StoreROI/>
           </div>
           <div className="mt-32">
           {/* <Footer/> */}
           </div>
           <button
      onClick={handleClick}
      className="fixed bottom-5 right-5 font-bold bg-darker-green text-white p-4 rounded-full shadow-lg hover:bg-dark-green"
    >
      Contact Us
    </button>
        </div>
    </>
    )
}