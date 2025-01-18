import React from "react";
import "../css/header.css";
import { useTranslation } from "react-i18next";

export default function Capex() {
  // Table data as an array of objects

  const {t} = useTranslation();
  const capexData = t("capitalCost.capitalCostData");

  const totalMRP = capexData
    .reduce((acc, item) => acc + parseInt(item.MRP.replace(/,/g, "")), 0)
    .toLocaleString("en-IN");

  const totalOfferPrice = capexData
    .reduce((acc, item) => acc + parseInt(item.offerPrice.replace(/,/g, "")), 0)
    .toLocaleString("en-IN");

  return (
    <>
      <div>
        <div>
          <h1 className="rowdies2 lg:text-2xl text-xl text-center">{t("capitalCost.title")}</h1>
        </div>
        <div className="flex w-full h-full items-center justify-center">
          <table className="mt-8 lg:w-3/5 w-[85%] bg-white shadow-xl tracking-wider">
            <thead className="bg-lighter-green text-md">
              <tr>
                <th colSpan={2} className="border border-gray-300 px-4 py-3">{t("capitalCost.columnTitle.one")}</th>
                <th className="border border-gray-300 px-4 py-3">{t("capitalCost.columnTitle.two")}</th>
                <th className="border border-gray-300 px-4 text-dark-green py-3">
                {t("capitalCost.columnTitle.three")}
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {capexData.map((item, index) => (
                <tr key={index}>
                  <td colSpan={2} className="p-2 border border-gray-300 px-4 py-3"><span className="font-bold">{item.heading} :</span>{item.content}</td>
                  <td className="p-2 border text-center text-red-800 border-gray-300 px-4 py-3">{item.MRP}</td>
                  <td className="p-2 border text-center text-green-800 font-bold border-gray-300 px-4 py-3">
                    {item.offerPrice}
                  </td>
                </tr>
              ))}
              <tr className="bg-green-50">
                
                <td colSpan={2} className="p-2 font-bold border border-gray-300 px-4 py-3">{t("total")}</td>
                <td className="p-2 font-semibold border text-center border-gray-300 px-4 text-red-900 py-3">
                  {totalMRP}
                </td>
                <td className="p-2 border border-gray-300 text-center text-dark-green font-extrabold px-4 py-3">
                  {totalOfferPrice}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
