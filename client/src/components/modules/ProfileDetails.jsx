import React, { useState } from "react";
import axios from "axios";

const ProfileDetails = ({
  onCancelClick,
  firstName,
  lastName,
  email,
  experience,
  overview,
  samples,
  skills,
  country,
  facebook,
  upwork,
  fiverr,
  linkedin,
}) => {
  const [showMessage, setShowMessage] = useState(false);
  const userId = localStorage.getItem("userId");
  const [formData, setFormData] = useState({
    userId,
    firstName: firstName || "",
    lastName: lastName || "",
    experience: experience || "",
    country: country || "",
    upwork: upwork || "",
    fiverr: fiverr || "",
    linkedin: linkedin || "",
    facebook: facebook || "",
    upworkOverview: overview || "",
    workSamples: samples || "",
    skills: skills || [],
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSkillAdd = () => {
    if (formData.newSkill.trim() !== "") {
      setFormData({
        ...formData,
        skills: [...formData.skills, formData.newSkill.trim()],
        newSkill: "", // Clear the input after adding
      });
    }
  };

  const handleSkillRemove = (skill) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((s) => s !== skill),
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://3.145.167.157:8000/userinfo",
        formData
      );
      console.log(response.data);
      setShowMessage(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    onCancelClick();
  };

  return (
    <>
      <div
        className="bg-white rounded-[10px] overflow-auto"
        style={{ maxHeight: "800px" }}
      >
        <div className="py-8 w-[80%] mx-auto">
          <h1 className="text-2xl font-semibold text-center mb-8">
            Profile Details
          </h1>

          {/* Input Fields */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Name */}
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Your Name here"
                className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Your Name here"
                className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Years of Experience */}
            <div className="mb-4">
              <label
                htmlFor="experience"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Years of Experience
              </label>
              <input
                type="number"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                placeholder="Years of Experience"
                className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Country */}
            <div className="mb-4">
              <label
                htmlFor="country"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                placeholder="Country"
                className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Email Address */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="example@example.com"
                className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:border-blue-500"
                onChange={handleInputChange}
              />
            </div>

            {/* Upwork Profile Link */}
            <div className="mb-4">
              <label
                htmlFor="upwork"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Upwork Profile Link
              </label>
              <input
                type="text"
                id="upwork"
                name="upwork"
                placeholder="Upwork Profile Link"
                className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:border-blue-500"
                value={formData.upwork}
                onChange={handleInputChange}
              />
            </div>

            {/* Fiverr Profile Link */}
            <div className="mb-4">
              <label
                htmlFor="fiverr"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Fiverr Profile Link
              </label>
              <input
                type="text"
                id="fiverr"
                name="fiverr"
                placeholder="Fiverr Profile Link"
                className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:border-blue-500"
                value={formData.fiverr}
                onChange={handleInputChange}
              />
            </div>

            {/* LinkedIn Profile Link */}
            <div className="mb-4">
              <label
                htmlFor="linkedin"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                LinkedIn Profile Link
              </label>
              <input
                type="text"
                id="linkedin"
                name="linkedin"
                placeholder="LinkedIn Profile Link"
                className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:border-blue-500"
                value={formData.linkedin}
                onChange={handleInputChange}
              />
            </div>

            {/* Facebook Profile Link */}
            <div className="mb-4">
              <label
                htmlFor="facebook"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Facebook Profile Link
              </label>
              <input
                type="text"
                id="facebook"
                name="facebook"
                placeholder="Facebook Profile Link"
                className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:border-blue-500"
                value={formData.facebook}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="newSkill"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Enter New Skill
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="newSkill"
                  name="newSkill"
                  value={formData.newSkill}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:border-blue-500"
                />
                <button
                  onClick={handleSkillAdd}
                  className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Add
                </button>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="facebook"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Your Upwork Profile Overview
            </label>
            <textarea
              id="upworkOverview"
              name="upworkOverview"
              placeholder="Your Upwork Profile Overview"
              className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:border-blue-500"
              value={formData.upworkOverview}
              onChange={handleInputChange}
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="facebook"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Your Work Samples
            </label>
            <textarea
              id="workSamples"
              name="workSamples"
              placeholder="Your Work Samples Links"
              className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:border-blue-500"
              value={formData.workSamples}
              onChange={handleInputChange}
              cols="30"
              rows="8"
            ></textarea>
          </div>

          {/* Selected Skills */}
          <div className="mb-4">
            <h2 className="text-gray-700 font-semibold mb-2">
              Your Selected Skills:
            </h2>
            <ul className="flex flex-wrap">
              {formData.skills.map((skill, index) => (
                <li key={index} className="bg-gray-200 px-2 py-1 m-1 rounded">
                  {skill}{" "}
                  <button
                    onClick={() => handleSkillRemove(skill)}
                    className="ml-1 text-red-500"
                  >
                    x
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end">
            <button
              onClick={handleCancel}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md mr-4"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
            >
              Save Profile
            </button>
          </div>
        </div>
      </div>
      {showMessage && (
        <h2 className="text-xl text-center text-green-500">
          Your Data Updated
        </h2>
      )}
    </>
  );
};

export default ProfileDetails;
