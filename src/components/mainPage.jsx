import React from "react";
import Header from "./header";
import Capex from "./capex";
import "../css/header.css";

export default function MainPage(){
    return(
    <>
        <div className="bg-background-green h-auto">
           <Header/>
           <div>
            <h1 className="rowdies2 text-[25px] tracking-normal text-center mt-10 text-dark-green" >VOGUE VISION VENTURES PLAN</h1>
           </div>
           <Capex/>
        </div>
    </>
    )
}