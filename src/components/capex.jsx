import React from "react";
import "../css/header.css";

export default function Capex() {
  // Table data as an array of objects
  const capexData = [
    {
      details: (
        <span>
          <strong>Interior:</strong> (MS Rack & Furniture, Mat & Curtain, Storage, Paint, Glass)
        </span>
      ),
      MRP: "6,00,000",
      offerPrice: "3,25,000",
    },
    {
      details: (
        <span>
          <strong>Branding:</strong> (Signage, Fabric Board, Other Brandings, Displays)
        </span>
      ),
      MRP: "2,75,000",
      offerPrice: "1,50,000",
    },
    {
      details: (
        <span>
          <strong>Electronic:</strong> (Customized Light Structure, Fan, AC, Vaccume Cleaner, LED Screen, Tablet, Computer, Music System, Inverter etc.)
        </span>
      ),
      MRP: "2,50,000",
      offerPrice: "1,75,000",
    },
    {
      details: (
        <span>
          <strong>Customization Equipment:</strong> (Heat Press Machine, Mannequins-4, Hangers-200 & Other Equipments)
        </span>
      ),
      MRP: "75,000",
      offerPrice: "50,000",
    },
    {
      details: (
        <span>
          <strong>Security:</strong> (CCTV, Anti-Theft Alarm & Other Tools etc.)
        </span>
      ),
      MRP: "75,000",
      offerPrice: "50,000",
    },
    {
      details: (
        <span>
          <strong>Software:</strong> (Billing Software, Antivirus, Server etc.)
        </span>
      ),
      MRP: "1,25,000",
      offerPrice: "50,000",
    },
  ];

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
          <h1 className="rowdies2 lg:text-2xl text-xl text-center">CAPITAL COST</h1>
        </div>
        <div className="flex w-full h-full items-center justify-center">
          <table className="mt-8 lg:w-3/5 w-[85%] bg-white shadow-xl tracking-wider">
            <thead className="bg-lighter-green text-md">
              <tr>
                <th className="border border-gray-300 px-4 py-3">Details</th>
                <th className="border border-gray-300 px-4 py-3">Actual Amount</th>
                <th className="border border-gray-300 px-4 text-dark-green py-3">
                  Company Offered Amount
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {capexData.map((item, index) => (
                <tr key={index}>
                  <td className="p-2 border border-gray-300 px-4 py-3">{item.details}</td>
                  <td className="p-2 border text-center text-red-800 border-gray-300 px-4 py-3">{item.MRP}</td>
                  <td className="p-2 border text-center text-green-800 font-bold border-gray-300 px-4 py-3">
                    {item.offerPrice}
                  </td>
                </tr>
              ))}
              <tr className="bg-green-50">
                <td className="p-2 font-bold border border-gray-300 px-4 py-3">Total</td>
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
