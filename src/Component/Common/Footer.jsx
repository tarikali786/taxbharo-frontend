import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import { useCallback, useState } from "react";
import { post } from "../Hook/api";
import { Message } from "../Model";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [openModel, setOpenModel] = useState(false);
  const [msg, setMsg] = useState("Thank you for subscribing");
  const [color, setColor] = useState("");

  const handleCloseModel = useCallback(() => {
    setOpenModel(false);
  }, [openModel]);

  const handleEmialSubscribes = async (e) => {
    e.preventDefault();
    try {
      const res = await post("/news-letters", {
        data: { email },
      });
      console.log(res.data);
      setOpenModel(true);
      setMsg("Thank you for subscribing!");
      setColor("#28A745");
      setEmail("");
    } catch (error) {
      console.log(error);
      setOpenModel(true);
      setMsg("Subscription failed. Please try again.");
      setColor("#DC3545");
    }
  };

  return (
    <>
      {openModel && (
        <Message msg={msg} color={color} onClick={handleCloseModel} />
      )}
      <div className="w-full md:px-10 lg:px-16    px-4 py-12 bg-blue-500">
        <div
          className={` flex justify-center md:justify-between gap-2 md:items-center flex-col flex-wrap  sm:flex-row  `}
        >
          <Link to="about-us" className=" w-44 md:h-14  ">
            <img
              src="https://www.taxbharo.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-white.6272d145.png&w=1920&q=75"
              alt=""
            />
          </Link>
          <div className="grid grid-cols-3 lg:grid-cols-3 text-white-500 mt-10 gap-y-4 gap-x-4">
            <Link
              to="privacy-and-policy"
              className="text-white-500 text-md py-1"
            >
              Privacy & Policy
            </Link>
            {/* <Link className="text-white-500 text-md py-1">How it works</Link> */}
            <Link className="text-white-500 text-md py-1">
              Member Discounts
            </Link>
            <Link
              to="terms-and-conditions"
              className="text-white-500 text-md py-1"
            >
              Terms & Conditions
            </Link>
            <Link to={"https://www.gst.gov.in/"} target="_blank">
              GST website
            </Link>
            <Link
              to={"https://www.incometax.gov.in/iec/foportal/"}
              target="_blank"
            >
              Income Tax website
            </Link>
            <Link
              to={"https://www.mca.gov.in/content/mca/global/en/home.html"}
              target="_blank"
            >
              MCA website
            </Link>
            <Link to={"https://indiankanoon.org/doc/789969/"} target="_blank">
              IT Act
            </Link>
            <Link to={"https://cbic-gst.gov.in/gst-acts.html"} target="_blank">
              GST Act
            </Link>
            <Link
              to={"https://tin.tin.nsdl.com/pantan/StatusTrack.html"}
              target="_blank"
            >
              {" "}
              PAN/TAN status
            </Link>
            <Link
              to={
                "https://www1.incometaxindiaefiling.gov.in/e-FilingGS/Services/LinkAadhaarHome.html?lang=eng"
              }
              target="_blank"
            >
              {" "}
              PAN-Aadhaar linking{" "}
            </Link>
            <Link
              to={
                "https://onlineservices.tin.egov-nsdl.com/etaxnew/tdsnontds.jsp"
              }
              target="_blank"
            >
              Online Tax Payments{" "}
            </Link>
            <Link to={"https://www.emudhradigital.com/"} target="_blank">
              {" "}
              Digital Signature Certificate{" "}
            </Link>
            <Link
              to={"https://tin.tin.nsdl.com/oltas/refundstatuslogin.html"}
              target="_blank"
            >
              {" "}
              Refund Status{" "}
            </Link>
            <Link
              to={
                "https://www.incometaxindia.gov.in/Pages/tools/tax-calculator.aspx "
              }
              target="_blank"
            >
              {" "}
              Tax Calculator{" "}
            </Link>
            <Link
              to={
                "https://www.incometaxindia.gov.in/Pages/tools/house-rent-allowance-calculator.aspx"
              }
              target="_blank"
            >
              House Rent Allowance Calculator{" "}
            </Link>
          </div>

          <div className="flex flex-col gap-y-6 items-center ">
            <div>
              <h1 className="text-xl text-white-500 text-center">
                Follow for more
              </h1>
              <div className="flex justify-center mt-4">
                <Link
                  href="https://www.facebook.com/taxbharo"
                  target="_blank"
                  className="bg-white-500 p-2 rounded-md shadow-1"
                >
                  <FacebookIcon size={25} className="text-blue-500" />
                </Link>
                <Link
                  href="https://www.instagram.com/taxbharo/"
                  target="_blank"
                  className="bg-white-500  p-2 rounded-md shadow-1 ml-6"
                >
                  <InstagramIcon size={25} className="text-blue-500" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/taxbharo/?originalSubdomain=in"
                  target="_blank"
                  className="bg-white-500  p-2 rounded-md shadow-1 ml-6"
                >
                  <LinkedInIcon size={25} className="text-blue-500" />
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  className="bg-white-500  p-2 rounded-md shadow-1 ml-6"
                >
                  <GoogleIcon size={25} className="text-blue-500" />
                </Link>
              </div>
            </div>
            <div className="flex items-center  mt-4 md:mt-0 rounded-lg shadow-xl overflow-hidden ">
              <form action="" onSubmit={handleEmialSubscribes}>
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email Address"
                  className="border-none outline-none py-2 px-4"
                  required
                />
                <button
                  type="submit"
                  className="bg-black-100 px-2 text-blue-500 py-2"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
