import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
export const Footer = () => {
  return (
    <div className="w-full md:px-28 lg:px-44  px-4 py-12 bg-blue-500 flex justify-between gap-2 md:items-center flex-wrap flex-col  sm:flex-row">
      <Link className=" w-44 md:h-14  ">
        <img
          src="https://www.taxbharo.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-white.6272d145.png&w=1920&q=75"
          alt=""
        />
      </Link>
      <div className="flex flex-col">
        <Link to="/" className="text-white-500 text-md py-1">
          Home
        </Link>
        <Link to="about-us" className="text-white-500 text-md py-1">
          About Taxbharo
        </Link>
        <Link to="tel:+917286058270" className="text-white-500 text-md py-1">
          Get in touch
        </Link>
      </div>
      <div className="flex flex-col">
        <Link to="/service" className="text-white-500 text-md py-1">
          Services
        </Link>
        <Link className="text-white-500 text-md py-1">Testimonials</Link>
        <Link className="text-white-500 text-md py-1">How it works</Link>
        <Link className="text-white-500 text-md py-1">Member Discounts</Link>
      </div>
      <div className="flex flex-col">
        <Link to="privacy-and-policy" className="text-white-500 text-md py-1">
          Privacy & Policy
        </Link>
        <Link to="terms-and-conditions" className="text-white-500 text-md py-1">
          Terms & Conditions
        </Link>
        <Link to="/faq" className="text-white-500 text-md py-1">
          FAQs
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
        <div className="flex items-center  mt-4 md:mt-0 rounded-sm overflow-hidden ">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your email Address"
            className="border-none outline-none py-2 px-2"
          />
          <p className="bg-black-100 px-2 text-black-500 py-2">Subscribe</p>
        </div>
      </div>
    </div>
  );
};
