import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreditsInfo from "./CreditsInfo";

function DashBoardLeft({ onSectionClick, creditsinfo }) {
  const [selectedHome, setSelectedHome] = useState(false);
  const [selectedAiMentor, setSelectedAiMentor] = useState(false);
  const [selectedCreditsHistory, setSelectedCreditsHistory] = useState(false); // Renamed variable
  const [selectedContactUs, setSelectedContactUs] = useState(false); // Renamed variable

  const handleClick = (section) => {
    setSelectedHome(section === "Home");
    setSelectedAiMentor(section === "AI Mentor");
    setSelectedCreditsHistory(section === "Credits History");
    setSelectedContactUs(section === "Contact US");

    onSectionClick(section);
  };

  const handlelogout = () => {
    localStorage.removeItem("userId");
    window.location.href = "/";
  };

  return (
    <div className="w-[20%]">
      <div className="w-[100%] h-[92%] ml-4 p-4 bg-white justify-between rounded-[14px] shadow-md">
        <div className="rounded-full p-2 mx-auto mb-6">
          <h1 className="text-[30px] font-bold text-center text-green-500">
            Upwriter
          </h1>
        </div>
        <div className="flex flex-col gap-[400px]">
          <nav>
            <ul className="justify-center items-center text-center text-xl">
              <li>
                <a
                  className={`block py-2 px-4 rounded-md border border-gray-300 mb-4 cursor-pointer ${
                    selectedHome ? "bg-green-500 text-white" : "bg-white"
                  }`}
                  onClick={() => handleClick("Home")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className={`block py-2 px-4 rounded-md border border-gray-300 mb-4 cursor-pointer ${
                    selectedAiMentor ? "bg-green-500 text-white" : "bg-white"
                  }`}
                  onClick={() => handleClick("AI Mentor")}
                >
                  AI Mentor
                </a>
              </li>
              <li>
                <a
                  className={`block py-2 px-4 rounded-md border border-gray-300 mb-4 cursor-pointer ${
                    selectedCreditsHistory
                      ? "bg-green-500 text-white"
                      : "bg-white"
                  }`}
                  onClick={() => handleClick("Credits History")}
                >
                  Credits History
                </a>
              </li>
              <li>
                <a
                  className={`block py-2 px-4 rounded-md border border-gray-300 mb-4 cursor-pointer ${
                    selectedContactUs ? "bg-green-500 text-white" : "bg-white"
                  }`}
                  onClick={() => handleClick("Contact US")}
                >
                  Contact US
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex justify-center items-center">
            <button
              onClick={handlelogout}
              className="w-20 py-2 px-2 text-white bg-green-600 rounded-md transition duration-300 hover:bg-green-500 bottom-0"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoardLeft;
