import React from "react";
import "../css/header.css";

export default function Capex() {
  // Table data as an array of objects
  const capexData = [
    { details: "Software Licence & Franchise Fee", total: "2,36,000" },
    { details: "Interiors (Furniture, tiles, A/C, Displays, Storage, Music System)", total: "10,00,000" },
    { details: "Branding (Signage, VM, other branding)", total: "2,70,000" },
    { details: "LCD Screen, Tablet, Laptop", total: "2,50,000" },
    { details: "Staff Training Expense", total: "2,00,000" },
    { details: "Opthal Equipment (Eye testing machine, other tools etc)", total: "5,00,000" },
  ];

  // Calculate total Capex
  const totalCapex = capexData.reduce(
    (acc, item) => acc + parseInt(item.total.replace(/,/g, "")),
    0
  ).toLocaleString("en-IN");

  return (
    <>
      <div>
        <div>
          <h1 className="rowdies2 lg:text-2xl text-xl text-center">CAPEX</h1>
        </div>
        <div className="flex w-full h-full items-center justify-center">
          <table className="mt-8 lg:w-3/5 w-[85%] bg-white shadow-xl tracking-wider">
            <thead className="bg-lighter-green text-md">
              <tr>
                <th className="border border-gray-300 px-4 py-3">Details</th>
                <th className="border border-gray-300 px-4 py-3">Total</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {capexData.map((item, index) => (
                <tr key={index}>
                  <td className="p-2 border border-gray-300 px-4 py-3">{item.details}</td>
                  <td className="p-2 border border-gray-300 px-4 py-3">{item.total}</td>
                </tr>
              ))}
              <tr>
                <td className="p-2 font-bold border border-gray-300 px-4 py-3">Total Capex</td>
                <td className="p-2 font-bold border border-gray-300 px-4 py-3">{totalCapex}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
