import React from "react";
import Header from "./header";
import Capex from "./capex";
import "../css/header.css";
import Opex from "./opex";
import Sales from "./sales";
import StoreROI from "./summary";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
import FixCost from "./fixCost";
import LanguageSelector from "./langSelector"
import { useTranslation } from 'react-i18next';


export default function MainPage() {
  const navigate = useNavigate();

  const {t} = useTranslation()

  const handleClick = () => {
    navigate("/contact-us");
  };

  

  return (
    <>
      <div className="bg-background-green min-h-screen pb-10">
        <Header />
        <div className="lg:hidden flex justify-end mr-10 mt-3">
          <LanguageSelector/>
        </div>

        <div>
          <h1 className="lg:hidden rowdies2 text-[24px] tracking-normal text-center mt-12 text-dark-green">
            {/* VOGUE VISION VENTURES <span><br /></span>FRANCHISE PLAN */}
            {t("mainPage.title")}
          </h1>
          <h1 className="hidden lg:block rowdies2 text-[30px] tracking-normal text-center mt-20 text-dark-green">
            {/* VOGUE VISION VENTURES FRANCHISE PLAN */}
            {t("mainPage.title")}
          </h1>
        </div>
        <div className="mt-20">
          <FixCost />
        </div>
        <div className="mt-20">
          <Capex />
        </div>
        <div className="mt-32">
          <Opex />
        </div>
        <div className="mt-32">
          <Sales />
        </div>
        <div className="mt-32">
          <StoreROI />
        </div>

        <div className="lg:mt-16 mt-10">
          <Footer/>
        </div>
       
        <button
          onClick={handleClick}
          className="fixed bottom-5 right-5 font-bold bg-darker-green text-white p-4 rounded-full shadow-lg hover:bg-dark-green"
        >
          {t("contactUs")}
        </button>

        
      </div>
    </>
  );
}
