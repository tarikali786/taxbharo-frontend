import { useState, useEffect, useMemo } from "react";
import { SkeletonLoading } from "../Common/Skeleton";
import { Divider } from "@mui/material";
import axios from "axios";

export const VerifyNumber = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const [isLoading, setIsLoading] = useState(true);
  const [countrySearch, setCountrySearch] = useState("India");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({
    name: "India",
    flag: "https://flagcdn.com/w320/in.png",
    code: "+91",
  });
  const [dropdownVisible, setDropdownVisible] = useState(false); // State for dropdown visibility

  const GetCountryCode = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const countryList = response.data.map((country) => ({
        name: country.name.common,
        flag: country.flags.png,
        code: country.idd?.root
          ? country.idd.root + (country.idd?.suffixes?.[0] || "")
          : "",
      }));
      setCountries(countryList);
      setIsLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching country data:", error);
      setIsLoading(false); // Ensure loading is false even on error
    }
  };

  useEffect(() => {
    GetCountryCode();
  }, []);

  const filteredCountries = useMemo(() => {
    if (!countrySearch) {
      return countries;
    }
    const lowercasedSearch = countrySearch.toLowerCase();
    return countries.filter(
      (country) =>
        country.name.toLowerCase().includes(lowercasedSearch) ||
        country.code.includes(lowercasedSearch)
    );
  }, [countries, countrySearch]);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setCountrySearch(country.name); // Set the input to the selected country name
    setDropdownVisible(false); // Hide dropdown after selection
  };

  // Handle input change for selected country
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setCountrySearch(inputValue);

    // Try to find a matching country
    const matchingCountry = countries.find(
      (country) => country.name.toLowerCase() === inputValue.toLowerCase()
    );

    if (matchingCountry) {
      setSelectedCountry(matchingCountry);
    }
  };

  // Handle focus and blur events to control dropdown visibility
  const handleInputFocus = () => {
    setDropdownVisible(true);
  };

  const handleInputBlur = () => {
    // Delay hiding the dropdown to allow selection
    setTimeout(() => {
      setDropdownVisible(false);
    }, 200);
  };

  return (
    <div className="w-full px-4 py-4 md:flex md:flex-col md:items-center md:shadow-md md:w-1/2 md:m-auto md:mt-10 md:pb-10 md:rounded">
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
        Verify your account
      </h1>
      <p className="text-lg text-black-300 leading-6 mb-10">
        Please confirm your country code and enter your phone number.
      </p>
      <Divider />
      <div className="relative">
        <div className="flex items-center gap-4 py-2 ">
          <div className="w-11 h-[34px]">
            <img
              className="w-full h-full object-fill rounded-md"
              src={selectedCountry?.flag}
              alt="country"
            />
          </div>
          <input
            className="text-lg font-semibold text-black-400 border-none outline-none"
            placeholder="Search Your Country"
            value={countrySearch}
            onChange={handleInputChange} // Use the new input handler
            onFocus={handleInputFocus} // Show dropdown on focus
            onBlur={handleInputBlur} // Hide dropdown on blur
          />
        </div>
        {dropdownVisible && countrySearch && filteredCountries.length > 0 && (
          <div className="absolute bg-white-500 z-10 bg-white border border-black-100 rounded-md shadow-md mt-1 w-full">
            {(filteredCountries ? filteredCountries : countries).map(
              (country, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleCountrySelect(country)}
                >
                  <img
                    className="w-8 h-8 object-contain"
                    src={country.flag}
                    alt={`${country.name} flag`}
                  />
                  <span>
                    {country.name} ({country.code})
                  </span>
                </div>
              )
            )}
          </div>
        )}
      </div>
      <Divider />
      <div className="py-4 text-lg flex gap-2 md:border md:border-black-300 md:rounded-lg">
        <span>{selectedCountry?.code}</span>
        <span className="text-black-300">|</span>
        <input
          type="text"
          placeholder="00000000"
          className="border-none outline-none"
        />
      </div>
      <Divider />
      <button className="w-full md:w-1/4 mt-8 md:mt-6 bg-black-500 text-white-500 font-semibold py-3 rounded text-lg px-10 transition-transform transform     active:scale-50">
        Continue
      </button>
    </div>
  );
};
