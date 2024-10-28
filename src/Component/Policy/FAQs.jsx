import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect } from "react";

export const FAQs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="md:my-10  w-full md:px-28 lg:px-44 px-2  ">
      <h1 className="text-center md:text-3xl text-2xl text-blue-500  font-semibold  mb-4 underline ">
        Frequently Asked Questions
      </h1>
      <Accordion defaultExpanded className="md:mt-20 mt-10">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="text-lg font-semibold text-black-500 "
        >
          What are few Deductions for Income Tax
        </AccordionSummary>
        <AccordionDetails className="text-sm ml-4 ">
          Nibh quisque suscipit fermentum netus nulla cras porttitor euismod
          nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum
          sulla craspor ttitore ismod nulla. Elit adipiscing proin quis est
          consectetur. Felis ultricies nisi, quis malesuada sem odio.
          Potentiмnibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus
          sit nullam diam tincidunt condimentum nullam.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="text-lg font-semibold text-black-500 "
        >
          How should I share the documents
        </AccordionSummary>
        <AccordionDetails className="text-sm ml-4 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          className="text-lg font-semibold text-black-500 "
        >
          How long it takes to process Income Tax Filing
        </AccordionSummary>
        <AccordionDetails className="text-sm ml-4 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          className="text-lg font-semibold text-black-500 "
        >
          How soon can I expect my income tax return
        </AccordionSummary>
        <AccordionDetails className="text-sm ml-4 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
