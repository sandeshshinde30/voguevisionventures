import React from "react";
import Header from "./header";
import "../css/header.css";
import { Navigate, useNavigate } from "react-router-dom";

export default function ContactUs() {

    const navigate = useNavigate();

    function back(){
        navigate("/")
    }
  return (
    <>
      <div className="bg-background-green min-h-screen">
        {/* Back Button */}
        <button
        onClick={back}
          className="fixed bottom-5 left-5 font-bold bg-darker-green text-white p-4 rounded-full shadow-lg hover:bg-dark-green"
        >
          Back
        </button>

        {/* Fixed Header */}
        <div className="fixed top-0 left-0 w-full z-50 bg-background-green shadow">
          <Header />
        </div>

        {/* Content Below Header */}
        <div className="pt-20"> {/* Adjust padding based on header height */}
          <h1 className="rowdies font-thin text-center text-2xl mt-5 text-dark-green">
            CONTACT US
          </h1>
          <div className="flex w-full mt-2 justify-center">
            <form className="lg:w-2/4 w-[80%] lg:mt-2 mt-10 text-sm lg:text-lg bg p-4 shadow-2xl bg-white mb-8">
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Name:
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full border-2 border-dark-green p-2 rounded"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Email:
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full border-2 border-dark-green p-2 rounded"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Phone:
                </label>
                <input
                  type="number"
                  name="user_phone"
                  required
                  className="w-full border-2 border-dark-green p-2 rounded"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Message:
                </label>
                <textarea
                  name="message"
                  required
                  className="w-full border-2 h-24 border-dark-green p-2 rounded"
                />
              </div>

              <button
                type="submit"
                className="bg-dark-green text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Send Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
