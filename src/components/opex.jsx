import React from "react";
import "../css/header.css";
import { useTranslation } from "react-i18next";

export default function Opex() {
  const {t} = useTranslation();

  const opexData = t("operatingCost.opexData");


  const opexOtherData = t("operatingCost.opexOtherData");

  
  
  const newObj = {
    operatingExpenses: (
        <strong>{t("operatingCost.salaries.title")}</strong> 
    )
    , price: t("operatingCost.salaries.salary")}

  const firstTotal = opexData.reduce(
    (acc, item) => acc + parseInt(item.price.replace(/,/g, "")),
    0
  ).toLocaleString("en-IN");

  const updatedOpexData = [...opexData, newObj];

  const secondTotal = updatedOpexData.reduce(
    (acc, item) => acc + parseInt(item.price.replace(/,/g, "")),
    0
  ).toLocaleString("en-IN");

  return (
    <>
      <div>
        <div>
          <h1 className="rowdies2 lg:text-2xl text-xl text-center">{t("operatingCost.title")}</h1>
        </div>
        <div className="flex w-full h-full items-center justify-center">
          <table className="mt-8 lg:w-3/5 w-[85%] bg-white shadow-xl tracking-wider">
            <thead className="bg-lighter-green text-md">
              <tr>
                <th className="border border-gray-300 px-4 py-3">{t("operatingCost.columnTitle.one")}</th>
                <th className="border border-gray-300 px-4 py-3">{t("operatingCost.columnTitle.two")}</th>
              </tr>
            </thead>
            <tbody className="text-sm">
            
            {opexData.map((item, index) => (
                <tr key={index}>
                  <td className="p-2 border border-gray-300 px-4 py-3">{item.operatingExpenses}</td>
                  <td className="p-2 border text-center text-green-800 font-bold border-gray-300 px-4 py-3">
                    {item.price}
                  </td>
                </tr>
              ))}

              <tr className="bg-green-50">
              <td className="p-2 font-bold border border-gray-300 px-4 py-3">{t("operatingCost.opexOtherData.title1")}</td>

              <td className="p-2 border text-center font-extrabold text-dark-green border-gray-300 px-4 py-3">{firstTotal}</td>
                
              </tr>

            
                <tr>
                  <td className="p-2 border border-gray-300 px-4 py-3">{newObj.operatingExpenses}</td>
                  <td className="p-2 border text-center text-green-800 font-bold border-gray-300 px-4 py-3">
                    {newObj.price}
                  </td>
                </tr>
            

              <tr className="bg-green-50">
                <td className="p-2 font-bold border border-gray-300 px-4 py-3">{t("operatingCost.opexOtherData.title2")}</td>
                <td className="p-2 font-extrabold text-center border text-darker-green border-gray-300 px-4 py-3">{secondTotal}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
