import { useState, useEffect } from "react";
import { Helmet } from "react-helmet"; // Import Helmet
import { Business } from "./Business";
import { Insights } from "./Insights";
import { SearchBar } from "./SearchBar";
import { Service } from "./Service";
import { motion } from "framer-motion";
import { Disclaimer } from "../Model/Disclaimer";
import { SSLLogo } from "./SSL-logo";
import { GoogleReview } from "../Google Review";

const Home = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];

    // Get the stored dat from localStorage
    const storedDate = localStorage.getItem("lastDisclaimerDate");

    if (storedDate !== today) {
      setOpen(true);
      localStorage.setItem("lastDisclaimerDate", today);
    }
  }, []);

  return (
    <div>
      <Helmet>
        <title>Taxbharo - UNDERSTAND | PLAN | FILE</title>
        <meta
          name="description"
          content="It's easy to navigate tax season with our swift and accurate income tax ... The information is provided by www.taxbharo.in, a property of Taxbharo. While ..."
        />
        <meta
          name="about"
          content="Taxbharo is a budding online platform to help us reach your income tax solutions effectively."
        />
        <meta property="og:title" content="Taxbharo -UNDERSTAND | PLAN | FILE" />
        <meta
          property="og:description"
          content="It's easy to navigate tax season with our swift and accurate income tax solutions. The information is provided by www.taxbharo.in, a property of Taxbharo."
        />
        <meta property="og:url" content="https://www.taxbharo.in" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.taxbharo.in/service/file-original-income-tax-returns-resident-individuals-1" />
        <link rel="canonical" href="https://www.taxbharo.in/service/file-original-income-tax-returns-resident-individuals-1" />
        <link rel="canonical" href="https://www.taxbharo.in/service/file-original-income-tax-returns-resident-individuals-1" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="w-full md:px-10 lg:px-16 xl:px-44 px-6 py-4"
      >
        <SearchBar />
        <Insights />
        <Service />
        <Business />
        <SSLLogo />
        {/* <DownloadApp /> */}
        <GoogleReview />
      </motion.div>

      {open && <Disclaimer open={open} setOpen={setOpen} />}
    </div>
  );
};

export default Home;
