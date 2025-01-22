import React from "react";
import Cancle from "../../../assets/Cancle.png";
export const Fail = () => {
  return (
    <div className="w-full md:px-10 lg:px-16 xl:px-44 px-6 py-4 flex flex-col  items-center justify-center min-h-[70vh] text-center">
      <div className="size-[120px] mb-4">
        <img src={Cancle} alt="" />
      </div>
      <h1 className=" text-2xl md:text-4xl font-bold text-green-600">
        Donation Failed
      </h1>
      <p className="mt-4 text-gray-700">
        Unfortunately, we couldn't process your donation. Please try again.
      </p>
      <button
        onClick={() => (window.location.href = "/")}
        className="mt-6 px-8 py-3 bg-[#da3e3e] text-white-500 rounded-md hover:bg-red-600 transition"
      >
        Try Again
      </button>
    </div>
  );
};
