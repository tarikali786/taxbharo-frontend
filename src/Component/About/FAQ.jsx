import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
import { get } from "../Hook/api";

export const FAQ = () => {
  const [FAQ, setFAQ] = useState([]);

  const fecthAboutFAQ = async () => {
    try {
      const response = await get("/about-faqs");
      console.log(response.data.data);
      setFAQ(response?.data?.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fecthAboutFAQ();
    // window.scrollTo(0, 0);
  }, []);

  return (
    <div className="md:my-32  my-20 w-full">
      <h1 className="text-center text-2xl md:text-3xl font-semibold text-blue-500  ">
      FAQ’s
      </h1>

      <div className="md:mt-12 mt-10">
        {FAQ?.map((item, index) => (
          <Accordion defaultExpanded={index === 0} key={index} className="mt-2">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="text-lg font-semibold text-black-500 "
            >
              {item?.attributes?.question}
            </AccordionSummary>
            <AccordionDetails>{item?.attributes?.answer}</AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};
