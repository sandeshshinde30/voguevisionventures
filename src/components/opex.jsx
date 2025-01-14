import React from "react";
import "../css/header.css";

export default function Opex() {
  // Table data as an array of objects
  const opexData = [
    { operatingExpenses: "Store Manager", perMonth: "30,000", perYear: "3,60,000" },
    { operatingExpenses: "Optometrist (2 Nos)", perMonth: "40,000", perYear: "4,80,000" },
    { operatingExpenses: "Sales Executive", perMonth: "15,000", perYear: "1,80,000" },
    { operatingExpenses: "Total Salaries", perMonth: "85,000", perYear: "10,20,000" },
    { operatingExpenses: "Electricity", perMonth: "8,000", perYear: "96,000" },
    { operatingExpenses: "Telephone", perMonth: "1,000", perYear: "12,000" },
    { operatingExpenses: "Internet", perMonth: "2,000", perYear: "24,000" },
    { operatingExpenses: "Stationary & Miscellaneous", perMonth: "1,000", perYear: "12,000" },
    { operatingExpenses: "Cleaning Staff", perMonth: "1,500", perYear: "18,000" },
    { operatingExpenses: "Repair & Maintenance", perMonth: "1,500", perYear: "18,000" },
    { operatingExpenses: "Card Payment Charges", perMonth: "3,375", perYear: "40,500" },
    { operatingExpenses: "Marketing Cost", perMonth: "2,500", perYear: "30,000" },
    { operatingExpenses: "Total Other Expense", perMonth: "20,875", perYear: "2,50,500" },
  ];
  


  const totalOpexPerMonth = opexData.reduce(
    (acc, item) => acc + parseInt(item.perMonth.replace(/,/g, "")),
    0
  ).toLocaleString("en-IN");

  const totalOpexPerYear = opexData.reduce(
    (acc, item) => acc + parseInt(item.perYear.replace(/,/g, "")),
    0
  ).toLocaleString("en-IN");

  return (
    <>
      <div>
        <div>
          <h1 className="rowdies2 lg:text-2xl text-xl text-center">OPEX</h1>
        </div>
        <div className="flex w-full h-full items-center justify-center">
          <table className="mt-8 lg:w-3/5 w-[85%] bg-white shadow-xl tracking-wider">
            <thead className="bg-lighter-green text-md">
              <tr>
                <th className="border border-gray-300 px-4 py-3">Operating Expenses</th>
                <th className="border border-gray-300 px-4 py-3">Per Month</th>
                <th className="border border-gray-300 px-4 py-3">Per Year</th>
                
              </tr>
            </thead>
            <tbody className="text-sm">
            <tr>
                <td className="p-2 font-bold border border-gray-300 px-4 py-3">Rent( Inclusive of Taxes)</td>
                <td className="p-2 font-bold border border-gray-300 px-4 py-3">50,000</td>
                <td className="p-2 font-bold border border-gray-300 px-4 py-3">6,00,000</td>

              </tr>
              <tr>
              <td className="p-2 font-bold border border-gray-300 px-4 py-4"></td>
                <td className="p-2 font-bold border border-gray-300 px-4 py-4"></td>
                <td className="p-2 font-bold border border-gray-300 px-4 py-4"></td>
              </tr>
              <tr>
                <td></td>
                <td className="p-2 font-bold border border-gray-300 px-4 py-3">Salaries</td>

              </tr>
              {opexData.map((item, index) => (
                    <tr key={index}>
                    <td
                        className={`p-2 border border-gray-300 px-4 py-3 ${
                        index === 3 || index === 12 ? "font-bold" : ""
                        }`}
                    >
                        {item.operatingExpenses}
                    </td>
                    <td
                        className={`p-2 border border-gray-300 px-4 py-3 ${
                        index === 3 || index === 12 ? "font-bold" : ""
                        }`}
                    >
                        {item.perMonth}
                    </td>
                    <td
                        className={`p-2 border border-gray-300 px-4 py-3 ${
                        index === 3 || index === 12 ? "font-bold" : ""
                        }`}
                    >
                        {item.perYear}
                    </td>
                    </tr>
                    
                ))}
              <tr>
                <td className="p-2 font-bold border border-gray-300 px-4 py-3">Total Operating Expenses</td>
                <td className="p-2 font-bold border border-gray-300 px-4 py-3">{totalOpexPerMonth}</td>
                <td className="p-2 font-bold border border-gray-300 px-4 py-3">{totalOpexPerYear}</td>

              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
