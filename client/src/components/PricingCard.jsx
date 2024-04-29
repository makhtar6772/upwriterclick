import React from "react";
import { Link } from "react-router-dom";

const PricingCard = ({ title, price, features, buttonText }) => {
  return (
    <div className="shadow-2xl text-center p-8 rounded-lg relative w-64 m-10">
      <div className="border-b-2 border-gray-200 pb-4 transition duration-500 hover:border-purple-600">
        <h4 className="text-lg font-semibold mb-4">{title}</h4>
      </div>
      <div className="py-8">
        <div className="bg-gradient-to-r from-purple-600 to-purple-400 w-20 h-20 rounded-full mx-auto mb-[30px] flex items-center justify-center border-4 border-white shadow-md transition duration-500 transform hover:scale-105">
          <h1 className="text-white text-3xl font-semibold">{price}</h1>
        </div>
        <ul className="mt-8">
          {features.map((feature, index) => (
            <li key={index} className="mb-4 text-black-600">
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="py-4">
        <Link
          to="/plan"
          className="block bg-gradient-to-r from-purple-600 to-purple-400 py-3 px-8 text-white font-semibold rounded-full shadow-md transition duration-300 hover:shadow-lg hover:from-purple-700 hover:to-purple-500"
        >
          Choose Plan
          </Link>
      </div>
    </div>

  );
};

export default PricingCard;
