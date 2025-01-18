import React from "react";
import "../css/header.css";
import { useTranslation } from "react-i18next";
export default function StoreROI() {
  const {t} = useTranslation();

  const summaryData = t("summary.summaryData");
      

  return (
    <>
      <div>
        <div>
          <h1 className="rowdies2 lg:text-2xl text-xl text-center">{t("summary.title")}</h1>
        </div>
        <div className="flex w-full h-full items-center justify-center">
          <table className="mt-8 lg:w-3/5 w-[85%] bg-white shadow-xl tracking-wider">
            <thead className="bg-lighter-green text-md">
              <tr>
                <th className="border border-gray-300 px-4 py-3" colSpan={2}>{t("summary.columnTitle")}</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {summaryData.map((item, index) => (
                <tr key={index}>
                  <td className="p-2 border border-gray-300 px-4 py-3 w-1/2">{item.label}</td>
                  <td className="p-2 border text-green-800 font-bold text-center border-gray-300 px-4 py-3 w-1/2">{item.value}</td>
                </tr>
              ))}
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
