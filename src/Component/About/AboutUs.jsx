import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="w-full md:px-28 lg:px-44 pb-10  px-2">
      <div className="mt-10">
        <h1 className="text-center md:text-3xl text-2xl text-blue-500  font-bold  mb-4  ">
          About Us
        </h1>
        <p className="text-lg text-black-400 mt-4">
          Taxbharo is a budding online platform to help us reach customers and
          help customers be aware of present day scenario of Taxation in India.
          At our office in Hyderabad we offer Taxation Assistance in India
          assisting you with the filing of Tax returns in Hyderabad by Providing
          Services like, Bookkeeping (Accounting) PAN card/TAN
          application/correction/duplicate, Income Tax returns, GST
          Registration/returns, TDS/TCS returns, Response to Income Tax Notices,
          Calculation and Payment of Advance Tax,Tax Planning, Private and
          Public Limited Company Registration (Incorporation), DIN/CIN
          application, Partnership registration, Digital Signature Certificate,
          Payroll Processing and other services bearing similar threads.
        </p>
      </div>
      <div className="mt-10">
        <h1 className="text-center md:text-3xl text-2xl text-blue-500  font-bold  mb-4  ">
          What do we do?
        </h1>
        <p className="text-lg text-black-400 mt-4">
          Taxbharo: Provide help for Taxpayers, Proprietors, Directors,
          Partners, Entrepreneurs and stakeholders find quality assistance
          services in regards to complying with Indian Tax, Corporate and
          Business Laws. With a Vision to be able to provide a One-stop Shop for
          Compliance solutions; We take up various matters like Accounting/Book
          keeping, Incorporation Indian Taxation Assistance (Direct and Indirect
          Taxes), Incorporation and Financial Statutory Compliance. We offer
          Indian Taxation Assistance (Direct and Indirect Taxes),Private and
          Public Limited Company Registration (Incorporation), DIN/CIN
          application, Partnership registration, Digital Signature Certificate,
          Payroll Processing and other services bearing similar threads.
        </p>
      </div>
      <div className="mt-10">
        <h1 className="text-center md:text-3xl text-2xl text-blue-500  font-bold  mb-4  ">
          Reach Us
        </h1>
        <div className="lg:grid lg:grid-cols-2 mt-16">
          <div>
            <Link to="tel:+917286058270" className="flex flex-row items-center">
              <CallIcon className="mr-2 text-blue-500   " />
              +91 72860 58270
            </Link>
            <Link
              to="mailto:taxbharoin@gmail.com"
              className="flex flex-row mt-2 items-center"
            >
              <EmailIcon className="mr-2 text-blue-500 " />
              taxbharoin@gmail.com
            </Link>
            <div className="flex flex-row mt-2 items-start">
              <LocationOnIcon className="mr-2 mt-1 text-blue-500 " />
              <address>
                E1, Smritinsha Apartment,
                <br />
                Road no 12,
                <br />
                Banjara Hills - Hyderabad
              </address>
            </div>
          </div>
          <div>
            <iframe
              loading="lazy"
              src="https://maps.google.com/maps?q=Smritinsha%20Apartment&amp;t=m&amp;z=12&amp;output=embed&amp;iwloc=near"
              title="Smritinsha Apartment"
              aria-label="Smritinsha Apartment"
              data-aspectratio="0.5625"
              data-oldwidth="520"
              className="w-full h-80"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
