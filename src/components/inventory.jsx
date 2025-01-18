import React from "react";
import "../css/header.css";
import { useTranslation } from "react-i18next";
export default function Inventory() {
  const {t} = useTranslation();
  const inventoryData = t("Inventory.inventoryData")

  const totalCommissionOnPurchase = inventoryData
    .reduce(
      (acc, item) => acc + parseInt(item.commissionOnSale.replace(/,/g, "")),
      0
    )
    .toLocaleString("en-IN");

  const totalResaleValue = inventoryData
    .reduce(
      (acc, item) => acc + parseInt(item.saleValue.replace(/,/g, "")),
      0
    )
    .toLocaleString("en-IN");

  return (
    <>
      <div>
        <div>
          <h1 className="rowdies2 lg:text-2xl text-xl text-center">{t("Inventory.title")}</h1>
        </div>
        <div className="flex w-full h-full items-center justify-center">
          {/* Add horizontal scrolling */}
          <div className="overflow-x-auto w-[85%] shadow-xl lg:w-3/5">
            <table className="mt-8 w-full  bg-white  tracking-wider">
              <thead className="bg-lighter-green text-md">
                <tr>
                  <th className="border border-gray-300 px-4 py-3">{t("Inventory.columnTitle.col_1")}</th>
                  <th className="border border-gray-300 px-4 py-3">{t("Inventory.columnTitle.col_2")}</th>
                  <th className="border border-gray-300 px-4 py-3">{t("Inventory.columnTitle.col_3")}</th>
                  <th className="border border-gray-300 px-4 py-3">{t("Inventory.columnTitle.col_4")}</th>
                  <th className="border border-gray-300 px-4 py-3">{t("Inventory.columnTitle.col_5")}</th>
                  <th className="border border-gray-300 px-4 py-3">{t("Inventory.columnTitle.col_6")}</th>
                  <th className="border border-gray-300 px-4 py-3">{t("Inventory.columnTitle.col_7")}</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {inventoryData.map((item, index) => (
                  <tr key={index}>
                    <td className="p-2 text-center border border-gray-300 px-4 py-3">{item.details}</td>
                    <td className="p-2 text-center border border-gray-300 px-4 py-3">{item.qty}</td>
                    <td className="p-2 text-center border border-gray-300 px-4 py-3">{item.MRP}</td>
                    <td className="p-2 text-center border border-gray-300 px-4 py-3">{item.APP}</td>
                    <td className="p-2 text-center border border-gray-300 px-4 py-3">{item.retailerMargin}</td>
                    <td className="p-2 text-center border border-gray-300 px-4 py-3">{item.commissionOnSale}</td>
                    <td className="p-2 text-center border border-gray-300 px-4 py-3">{item.saleValue}</td>
                  </tr>
                ))}
                <tr className="bg-green-50">
                  <td colSpan={3} className="p-2 font-bold border border-gray-300 px-4 py-3">{t("sales.warning")}</td>
                 
                  <td colSpan={2} className="p-2 font-bold border text-center border-gray-300 px-4 py-3">{t("total")}</td>
                  <td className="p-2 text-center font-bold border border-gray-300 px-4 py-3">{totalCommissionOnPurchase}</td>
                  <td className="p-2 text-center font-bold border border-gray-300 px-4 py-3">{totalResaleValue}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
