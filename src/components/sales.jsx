import React from "react";
import "../css/header.css";

export default function Sales() {
  const salesData = [
    {
      details: "Shirts",
      avgSalesQty: "3,999",
      ASP: "499",
      retailerMargin: "67%",
      commissionOnSale: "3,35,000",
      saleValue: "19,95,500",
    },
    {
      details: "T-Shirt",
      avgSalesQty: "3,000",
      ASP: "399",
      retailerMargin: "67%",
      commissionOnSale: "2,00,000",
      saleValue: "11,97,000",
    },
    {
      details: "Jeans",
      avgSalesQty: "1,000",
      ASP: "999",
      retailerMargin: "67%",
      commissionOnSale: "1,65,000",
      saleValue: "9,99,000",
    },
    {
      details: "Formal Pants",
      avgSalesQty: "1,150",
      ASP: "699",
      retailerMargin: "67%",
      commissionOnSale: "1,35,000",
      saleValue: "8,03,850",
    },
    {
      details: "Kurtis",
      avgSalesQty: "850",
      ASP: "599",
      retailerMargin: "67%",
      commissionOnSale: "85,000",
      saleValue: "5,09,150",
    },
    {
      details: "Sport Jackets",
      avgSalesQty: "500",
      ASP: "599",
      retailerMargin: "67%",
      commissionOnSale: "50,000",
      saleValue: "2,99,500",
    },
    {
      details: "Sportwear",
      avgSalesQty: "490",
      ASP: "399",
      retailerMargin: "67%",
      commissionOnSale: "30,000",
      saleValue: "1,96,000",
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
                    <td className="p-2 text-center border border-gray-300 px-4 py-3">{item.details}</td>
                    <td className="p-2 text-center border border-gray-300 px-4 py-3">{item.avgSalesQty}</td>
                    <td className="p-2 text-center border border-gray-300 px-4 py-3">{item.ASP}</td>
                    <td className="p-2 text-center border border-gray-300 px-4 py-3">{item.retailerMargin}</td>
                    <td className="p-2 text-center border border-gray-300 px-4 py-3">{item.commissionOnSale}</td>
                    <td className="p-2 text-center border border-gray-300 px-4 py-3">{item.saleValue}</td>
                  </tr>
                ))}
                <tr className="bg-green-50">
                  <td colSpan={3} className="p-2 font-bold border border-gray-300 px-4 py-3">* All values here are representation of approximate values</td>
                 
                  <td className="p-2 font-bold border border-gray-300 px-4 py-3">Total</td>
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
