import { useEffect } from "react";

export const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <h1 className="text-center md:text-3xl text-2xl font-semibold text-blue-500">
        Personal Income Tax Filing
      </h1>
      <p className="text-center my-2 text-md text-black-400 ">
        Personal Tax return filing for an individual with salary income.
      </p>
    </div>
  );
};
