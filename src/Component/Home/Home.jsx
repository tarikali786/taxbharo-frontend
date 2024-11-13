import { useCallback, useState } from "react";
import { Business } from "./Business";
import { DownloadApp } from "./DownloadApp";
import { Insights } from "./Insights";
import { SearchBar } from "./SearchBar";
import { Service } from "./Service";
import { motion } from "framer-motion";
import { Disclaimer } from "../Model/Disclaimer";
import { useTaxbharoContext } from "../ContextHook/taxbharoProvider";

const Home = () => {
  const { disclaimerModel, setDisclaimerModel } = useTaxbharoContext();
  const CloseDisclaimerModel = useCallback(() => {
    setDisclaimerModel(false);
  }, []);

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className={`w-full md:px-10 lg:px-16 xl:px-44  px-2 py-4 ${
          disclaimerModel && "filter blur-md pointer-events-none scroll-none"
        }`}
      >
        <SearchBar />
        <Insights />
        <Service />
        <Business />
        {/* <DownloadApp /> */}
      </motion.div>

      {disclaimerModel && <Disclaimer onClick={CloseDisclaimerModel} />}
    </div>
  );
};

export default Home;
