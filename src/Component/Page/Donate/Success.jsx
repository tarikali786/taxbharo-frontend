import React from "react";
import SuccessIcon from "../../../assets/success.png";
export const Success = () => {
  return (
    <div className="w-full md:px-10 lg:px-16 xl:px-44 px-6 py-4 flex flex-col  items-center justify-center min-h-[70vh] text-center">
      <div className="size-[140px] mb-4">
        <img src={SuccessIcon} alt="" />
      </div>
      <h1 className=" text-2xl md:text-4xl font-bold text-green-600">
        Thank You for Your Donation!
      </h1>
      <p className="mt-4 text-black-400">
        Your generous donation helps us continue our mission. We truly
        appreciate your support!
      </p>
      <button
        onClick={() => (window.location.href = "/")}
        className="mt-6 px-6 py-3 bg-blue-500 text-white-500 rounded-md hover:bg-green-600 transition"
      >
        Return to Home
      </button>
    </div>
  );
};
