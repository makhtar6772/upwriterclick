import React, { useState } from "react";
import ImageSlider from "./ImageSlider";
import ServiceCard from "./ServiceCard";
import DownloadOptions from "./DownloadOption";
import ProfileSetting from "./ProfileSetting";
import ProfileDetails from "./ProfileDetails";
import AiMentor from "./AiMentor";
import CreditsHistory from "./CreditsHistory";
import ContactUs from "./ContactUs";

function DashBoardRight({
  firstName,
  lastName,
  email,
  experience,
  overview,
  samples,
  skills,
  country,
  upwork,
  facebook,
  linkedin,
  fiverr,
  credits,
}) {
  const [selectedService, setSelectedService] = useState(null);
  const [showProfileDetails, setShowProfileDetails] = useState(false);
  const [showProfileSetting, setShowProfileSetting] = useState(false);
  const [showDashboardContent, setShowDashboardContent] = useState(true);

  const handleServiceCardClick = (service) => {
    setSelectedService(service);
    setShowProfileDetails(false);
    setShowProfileSetting(false);
    setShowDashboardContent(false);
  };

  const handleUserProfileClick = () => {
    setShowProfileSetting(!showProfileSetting);
    setShowProfileDetails(false);
    setShowDashboardContent(true);
  };

  const handleProfileClick = () => {
    setShowProfileDetails(true);
    setShowProfileSetting(false);
    setShowDashboardContent(false);
  };

  const handleCancelProfileDetails = () => {
    setShowProfileDetails(false);
    setShowDashboardContent(true);
  };

  return (
    <div className="w-[80%] h-[90%] ml-4">
      <div className="flex-1 p-4 w-[100%]">
        <div className="top-section flex justify-between items-center mb-4">
          <h2 className="text-2xl">
            {selectedService ? selectedService : "Dashboard"}
          </h2>
          <div className="flex flex-row gap-4">
            <span className="NewIdea">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#7ed321"
                fill="none"
              >
                <path
                  d="M5.14286 14C4.41735 12.8082 4 11.4118 4 9.91886C4 5.54539 7.58172 2 12 2C16.4183 2 20 5.54539 20 9.91886C20 11.4118 19.5827 12.8082 18.8571 14"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M14 10C13.3875 10.6432 12.7111 11 12 11C11.2889 11 10.6125 10.6432 10 10"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M7.38287 17.0982C7.291 16.8216 7.24507 16.6833 7.25042 16.5713C7.26174 16.3343 7.41114 16.1262 7.63157 16.0405C7.73579 16 7.88105 16 8.17157 16H15.8284C16.119 16 16.2642 16 16.3684 16.0405C16.5889 16.1262 16.7383 16.3343 16.7496 16.5713C16.7549 16.6833 16.709 16.8216 16.6171 17.0982C16.4473 17.6094 16.3624 17.8651 16.2315 18.072C15.9572 18.5056 15.5272 18.8167 15.0306 18.9408C14.7935 19 14.525 19 13.9881 19H10.0119C9.47495 19 9.2065 19 8.96944 18.9408C8.47283 18.8167 8.04281 18.5056 7.7685 18.072C7.63755 17.8651 7.55266 17.6094 7.38287 17.0982Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <path
                  d="M15 19L14.8707 19.6466C14.7293 20.3537 14.6586 20.7072 14.5001 20.9866C14.2552 21.4185 13.8582 21.7439 13.3866 21.8994C13.0816 22 12.7211 22 12 22C11.2789 22 10.9184 22 10.6134 21.8994C10.1418 21.7439 9.74484 21.4185 9.49987 20.9866C9.34144 20.7072 9.27073 20.3537 9.12932 19.6466L9 19"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <path
                  d="M12 15.5V11"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span className="UserProfile" onClick={handleUserProfileClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#7ed321"
                fill="none"
              >
                <path
                  d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
              </svg>
            </span>
          </div>
        </div>
        {showProfileSetting && (
          <div className="w-full">
            <ProfileSetting
              firstName={firstName}
              lastName={lastName}
              email={email}
              onProfileClick={handleProfileClick}
            />
          </div>
        )}
        {showDashboardContent && (
          <>
            <div className="flex flex-row gap-10">
              <div className="w-[65%]">
                <ImageSlider />
              </div>
              <div className="w-[15%] ml-10">
                <DownloadOptions />
              </div>
            </div>
            <div className="w-[74%]">
              <h3 className="text-[30px] my-10">Our Services</h3>
              <div className="projects-list grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <ServiceCard
                  title="AI Mentor"
                  onClick={() => handleServiceCardClick("AI Mentor")}
                />
                <ServiceCard
                  title="Contact US"
                  onClick={() => handleServiceCardClick("Contact US")}
                />

                <ServiceCard
                  title="Chrome Extension"
                  onClick={() => handleServiceCardClick("Chrome Extension")}
                />
                <ServiceCard
                  title="Credits History"
                  onClick={() => handleServiceCardClick("Credits History")}
                />
              </div>
            </div>
          </>
        )}
        {showProfileDetails && (
          <div className="w-full">
            <ProfileDetails
              onCancelClick={handleCancelProfileDetails}
              firstName={firstName}
              lastName={lastName}
              email={email}
              experience={experience}
              overview={overview}
              samples={samples}
              skills={skills}
              country={country}
              upwork={upwork}
              facebook={facebook}
              fiverr={fiverr}
              linkedin={linkedin}
            />
          </div>
        )}
        {/* Render selected service component */}
        {selectedService === "Credits History" && (
          <div className="w-full">
            <CreditsHistory credits={credits} />
          </div>
        )}
        {selectedService === "Contact US" && (
          <div className="w-full">
            <ContactUs />
          </div>
        )}
        {/* Render AI Mentor based on selected service */}
        {selectedService === "AI Mentor" && (
          <div className="w-full">
            <AiMentor />
          </div>
        )}
      </div>
    </div>
  );
}

export default DashBoardRight;
