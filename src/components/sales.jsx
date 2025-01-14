import React from "react";
import "../css/header.css";

export default function Sales() {
  const salesData = [
    {
      details: "Prescription Frames",
      avgSalesQty: 250,
      ASP: 3000,
      retailerMargin: "25%",
      commissionOnSale: "1,87,500",
      saleValue: "7,50,000",
    },
    {
      details: "Sunglasses",
      avgSalesQty: 60,
      ASP: 2000,
      retailerMargin: "25%",
      commissionOnSale: "30,000",
      saleValue: "1,20,000",
    },
    {
      details: "Contact Lens",
      avgSalesQty: 30,
      ASP: 1000,
      retailerMargin: "13%",
      commissionOnSale: "3,900",
      saleValue: "30,000",
    },
  ];

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
          <h1 className="rowdies2 lg:text-2xl text-xl text-center">SALES</h1>
        </div>
        <div className="flex w-full h-full items-center justify-center">
          {/* Add horizontal scrolling */}
          <div className="overflow-x-auto w-[85%] lg:w-3/5">
            <table className="mt-8 w-full bg-white shadow-xl tracking-wider">
              <thead className="bg-lighter-green text-md">
                <tr>
                  <th className="border border-gray-300 px-4 py-3">Details</th>
                  <th className="border border-gray-300 px-4 py-3">Avg Sales Qty</th>
                  <th className="border border-gray-300 px-4 py-3">ASP</th>
                  <th className="border border-gray-300 px-4 py-3">Retailer Margin ~</th>
                  <th className="border border-gray-300 px-4 py-3">Commission on sale</th>
                  <th className="border border-gray-300 px-4 py-3">Sale value</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {salesData.map((item, index) => (
                  <tr key={index}>
                    <td className="p-2 border border-gray-300 px-4 py-3">{item.details}</td>
                    <td className="p-2 border border-gray-300 px-4 py-3">{item.avgSalesQty}</td>
                    <td className="p-2 border border-gray-300 px-4 py-3">{item.ASP}</td>
                    <td className="p-2 border border-gray-300 px-4 py-3">{item.retailerMargin}</td>
                    <td className="p-2 border border-gray-300 px-4 py-3">{item.commissionOnSale}</td>
                    <td className="p-2 border border-gray-300 px-4 py-3">{item.saleValue}</td>
                  </tr>
                ))}
                <tr>
                  <td className="p-2 font-bold border border-gray-300 px-4 py-3">Total</td>
                  <td className="p-2 font-bold border border-gray-300 px-4 py-3"></td>
                  <td className="p-2 font-bold border border-gray-300 px-4 py-3"></td>
                  <td className="p-2 font-bold border border-gray-300 px-4 py-3"></td>
                  <td className="p-2 font-bold border border-gray-300 px-4 py-3">{totalCommissionOnSale}</td>
                  <td className="p-2 font-bold border border-gray-300 px-4 py-3">{totalSaleValue}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
