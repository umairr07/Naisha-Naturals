import React from "react";
import { useNavigate } from "react-router-dom";

const TransactionSuccessPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded-lg shadow-lg lg:w-[450px] sm:w-[350px] text-center border border-gray-400">
        {/* Success Icon */}
        <div className="flex justify-center items-center w-20 h-20 bg-green-100 rounded-full mx-auto mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-12 h-12 text-green-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2l4-4m6 2a9 9 0 11-6.219-8.56"
            />
          </svg>
        </div>

        {/* Success Message */}
        <h1 className="lg:text-2xl sm:text-xl font-bold text-gray-800 mb-4">
          Transaction Successful!
        </h1>
        <p className="text-gray-600 sm:text-[15px] lg:text-[18px]">
          Thank you for your purchase. Your product will be delivered soon.
        </p>

        {/* CTA Button */}
        <button
          onClick={handleGoHome}
          className="mt-6 bg-green-400 hover:bg-green-600 text-white-400 lg:py-2 sm:py-2 lg:px-4 sm:px-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default TransactionSuccessPage;
