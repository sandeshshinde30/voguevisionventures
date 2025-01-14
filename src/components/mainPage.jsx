import React from "react";
import Header from "./header";
import Capex from "./capex";
import "../css/header.css";
import Opex from "./opex";
import Sales from "./sales";
import StoreROI from "./storeROI";
import Footer from "./footer";

export default function MainPage(){
    return(
    <>
        <div className="bg-background-green h-auto">
           <Header/>
           <div>
            <h1 className="rowdies2 lg:text-[25px] text-[18px] tracking-normal text-center mt-10 text-dark-green" >VOGUE VISION VENTURES PLAN</h1>
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
        </div>
    </>
    )
}