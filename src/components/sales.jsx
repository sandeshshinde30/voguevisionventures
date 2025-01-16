import React from "react";
import "../css/header.css";

export default function Sales() {
  const salesData = [
    {
      details: "Shirts",
      avgSalesQty: 0,
      ASP: 0,
      retailerMargin: "0%",
      commissionOnSale: "0",
      saleValue: "0",
    },
    {
      details: "T-Shirt",
      avgSalesQty: 0,
      ASP: 0,
      retailerMargin: "0%",
      commissionOnSale: "0",
      saleValue: "0",
    },
    {
      details: "Jeans",
      avgSalesQty: 0,
      ASP: 0,
      retailerMargin: "0%",
      commissionOnSale: "0",
      saleValue: "0",
    },
    {
      details: "Formal Pants",
      avgSalesQty: 0,
      ASP: 0,
      retailerMargin: "0%",
      commissionOnSale: "0",
      saleValue: "0",
    },
    {
      details: "Kurtis",
      avgSalesQty: 0,
      ASP: 0,
      retailerMargin: "0%",
      commissionOnSale: "0",
      saleValue: "0",
    },
    {
      details: "Sport Jackets",
      avgSalesQty: 0,
      ASP: 0,
      retailerMargin: "0%",
      commissionOnSale: "0",
      saleValue: "0",
    },
    {
      details: "Sportwear",
      avgSalesQty: 0,
      ASP: 0,
      retailerMargin: "0%",
      commissionOnSale: "0",
      saleValue: "0",
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
          <div className="overflow-x-auto w-[85%] shadow-xl lg:w-3/5">
            <table className="mt-8 w-full  bg-white  tracking-wider">
              <thead className="bg-lighter-green text-md">
                <tr>
                  <th className="border border-gray-300 px-4 py-3">Details</th>
                  <th className="border border-gray-300 px-4 py-3">Avg Sales Qty</th>
                  <th className="border border-gray-300 px-4 py-3">ASP</th>
                  <th className="border border-gray-300 px-4 py-3">Retailer~Margin </th>
                  <th className="border border-gray-300 px-4 py-3">Commission on profit</th>
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
                <tr className="bg-green-50">
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
