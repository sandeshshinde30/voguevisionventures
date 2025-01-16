import React from "react";
import "../css/header.css";

export default function Opex() {
  
  const opexData = [
    { operatingExpenses: "Rent", price: "15,000"},
    { operatingExpenses: "Electricity", price: "6,300"},
    { operatingExpenses: "Internet", price: "700"},
  ];
  
  const newObj = {
    operatingExpenses: (
        <strong>* Sales Executive Salaries (PartTime & Fulltime)</strong> 
    )
    , price: "12,000"}

  const firstTotal = opexData.reduce(
    (acc, item) => acc + parseInt(item.price.replace(/,/g, "")),
    0
  ).toLocaleString("en-IN");

  const updatedOpexData = [...opexData, newObj];

  const secondTotal = updatedOpexData.reduce(
    (acc, item) => acc + parseInt(item.price.replace(/,/g, "")),
    0
  ).toLocaleString("en-IN");

  return (
    <>
      <div>
        <div>
          <h1 className="rowdies2 lg:text-2xl text-xl text-center">Operating Cost</h1>
        </div>
        <div className="flex w-full h-full items-center justify-center">
          <table className="mt-8 lg:w-3/5 w-[85%] bg-white shadow-xl tracking-wider">
            <thead className="bg-lighter-green text-md">
              <tr>
                <th className="border border-gray-300 px-4 py-3">Operating Expenses</th>
                <th className="border border-gray-300 px-4 py-3">Amount</th>
              </tr>
            </thead>
            <tbody className="text-sm">
            
            {opexData.map((item, index) => (
                <tr key={index}>
                  <td className="p-2 border border-gray-300 px-4 py-3">{item.operatingExpenses}</td>
                  <td className="p-2 border text-green-800 font-bold border-gray-300 px-4 py-3">
                    {item.price}
                  </td>
                </tr>
              ))}

              <tr>
              <td className="p-2 font-bold border border-gray-300 px-4 py-3">operating cost</td>

              <td className="p-2 border font-extrabold text-dark-green border-gray-300 px-4 py-3">{firstTotal}</td>
                
              </tr>

            
                <tr>
                  <td className="p-2 border border-gray-300 px-4 py-3">{newObj.operatingExpenses}</td>
                  <td className="p-2 border text-green-800 font-bold border-gray-300 px-4 py-3">
                    {newObj.price}
                  </td>
                </tr>
            

              <tr className="bg-green-50">
                <td className="p-2 font-bold border border-gray-300 px-4 py-3">Total Operating Expenses</td>
                <td className="p-2 font-extrabold border text-darker-green border-gray-300 px-4 py-3">{secondTotal}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
