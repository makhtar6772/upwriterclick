import React, { useState, useEffect } from "react";
import axios from "axios";
import DashBoardLeft from "./modules/DashBoardLeft";
import DashBoardRight from "./modules/DashBoardRight";
import CreditsHistory from "./modules/CreditsHistory";
import ContactUs from "./modules/ContactUs";
import AiMentor from "./modules/AiMentor";

function Dashboard() {
  const [selectedSection, setSelectedSection] = useState("Home");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const response = await axios.get(
          `http://localhost:8000/user/${userId}`
        );
        console.log(response.data);
        setUserData(response.data.user);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center text-xl">
        <p className="bg-red-600 text-white p-10 shadow-sm">
          Please login to your account.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100">
      <div className="user">{userData && <div>{userData.firstName}</div>}</div>
      <div className="flex w-[100%] h-screen">
        <DashBoardLeft
          onSectionClick={handleSectionClick}
          creditsinfo={userData.credits}
        />
        {selectedSection === "Home" ? (
          <DashBoardRight
            firstName={userData.firstName}
            lastName={userData.lastName}
            email={userData.email}
            experience={userData.experience}
            overview={userData.upworkOverview}
            samples={userData.workSamples}
            skills={userData.skills}
            country={userData.country}
            upwork={userData.upwork}
            facebook={userData.facebook}
            linkedin={userData.linkedin}
            fiverr={userData.fiverr}
            credits={userData.credits}
          />
        ) : selectedSection === "Credits History" ? (
          <div className="w-[85%] m-auto ml-10">
            <CreditsHistory credits={userData.credits} />
          </div>
        ) : selectedSection === "AI Mentor" ? (
          <div className="w-[85%] m-auto ml-10">
            <AiMentor />
          </div>
        ) : selectedSection === "Contact US" ? (
          <div className="w-[85%] m-auto ml-10">
            <ContactUs />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Dashboard;
