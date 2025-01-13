import { memo, useEffect, useState } from "react";
import Img1 from "../../assets/Service.jpg";

import { Button } from "../Common/Button";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export const ServiceCard = memo(() => {
  const [steps, setSteps] = useState([]);
  const response = `Step 1: Submit your enquiry for PAN with us 
  along with the documents required. Step 2: Advisor shall submit 
  the PAN application. (https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html) Step 3: Client shall 
  be provided with the application acknowledgement number and tracking link. (https://tin.tin.nsdl.com/pantan/StatusTrack.html) Step 4: Receipt of Physical PAN
   Step 5: Receipt of Physical PAN Step 6: Receipt of Physical PAN `;
  useEffect(() => {
    const formattedSteps = response
      .split(/Step \d+:/)
      .map((step) => {
        const linkMatch = step.match(/\((https?:\/\/[^\)]+)\)/);
        const text = step.replace(/\((https?:\/\/[^\)]+)\)/, "").trim();
        const link = linkMatch ? linkMatch[1] : "";
        return { text, link };
      })
      .filter((step) => step.text !== "");

    setSteps(formattedSteps);
  }, []);

  return (
    <div className=" grid gap-y-10 md:gap-y-14 my-10 md:my-20 ">
      <div className="grid md:grid-cols-2 lg:gap-x-16 xl:gap-x-32 gap-6">
        <div className="rounded-xl overflow-hidden w-full h-[26vh]  lg:h-[42vh] shadow-lg">
          <img src={Img1} alt="" className=" object-fill w-full h-full " />
        </div>
        <div className="p-4  shadow-lg rounded-xl bg-blue-100 ">
          <h1 className="text-xl font-semibold ">Documents Required</h1>
          <ul className="text-lg text-black-300 list-disc pl-4 mt-6">
            <li>Pan Card </li>
            <li>Bank Statement </li>
            <li>
              {" "}
              Policies and other documents (our advisor <br /> will discuss on
              case to case bases){" "}
            </li>
          </ul>
          <div></div>
        </div>
      </div>

      <div className="grid gap-y-10 ">
        <div className=" md:w-full p-10 shadow-lg rounded-xl bg-blue-100 ">
          <h1 className="text-xl font-semibold ">Income Tax Filing</h1>
          <Stepper
            activeStep={steps?.length}
            orientation="vertical"
            className="my-10 w-[100%] "
          >
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel>
                  <p className=" text-black-400 text-sm  ">{label?.text}</p>
                  <a
                    className=" hidden md:block text-black-300 text-sm sm:w-1/2 md:w-full"
                    href={label?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {label?.link}
                  </a>
                  {label?.link && (
                    <div className="md:hidden block mt-2">
                      <Button text="Click " link={label?.link} />
                    </div>
                  )}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          <div className="mt-6">
            <Button text="Start Process" />
          </div>
        </div>

        <div className=" lg:w-1/2 p-8 w-full shadow-lg rounded-xl bg-blue-100">
          <h1 className="text-xl font-semibold ">
            Penalty for Late Filing Income Tax Return
          </h1>
          <p className="mt-6">
            Taxpayers who do not file their income tax return on time are
            subject to penalty and charged an interest on the late payment of
            income tax.
          </p>
          <ul className="text-lg text-black-300 list-disc pl-8 mt-2 ">
            <li>Late Filing between 1st August and 31st December - Rs.5000 </li>
            <li>Our advisor will reach you in 24 hours </li>
            <li>Late Filing After 31st December - Rs.10,000 </li>
            <li>
              {" "}
              Penalty if taxable income is less than Rs.5 lakhs - Rs.1000
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});

ServiceCard.displayName = "ServiceCard";
