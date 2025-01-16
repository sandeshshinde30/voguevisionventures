import React from "react";

export default function FixCost(){

    const fixedCostData = [
        { details: "Software Licence & Franchise Fee", MRP: "2,49,999", offerPrice : "99,999" },
        { details: "Company profit commission security deposit", MRP: "3,96,000" , offerPrice : "1,99,998" },
      ];
    
      const totalMRP = fixedCostData.reduce(
        (acc, item) => acc + parseInt(item.MRP.replace(/,/g, "")),
        0
      ).toLocaleString("en-IN");

      const totalOfferPrice = fixedCostData.reduce(
        (acc, item) => acc + parseInt(item.offerPrice.replace(/,/g, "")),
        0
      ).toLocaleString("en-IN");

    return (
        <>
        <div>
        <div>
          <h1 className="rowdies2 lg:text-2xl text-xl text-center">FIXED COST</h1>
        </div>
        <div className="flex w-full h-full items-center justify-center">
          <table className="mt-8 lg:w-3/5 w-[85%] bg-white shadow-xl tracking-wider">
            <thead className="bg-lighter-green text-md">
              <tr>
                <th className="border border-gray-300 px-4 py-3">Details</th>
                <th className="border border-gray-300 px-4 py-3">Actual Amount</th>
                <th className="border border-gray-300 px-4 text-dark-green py-3">Company Offered Amount</th>

              </tr>
            </thead>
            <tbody className="text-sm">
              {fixedCostData.map((item, index) => (
                <tr key={index}>
                  <td className="p-2 border border-gray-300 px-4 py-3">{item.details}</td>
                  <td className="p-2 border text-center text-red-800 border-gray-300 px-4 py-3">{item.MRP}</td>
                  <td className="p-2 border text-center text-green-800 font-bold px-4 py-3">{item.offerPrice}</td>

                </tr>
              ))}
              <tr className="bg-green-50">
                <td className="p-2 font-bold border border-gray-300 px-4 py-3">Total</td>
                <td className="p-2 text-center font-semibold border border-gray-300 px-4 text-red-900 py-3">{totalMRP}</td>
                <td className="p-2 text-center border border-gray-300 text-dark-green font-extrabold px-4 py-3">{totalOfferPrice}</td>

              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
    )
}