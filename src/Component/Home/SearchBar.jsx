import { useEffect, useState } from "react";
import { get } from "../Hook/api";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Searchicon from "../../assets/Search.png";
import { Link } from "react-router-dom";

export const SearchBar = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [serviceData, setServiceData] = useState([]);
  const [blogData, setBlogData] = useState([]);
  const [faqData, setFaqData] = useState([]);
  const [calendarData, setCalendarData] = useState([]);
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
        setFaqData(response.data.faqs || []);
        setCalendarData(response.data.calendarEvents || []);
        setIsDropdownVisible(
          (response.data.services && response.data.services.length > 0) ||
            (response.data.blogs && response.data.blogs.length > 0) ||
            (response.data.faqs && response.data.faqs.length > 0) ||
            (response.data.calendarEvents &&
              response.data.calendarEvents.length > 0)
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
        src={Searchicon}
        alt="Search Icon"
      />
      <input
        className="w-full border-none outline-none"
        type="text"
        placeholder="Search your query here..."
        spellCheck
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
        onClick={handleInputClick}
      />
      {isDropdownVisible && (
        <div className="absolute top-[66px] left-0 w-full rounded-lg shadow-lg bg-white p-4 z-50 bg-white-500 max-h-[40vh] md:max-h-[45vh] overflow-y-auto">
          {serviceData.length !== 0 && (
            <div>
              <p className="font-semibold text-black-500 mb-1">Services</p>
              {serviceData.slice(0, 5).map((item, index) => (
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
              {blogData.slice(0, 5).map((item, index) => (
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

          {faqData?.length !== 0 && (
            <div className="mt-4">
              <p className="font-semibold text-black-500 mb-1 mt-2">FAQs</p>
              {faqData.slice(0, 3).map((item, index) => (
                <Accordion key={index} className="md:mt-4 mt-2">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className="text-sm font-semibold text-black-500 "
                  >
                    {item?.question}
                  </AccordionSummary>
                  <AccordionDetails className="text-sm ml-2 ">
                    {item?.answer}
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          )}

          {calendarData.length !== 0 && (
            <div className="mt-4">
              <p className="font-semibold text-black-500 mb-1">
                Calendar Event
              </p>
              {calendarData.slice(0, 5).map((item, index) => (
                <div key={index} className="py-2">
                  <h3 className="text-[16px] text-center ">{item?.date}</h3>
                  <p className="text-sm   font-semibold">{item?.event}</p>
                  <p className="text-sm ">{item?.description}</p>
                <hr />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
