import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useCallback, useState } from "react";
import { post } from "../Hook/api";
import { Message } from "../Model";
import Logo from "../../assets/logo.webp";
import Flag from "../../assets/IndiaFlag.png";
import XIcon from "@mui/icons-material/X";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import SSL2 from "../../assets/SSL2.png";
import "./index.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
};
export const Footer = () => {
  const [open, setOpen] = useState(false);
  const [donateValue, setDonateValue] = useState({
    name: "",
    email: "",
    amount: "",
  });

  const [email, setEmail] = useState("");
  const [openModel, setOpenModel] = useState(false);
  const [msg, setMsg] = useState("Thank you for subscribing");
  const [color, setColor] = useState("");

  const handleCloseModel = useCallback(() => {
    setOpenModel(false);
  }, [openModel]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDonateOnchange = ({ target }) => {
    const { name, value } = target;

    setDonateValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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

  const handleDonateSubmit = () => {
    console.log("submit Data");
  };
  return (
    <>
      {openModel && (
        <Message msg={msg} color={color} onClick={handleCloseModel} />
      )}
      <div className="w-full md:px-10 lg:px-16    px-4 py-12 bg-blue-500  ">
        <div
          className={` flex justify-center md:justify-between gap-2 md:items-center   sm:flex-row flex-wrap  `}
        >
          <div className=" w-44  flex flex-col gap-2">
            <Link to="about-us" className=" w-44 md:h-14  ">
              <img src={Logo} alt="" />
            </Link>

            <div className="grid grid-cols-2 gap-2 items-center justify-end  ">
              <div>
                <img src={Flag} alt="" />
              </div>
              <div>
                <img src={SSL2} alt="" />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center flex-wrap text-white-500 mt-10 gap-y-4 gap-x-8">
            <div className="flex flex-col gap-3 justify-center  ">
              <Link to={"https://indiankanoon.org/doc/789969/"} target="_blank">
                Income Tax Act
              </Link>
              <Link
                to={"https://cbic-gst.gov.in/gst-acts.html"}
                target="_blank"
              >
                GST Act
              </Link>
              <Link
                to={"https://www.incometax.gov.in/iec/foportal/"}
                target="_blank"
              >
                Income Tax website
              </Link>
              <Link to={"https://www.gst.gov.in/"} target="_blank">
                GST website
              </Link>
              <Link
                to={"https://www.mca.gov.in/content/mca/global/en/home.html"}
                target="_blank"
              >
                MCA website
              </Link>
            </div>
            {/* 2 */}
            <div className="flex flex-col gap-3">
              <Link
                to={
                  "https://www1.incometaxindiaefiling.gov.in/e-FilingGS/Services/LinkAadhaarHome.html?lang=eng"
                }
                target="_blank"
              >
                {" "}
                PAN-Aadhaar Linking{" "}
              </Link>
              <Link
                to={"https://tin.tin.nsdl.com/oltas/refundstatuslogin.html"}
                target="_blank"
              >
                {" "}
                Refund Status{" "}
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
                  "https://www.incometaxindia.gov.in/Pages/tools/tax-calculator.aspx "
                }
                target="_blank"
              >
                {" "}
                Tax Calculator{" "}
              </Link>{" "}
              <Link
                to={
                  "https://www.incometaxindia.gov.in/Pages/tools/house-rent-allowance-calculator.aspx"
                }
                target="_blank"
              >
                House Rent Allowance Calculator{" "}
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              {/* 3 */}
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
                to="privacy-and-policy"
                className="text-white-500 text-md py-1"
              >
                Privacy & Policy
              </Link>
              <Link
                to="terms-and-conditions"
                className="text-white-500 text-md py-1"
              >
                Terms & Conditions
              </Link>
              {/* <Link className="text-white-500 text-md py-1">How it works</Link> */}
              <Link className="text-white-500 text-md py-1">
                Member Discounts
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-y-6 items-center ">
            <div>
              <h1 className="text-xl text-white-500 text-center">
                Follow for more
              </h1>
              <div className="flex justify-center mt-4">
                <Link
                  to="https://www.facebook.com/taxbharo"
                  target="_blank"
                  className="bg-white-500 p-2 rounded-md shadow-1"
                >
                  <FacebookIcon size={25} className="text-blue-500" />
                </Link>
                <Link
                  to="https://www.instagram.com/taxbharo/"
                  target="_blank"
                  className="bg-white-500  p-2 rounded-md shadow-1 ml-6"
                >
                  <InstagramIcon size={25} className="text-blue-500" />
                </Link>
                <Link
                  to="https://www.linkedin.com/company/taxbharo/?originalSubdomain=in"
                  target="_blank"
                  className="bg-white-500  p-2 rounded-md shadow-1 ml-6"
                >
                  <LinkedInIcon size={25} className="text-blue-500" />
                </Link>
                <Link
                  to="https://www.google.com/localservices/prolist?g2lbs=AOHF13k14F4oyeYC4GKbjf2oHMMIBZIJlG-nx2HHEyRZj-x44bzTcT8FxQG6QtvGc6nMH00pV_Fn&hl=en-IN&gl=in&cs=1&ssta=1&q=taxbharo&oq=taxbharo&slp=MgBSAggCYAB6jAFDZ2gwWVhoaWFHRnliMGlyaTVqWGg2LUFnQWhhRGhBQUdBQWlDSFJoZUdKb1lYSnZrZ0VPZEdGNFgyTnZibk4xYkhSaGJuU3FBVEVRQVRJZkVBRWlHNFpCZmlUSVp1TFZMMm5IZVZOSU9EMG9CVDhpZTNBVkkyZlVHaklNRUFJaUNIUmhlR0pvWVhKdpIBHgoNL2cvMTFzczUzZDE5OAoNL2cvMTFoMXlnZDFmYw%3D%3D&src=2&spp=Cg0vZy8xMWgxeWdkMWZjOnhXZzRRQUJnQUlnaDBZWGhpYUdGeWI1SUJEblJoZUY5amIyNXpkV3gwWVc1MG1nRUFxZ0V4RUFFeUh4QUJJaHVHUVg0a3lHYmkxUzlweDNsVFNEZzlLQVVfSW50d0ZTTm4xQm95REJBQ0lnaDBZWGhpYUdGeWJ3PT0%3D&serdesk=1&lrlstt=1736927385893&ved=2ahUKEwiFnuDUnveKAxWjzTgGHcvLC7UQvS56BAgnEAE&scp=ChNnY2lkOnRheF9jb25zdWx0YW50EkASEglNEMQrg72TORGf8VaoqRy2MCISRmF6aWxuYWdhciwgMjc0NDAxKhQNN03TDxWplQsyHa4R9Q8lqYUnMjABGgh0YXhiaGFybyIIdGF4Ymhhcm8qC1RheCBBZHZpc29y"
                  target="_blank"
                  className="bg-white-500  p-2 rounded-md shadow-1 ml-6"
                >
                  <GoogleIcon size={25} className="text-blue-500" />
                </Link>
                <Link
                  to="https://x.com/bharotax"
                  target="_blank"
                  className="bg-white-500  p-2 rounded-md shadow-1 ml-6"
                >
                  <XIcon size={25} className="text-blue-500" />
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
            <div>
              <button
                onClick={handleOpen}
                className="bg-yellow-500 px-4 py-2 capitalize rounded-md  text-white-500 hover:bg-white-500 hover:text-blue-500  active:scale-75 font-semibold transition-transform duration-300 ease-in-out "
              >
                donate now
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 text-white-500 text-[16px]">
          © 2024 Taxbharo.in, a product by Vitasashtra Consultants Private
          Limited. <br />
          CIN: U69202TS2023PTC174550.
        </div>
      </div>
      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="relative">
            <HighlightOffIcon
              className=" absolute top-4 right-6 cursor-pointer"
              onClick={handleClose}
            />
            <form className="space-y-3 mt-2">
              <label htmlFor="name" className="block text-black-400">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Full Name"
                required
                value={donateValue.name}
              />

              <label htmlFor="email" className="block text-black-400">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Email Address"
                required
                value={donateValue.email}
              />
              <label htmlFor="amount" className="block text-gray-700">
                Donation Amount
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter Amount"
                required
                value={donateValue.amount}
              />
              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white-500 w-full py-3  rounded-md hover:bg-yellow-500 transition duration-300"
                >
                  Donate Now
                </button>
              </div>
            </form>
          </Box>
        </Modal>
      )}
    </>
  );
};
