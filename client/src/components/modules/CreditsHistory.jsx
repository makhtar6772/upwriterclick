import React, { useState, useEffect } from "react";
import axios from "axios";

function CreditsHistory({ credits }) {
  const [jobTitlesAndDates, setJobTitlesAndDates] = useState([]);

  useEffect(() => {
    // Fetch job titles and dates when the component mounts
    async function fetchJobTitlesAndDates() {
      try {
        const userId = localStorage.getItem("userId");
        const response = await axios.get(
          `http://localhost:8000/job-titles/${userId}`
        );
        setJobTitlesAndDates(response.data.jobTitlesAndDates);
      } catch (error) {
        console.error("Error fetching job titles:", error);
      }
    }

    fetchJobTitlesAndDates();
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div
      className="max-w-[98%] p-10 bg-white rounded-[20px] overflow-auto "
      style={{ maxHeight: "900px" }}
    >
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl text-center mb-6">Credits History</h1>
        <div className="balance-section mb-6 text-center">
          <h2 className="text-xl text-blue-500 mb-2">My Balance</h2>
          <p className="text-2xl font-bold">{credits} Credits</p>
          <button className="buy-connects-btn bg-blue-500 text-white px-6 py-2 mt-4 rounded hover:bg-blue-600 transition duration-300">
            Buy Credits
          </button>
        </div>
        <div className="filter-options mb-6">
          <label htmlFor="filter" className="font-bold">
            Filter:
          </label>
          <select id="filter" className="ml-2 px-4 py-2 rounded border">
            <option value="last-7-days">Last 7 days</option>
            <option value="last-30-days">Last 30 days</option>
            <option value="last-90-days">Last 90 days</option>
          </select>
        </div>
        <table className="history-table w-full">
          <thead>
            <tr>
              <th className="bg-gray-200 px-4 py-2">Date</th>
              <th className="bg-gray-200 px-4 py-2">Action</th>
              <th className="bg-gray-200 px-4 py-2">Credits</th>
            </tr>
          </thead>
          <tbody>
            {/* Iterate over jobTitlesAndDates and render table rows */}
            {jobTitlesAndDates.map((job, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">
                  {new Date(job.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </td>
                <td className="border px-4 py-2">
                  <span className="font-bold">Applied to job</span> <br />{" "}
                  <span className="text-green-600 font-bold">{job.title}</span>
                </td>
                <td className="border px-4 py-2">-1</td> {/* Credits amount */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CreditsHistory;
