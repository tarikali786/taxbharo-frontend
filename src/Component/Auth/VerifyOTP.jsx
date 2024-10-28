import { useState } from "react";
import { SkeletonLoading } from "../Common/Skeleton";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useEffect } from "react";

export const VerifyOTP = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [otp, setOtp] = useState("");
  const handleChange = (newValue) => {
    setOtp(newValue);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="w-full px-4 py-4 md:flex md:flex-col md:items-center md:mt-10 md:pb-10 md:rounded md:shadow-md md:w-1/2 md:m-auto">
      <div className="w-36 h-10 mt-12">
        {isLoading && <SkeletonLoading />}
        <img
          className="w-full h-full object-fill rounded-md"
          src="https://www.taxbharo.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-blue.f73a0aaf.png&w=1920&q=75"
          alt="Sign-in"
          onLoad={() => setIsLoading(false)}
        />
      </div>
      <h1 className="text-2xl font-semibold text-black-500 mt-6 mb-4">
        Verify your phone number
      </h1>
      <p className="text-lg text-black-300 leading-6 mb-10 ">
        We’ve sent an SMS with an activation code to your phone{" "}
        <b className="font-semibold text-black-500">+33 2 94 27 84</b>
      </p>
      <div className="md:w-1/2 ">
        <MuiOtpInput value={otp} onChange={handleChange} length={5} />
      </div>

      <p className="text-lg text-center mt-16 md:mt-8 text-black-300">
        I didn’t receive a code{" "}
        <b className=" font-semibold text-black-500">Resend</b>
      </p>
      <button className="w-full md:w-1/4 mt-8 md:mt-6 bg-black-500 text-white-500 font-semibold py-3 rounded text-lg px-10 transition-transform transform     active:scale-50">
        Verify
      </button>
    </div>
  );
};
