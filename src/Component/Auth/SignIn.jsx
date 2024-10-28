import { useState } from "react";
import { SkeletonLoading } from "../Common/Skeleton";
import Img1 from "../../assets/signIn.png";
import { Google } from "./Google";
import { Apple } from "./Apple";
import { Email } from "./Email";
import { useEffect } from "react";

export const SignIn = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      {/* mobile layout */}
      <div className=" mt-16 flex flex-col gap-4 items-center px-10 text-center md:hidden ">
        <div className="w-36 h-10 md:h-52">
          {isLoading && <SkeletonLoading />}
          <img
            className="w-full h-full object-fill rounded-md"
            src={
              "https://www.taxbharo.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-blue.f73a0aaf.png&w=1920&q=75"
            }
            alt="Sign-in"
            onLoad={() => setIsLoading(false)}
          />
        </div>
        <div className="w-full h-60 md:h-52 mt-6">
          {isLoading && <SkeletonLoading />}
          <img
            className="w-full h-full object-fill rounded-md"
            src={Img1}
            alt="Sign-in"
            onLoad={() => setIsLoading(false)}
          />
        </div>
        <p className="text-lg text-black-500 leading-6 my-10">
          Now your finances are in one place and always under control
        </p>

        <div className="flex flex-col gap-4 w-full ">
          <Google />
          <Apple />
          <Email />
        </div>
      </div>

      {/* destop Layout */}
      <div
        className=" md:flex  gap-4 items-center justify-evenly px-10 text-center hidden  "
        style={{ height: "100vh" }}
      >
        <div className="w-1/2 md:flex md:flex-col md:items-center">
          <div className="w-full  mt-6">
            {isLoading && <SkeletonLoading />}
            <img
              className="w-full h-full object-fill rounded-md"
              src={Img1}
              alt="Sign-in"
              onLoad={() => setIsLoading(false)}
            />
          </div>
          <p className="text-lg text-black-500 leading-6 md:mt-10">
            Now your finances are in one place <br /> and always under control
          </p>
        </div>

        <div className="flex flex-col gap-4   mt-6 w-1/2 ">
          <div className="w-32  md:h-10 md:mb-10 md:flex  items-center justify-center ml-28 ">
            {isLoading && <SkeletonLoading />}
            <img
              className="w-full h-full object-fill rounded-md"
              src={
                "https://www.taxbharo.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-blue.f73a0aaf.png&w=1920&q=75"
              }
              alt="Sign-in"
              onLoad={() => setIsLoading(false)}
            />
          </div>
          <Google />
          <Apple />
          <Email />
        </div>
      </div>
    </>
  );
};
