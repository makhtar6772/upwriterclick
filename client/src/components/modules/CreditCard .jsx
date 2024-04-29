import React, { useState } from "react";
import PaymentCard from "./PaymentCard";
import axios from "axios";

const CreditCard = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [amount, setAmount] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [numberOfCredits, setNumberOfCredits] = useState("");
  const userId = localStorage.getItem("userId");
  const [submitting, setSubmitting] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const creditOptions = [
    { credits: 500, price: 79.0 },
    { credits: 250, price: 40.0 },
    { credits: 125, price: 22.0 },
    { credits: 25, price: 4.95 },
    { credits: 5, price: 0.99 },
  ];

  const handleBuyClick = () => {
    setShowDropdown(true);
  };

  const handleCancelClick = () => {
    setShowDropdown(false);
  };

  const handleOptionChange = (event) => {
    const selectedIndex = event.target.value;
    setAmount(creditOptions[selectedIndex].price);
    setNumberOfCredits(creditOptions[selectedIndex].credits.toString());
    setTransactionId("");
  };

  const handleSubmit = async () => {
    try {
      setSubmitting(true);
      const response = await axios.post("http://3.145.167.157:8000/credits", {
        userId,
        creditsAmount: amount,
        credits: numberOfCredits,
        creditstransactionId: transactionId,
      });
      console.log("Credits Added successfully:", response.data);
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
    <div className="bg-gray-100 h-screen w-screen">
      <PaymentCard />
      <div className="flex flex-row justify-center items-center gap-6">
        <div className="mt-4 w-[600px]">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4 flex flex-row gap-4 justify-between">
              <h2 className="text-lg font-bold">AI Credits</h2>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg mt-4">
            {creditOptions.map((option, index) => (
              <div
                key={index}
                className="mb-4 flex flex-row gap-4 justify-between"
              >
                <h2 className="text-lg font-bold">
                  {option.credits} AI Credits
                </h2>
                <p className="text-xl font-bold">${option.price}</p>
                {index === 0 && (
                  <p className="text-sm text-green-500">Saving 25%</p>
                )}
                {index === 1 && (
                  <p className="text-sm text-yellow-500">Saving 23%</p>
                )}
                {index === 2 && <p className="text-sm">Saving 12%</p>}
                {index > 2 && <p className="text-sm">Saving 0%</p>}
              </div>
            ))}
            <div className="flex mt-4 justify-end">
              <button
                onClick={handleBuyClick}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md"
              >
                Buy AI Credits
              </button>
            </div>
          </div>
        </div>

        {showDropdown && (
          <div className="bg-white p-6 rounded-lg shadow-lg mt-10 w-[30%]">
            <div className="mb-4">
              <label
                htmlFor="creditOption"
                className="block text-sm font-medium text-gray-700"
              >
                Select Credit Option
              </label>
              <select
                id="creditOption"
                name="creditOption"
                onChange={handleOptionChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Select...</option>
                {creditOptions.map((option, index) => (
                  <option key={index} value={index}>
                    {option.credits} AI Credits - ${option.price}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700"
              >
                Amount
              </label>
              <input
                type="number"
                id="amount"
                name="creditsAmount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="credits"
                className="block text-sm font-medium text-gray-700"
              >
                Number of Credits
              </label>
              <input
                type="number"
                id="credits"
                name="credits"
                value={numberOfCredits}
                onChange={(e) => setNumberOfCredits(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="transactionId"
                className="block text-sm font-medium text-gray-700"
              >
                Transaction ID
              </label>
              <input
                type="text"
                id="transactionId"
                name="creditstransactionId"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="flex justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
                onClick={handleCancelClick}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md"
                onClick={handleSubmit}
              >
                Confirm Purchase
              </button>
            </div>
            {showMessage && (
              <p>
                Please wait for a moment, we are reviewing your billing
                information.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CreditCard;
