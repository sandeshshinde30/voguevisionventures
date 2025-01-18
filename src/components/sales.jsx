import React from "react";
import "../css/header.css";
import { useTranslation } from "react-i18next";
export default function Sales() {
  const {t} = useTranslation();
  const salesData = t("sales.salesData")

  const totalCommissionOnSale = salesData
    .reduce(
      (acc, item) => acc + parseInt(item.commissionOnSale.replace(/,/g, "")),
      0
    )
    .toLocaleString("en-IN");

  const totalSaleValue = salesData
    .reduce(
      (acc, item) => acc + parseInt(item.saleValue.replace(/,/g, "")),
      0
    )
    .toLocaleString("en-IN");

  return (
    <>
      <div>
        <div>
          <h1 className="rowdies2 lg:text-2xl text-xl text-center">{t("sales.title")}</h1>
        </div>
        <div className="flex w-full h-full items-center justify-center">
          {/* Add horizontal scrolling */}
          <div className="overflow-x-auto w-[85%] shadow-xl lg:w-3/5">
            <table className="mt-8 w-full  bg-white  tracking-wider">
              <thead className="bg-lighter-green text-md">
                <tr>
                  <th className="border border-gray-300 px-4 py-3">{t("sales.columnTitle.one")}</th>
                  <th className="border border-gray-300 px-4 py-3">{t("sales.columnTitle.two")}</th>
                  <th className="border border-gray-300 px-4 py-3">{t("sales.columnTitle.three")}</th>
                  <th className="border border-gray-300 px-4 py-3">{t("sales.columnTitle.four")}</th>
                  <th className="border border-gray-300 px-4 py-3">{t("sales.columnTitle.five")}</th>
                  <th className="border border-gray-300 px-4 py-3">{t("sales.columnTitle.six")}</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {salesData.map((item, index) => (
                  <tr key={index}>
                    <td className="p-2 text-center border border-gray-300 px-4 py-3">{item.details}</td>
                    <td className="p-2 text-center border border-gray-300 px-4 py-3">{item.avgSalesQty}</td>
                    <td className="p-2 text-center border border-gray-300 px-4 py-3">{item.ASP}</td>
                    <td className="p-2 text-center border border-gray-300 px-4 py-3">{item.retailerMargin}</td>
                    <td className="p-2 text-center border border-gray-300 px-4 py-3">{item.commissionOnSale}</td>
                    <td className="p-2 text-center border border-gray-300 px-4 py-3">{item.saleValue}</td>
                  </tr>
                ))}
                <tr className="bg-green-50">
                  <td colSpan={3} className="p-2 font-bold border border-gray-300 px-4 py-3">{t("sales.warning")}</td>
                 
                  <td className="p-2 font-bold border text-center border-gray-300 px-4 py-3">{t("total")}</td>
                  <td className="p-2 text-center font-bold border border-gray-300 px-4 py-3">{totalCommissionOnSale}</td>
                  <td className="p-2 text-center font-bold border border-gray-300 px-4 py-3">{totalSaleValue}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
