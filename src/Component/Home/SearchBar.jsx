import { Button } from "../Common/Button";
import { useEffect } from "react";

export const SearchBar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="flex items-center justify-center gap-2  w-full md:w-2/3 m-auto px-4   py-3 rounded-md my-8 md:my-20 boxshadow">
      <img
        className="md:w-10 md:h-10 w-8 h-8"
        src="https://www.taxbharo.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsearch.fdc26fb5.png&w=48&q=75"
        alt=""
      />
      <input
        className="w-full border-none outline-none"
        type="text"
        placeholder="Documents required for income tax filing in 2024?"
        spellCheck
      />
      <Button text="Search" />
    </div>
  );
};
