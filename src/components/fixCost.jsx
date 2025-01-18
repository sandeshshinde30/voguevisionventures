import React from "react";
import { useTranslation } from "react-i18next";

export default function FixCost(){
    const {t} = useTranslation()
    const fixedCostData = t("fixCost.fixedCostData");

    const columTitle = t("fixCost.columnTitle")
    
      const totalMRP = fixedCostData.reduce(
        (acc, item) => acc + parseInt(item.MRP.replace(/,/g, "")),
        0
      ).toLocaleString("en-IN");

      const totalOfferPrice = fixedCostData.reduce(
        (acc, item) => acc + parseInt(item.offerPrice.replace(/,/g, "")),
        0
      ).toLocaleString("en-IN");

    return (
        <>
        <div>
        <div>
          <h1 className="rowdies2 lg:text-2xl text-xl text-center">{t("fixCost.title")}</h1>
        </div>
        <div className="flex w-full h-full items-center justify-center">
          <table className="mt-8 lg:w-3/5 w-[85%] bg-white shadow-xl tracking-wider">
            <thead className="bg-lighter-green text-md">
              <tr>
                <th className="border border-gray-300 px-4 py-3">{columTitle.one}</th>
                <th className="border border-gray-300 px-4 py-3">{columTitle.two}</th>
                <th className="border border-gray-300 px-4 text-dark-green py-3">{columTitle.three}</th>

              </tr>
            </thead>
            <tbody className="text-sm">
              {fixedCostData.map((item, index) => (
                <tr key={index}>
                  <td className="p-2 border border-gray-300 px-4 py-3">{item.details}</td>
                  <td className="p-2 border text-center text-red-800 border-gray-300 px-4 py-3">{item.MRP}</td>
                  <td className="p-2 border text-center text-green-800 font-bold px-4 py-3">{item.offerPrice} <br /> {item.limitedOffer}</td>

                </tr>
              ))}
              <tr className="bg-green-50">
                <td className="p-2 font-bold border border-gray-300 px-4 py-3">{columTitle.four}</td>
                <td className="p-2 text-center font-semibold border border-gray-300 px-4 text-red-900 py-3">{totalMRP}</td>
                <td className="p-2 text-center border border-gray-300 text-dark-green font-extrabold px-4 py-3">{totalOfferPrice}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
    )
}