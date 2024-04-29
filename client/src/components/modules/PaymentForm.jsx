import React, { useState, useEffect } from "react";
import axios from "axios";
import UserMessage from "./UserMessage"; // Import the UserMessage component

function PaymentForm() {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [amount, setAmount] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [showMessage, setShowMessage] = useState(false); // State to manage the visibility of the user message
  const userId = localStorage.getItem("userId"); // Retrieve userId from localStorage
  const handlePlanChange = (e) => {
    setSelectedPlan(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      setSubmitting(true);
      const response = await axios.post("http://3.145.167.157:8000/plan", {
        userId,
        plan: selectedPlan,
        amount,
        transactionId,
      });
      console.log("Payment submitted successfully:", response.data);
      setSelectedPlan("");
      setTransactionId("");
      setAmount("");
      setShowMessage(true); // Show the user message after successful submission
    } catch (error) {
      console.error("Error submitting payment:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-white p-8 shadow-xl rounded-lg w-[30%] mt-10">
        <h2 className="text-xl font-semibold mb-4">Select a Plan</h2>
        <select
          value={selectedPlan}
          onChange={handlePlanChange}
          className="block w-full mb-4 border border-gray-300 rounded-md p-2"
        >
          <option value="">Select a plan</option>
          <option value="Basic">Basic</option>
          <option value="Standard">Standard</option>
          <option value="Premium">Premium</option>
        </select>
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={handleAmountChange}
          className="block w-full mb-4 border border-gray-300 rounded-md p-2"
          placeholder="Enter amount"
        />
        <input
          type="text"
          name="transactionId"
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
          className="block w-full mb-4 border border-gray-300 rounded-md p-2"
          placeholder="Enter Transaction ID"
        />
        <button
          onClick={handleSubmit}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded inline-flex items-center"
          disabled={submitting}
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
        {/* Show user message if showMessage is true */}
        {showMessage && (
          <UserMessage message="Please wait for a moment, we are reviewing your billing information." />
        )}
      </div>
    </div>
  );
}

export default PaymentForm;
