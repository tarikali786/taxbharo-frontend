import { Button } from "../Common/Button";
import { useEffect, useState } from "react";
import { get } from "../Hook/api";
import { Link } from "react-router-dom";

export const SearchBar = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [serviceData, setServiceData] = useState([]);
  const [blogData, setBlogData] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleClickOutside = () => {
      setIsDropdownVisible(false);
    };

    const handleScroll = () => {
      setIsDropdownVisible(false);
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Debounced API call effect
  useEffect(() => {
    if (!searchTitle.trim()) {
      setServiceData([]);
      setBlogData([]);
      setIsDropdownVisible(false);
      return;
    }

    const delayDebounceFn = setTimeout(async () => {
      try {
        const response = await get(`/search?query=${searchTitle}`);
        setServiceData(response.data.services || []);
        setBlogData(response.data.blogs || []);
        setIsDropdownVisible(
          (response.data.services && response.data.services.length > 0) ||
            (response.data.blogs && response.data.blogs.length > 0)
        );
      } catch (error) {
        console.log(error);
      }
    }, 500); // Delay of 500ms

    return () => clearTimeout(delayDebounceFn); // Cleanup the timeout
  }, [searchTitle]);

  const handleInputClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="flex items-center justify-center gap-2 w-full md:w-2/3 m-auto px-4 py-3 rounded-md my-8 md:my-20 shadow-lg relative"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        className="md:w-10 md:h-10 w-8 h-8"
        src="https://www.taxbharo.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsearch.fdc26fb5.png&w=48&q=75"
        alt="Search Icon"
      />
      <input
        className="w-full border-none outline-none"
        type="text"
        placeholder="Documents required for income tax filing in 2024?"
        spellCheck
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
        onClick={handleInputClick}
      />
      {/* <Button text="Search" onClick={() => {}} /> */}
      {isDropdownVisible && (
        <div className="absolute top-[66px] left-0 w-full rounded-lg shadow-lg bg-white p-4 z-50 bg-white-500">
          {serviceData.length !== 0 && (
            <div>
              <p className="font-semibold text-black-500 mb-1">Services</p>
              {serviceData.map((item, index) => (
                <Link
                  key={index}
                  to={`service/${item?.pageUrl}`}
                  className="block hover:underline mt-1"
                >
                  {item?.service_name}
                </Link>
              ))}
            </div>
          )}
          {blogData.length !== 0 && (
            <div className="mt-4">
              <p className="font-semibold text-black-500 mb-1">Blogs</p>
              {blogData.map((item, index) => (
                <Link
                  key={index}
                  to={`blog/${item?.url}`}
                  className="block hover:underline mt-1"
                >
                  {item?.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
