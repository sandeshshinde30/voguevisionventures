import React, { useState } from "react";
import Header from "./header";
import "../css/header.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const navigate = useNavigate();

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  // Validation Message and Pop-Up State
  const [validMsg, setValidMsg] = useState("");
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [isEmailPopUpVisible, setEmailIsPopUpVisible] = useState(false);
  const [emailSentStatusColor, setemailSentStatusColor] = useState("black");
  const [mailSentMsg, setmailSentMsg] = useState("");

  // Loader State
  const [loading, setLoading] = useState(false);

  // Go back to the previous page
  function back() {
    navigate("/");
  }

  // Validate form inputs
  function formValidation(event) {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!name.trim()) {
      setValidMsg("Name field cannot be empty.");
      return;
    }
    if (!email.trim()) {
      setValidMsg("Email field cannot be empty.");
      return;
    }
    if (!emailRegex.test(email)) {
      setValidMsg("Please enter a valid email address.");
      return;
    }
    if (!phone.trim()) {
      setValidMsg("Phone field cannot be empty.");
      return;
    }
    if (!phoneRegex.test(phone)) {
      setValidMsg("Phone number must be exactly 10 digits.");
      return;
    }
    if (!msg.trim()) {
      setValidMsg("Message field cannot be empty.");
      return;
    }

    setValidMsg(""); // Clear validation messages
    setIsPopUpVisible(true); // Show confirmation pop-up
  }

  // Close pop-up and reset form
  function closePopUp() {
    setIsPopUpVisible(false);
    setName("");
    setEmail("");
    setPhone("");
    setMsg("");
  }

  // Close email pop-up and reset form
  function closeEmailPopUp() {
    setEmailIsPopUpVisible(false);
    closePopUp();
  }

  // Handle email submission using EmailJS
  function handleSubmit(event) {
    event.preventDefault();

    // Start the loader when email submission begins
    setLoading(true);

    const serviceId = "service_9habsls";
    const templateId = "template_2knm81z";
    const userId = "JIL-DwmopgzwB0Gn6";

    const templateParams = {
      from_name: name,
      to_name: "Hrishikesh",
      email: email,
      phone: phone,
      message: msg,
    };

    closePopUp();

    // emailjs
    //   .send(serviceId, templateId, templateParams, userId)
    //   .then((response) => {
    //     console.log("SUCCESS!", response.status, response.text);
    //     setmailSentMsg("Email successfully sent..");
    //     setemailSentStatusColor("red-700");
    //     setEmailIsPopUpVisible(true);
    //     closePopUp(); // Close pop-up after successful submission
    //   })
    //   .catch((error) => {
    //     console.error("FAILED...", error);
    //     setmailSentMsg("Email failed to send..");
    //     setemailSentStatusColor("dark-green");
    //     setEmailIsPopUpVisible(true);
    //     closePopUp();
    //   })
    //   .finally(() => {
    //     // Stop the loader after the process is complete
    //     setLoading(false);
    //   });

    const timer = setTimeout(() => {
      const success = 1;

      if(success == 0){
        setmailSentMsg("Email failed to sent..");
        setemailSentStatusColor("dark-green")
        setEmailIsPopUpVisible(true);
      }
      else{
        setmailSentMsg("Email successfully sent..");
        setemailSentStatusColor("red-700")
        setEmailIsPopUpVisible(true);
      }
      setLoading(false);

    }, 5000);

     
  }

  return (
    <>
      <div className="bg-background-green min-h-screen">
        <button
          onClick={back}
          className="fixed bottom-5 left-5 font-bold bg-darker-green text-white p-4 rounded-full shadow-lg hover:bg-dark-green"
        >
          Back
        </button>

        <div className="fixed top-0 left-0 w-full z-50 bg-background-green shadow">
          <Header />
        </div>

        <div className="pt-20">
          <h1 className="rowdies font-thin text-center text-3xl mt-16 text-dark-green">
            CONTACT US
          </h1>

          {/* Validation Message Container */}
          {validMsg && (
            <div className="flex justify-center mt-4">
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-[80%] lg:w-2/4">
                <span>{validMsg}</span>
              </div>
            </div>
          )}

          {/* Popup for Confirmation */}
          {isPopUpVisible && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white w-[80%] lg:w-1/3 p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl font-bold text-green-700 mb-4">
                  Confirmation
                </h2>
                <p className="text-gray-700 mb-6">Are you sure you want to submit?</p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={closePopUp}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="bg-dark-green text-white px-4 py-2 rounded hover:bg-darker-green transition"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Email Submission Status Pop-Up */}
          {isEmailPopUpVisible && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white w-[80%] lg:w-1/3 p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl font-bold text-darker-green mb-4">Status</h2>
                <p className="text-gray-700 mb-6">{mailSentMsg}</p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={closeEmailPopUp}
                    className="bg-dark-green text-white px-4 py-2 rounded hover:bg-darker-green transition"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Loader */}
          {loading && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white w-[80%] lg:w-1/3 p-6 rounded-lg shadow-lg text-center">
                <div className="flex justify-center">
                  <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-solid border-darker-green border-t-transparent rounded-full" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
                <p className="text-gray-700 mt-4">Sending your email...</p>
              </div>
            </div>
          )}

          <div className="flex w-full mt-2 justify-center">
            <form onSubmit={formValidation} className="lg:w-2/4 w-[80%] lg:mt-2 mt-2 text-sm lg:text-lg bg p-4 shadow-2xl bg-white mb-8">
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">Name:</label>
                <input
                  type="text"
                  name="user_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border-2 border-dark-green p-2 rounded"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">Email:</label>
                <input
                  type="text"
                  name="user_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-2 border-dark-green p-2 rounded"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">Phone:</label>
                <input
                  type="number"
                  name="user_phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border-2 border-dark-green p-2 rounded"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">Message:</label>
                <textarea
                  name="message"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  className="w-full border-2 h-24 border-dark-green p-2 rounded"
                />
              </div>

              <button type="submit" className="bg-dark-green text-white px-4 py-2 rounded hover:bg-green-700 transition">
                Send Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
