import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
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
    const storedDate = localStorage.getItem("lastDisclaimerDate");

    if (storedDate !== today) {
      setOpen(true);
      localStorage.setItem("lastDisclaimerDate", today);
    }
  }, []);

  return (
    <div>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>Taxbharo - UNDERSTAND | PLAN | FILE</title>
        <meta
          name="description"
          content="Navigate tax season easily with our swift and accurate income tax solutions. Taxbharo helps you reach your income tax solutions effectively."
        />
        <meta
          property="og:title"
          content="Taxbharo - UNDERSTAND | PLAN | FILE"
        />
        <meta
          property="og:description"
          content="Navigate tax season easily with our swift and accurate income tax solutions."
        />
        <meta property="og:url" content="https://www.taxbharo.in" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.taxbharo.in" />

        {/* Structured Data for WebSite Schema with Sitelinks SearchBox */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Taxbharo",
            url: "https://www.taxbharo.in",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.taxbharo.in/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </script>

        {/* Structured Data for Sitelinks */}
        <script type="application/ld+json">
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Income Tax Returns",
              url: "https://www.taxbharo.in/service/file-original-income-tax-returns-resident-individuals-2",
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "GST Registration & Filing",
              url: "https://www.taxbharo.in/service/gst-registration-casual-permanent-regular-composition-ecommerce-1",
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Company Formation",
              url: "https://www.taxbharo.in/service/incorporation-of-private-company-1",
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Legal & Trademark",
              url: "https://www.taxbharo.in/service/trademark-application-1",
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Contact Us",
              url: "https://api.whatsapp.com/send/?phone=917286058270&text=Welcome+to+TaxBharo%21&type=phone_number&app_absent=0",
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Taxsikho",
              url: "https://www.taxbharo.in/blogs",
            },
          ])}
        </script>
      </Helmet>

      {/* Main Content */}
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
        <GoogleReview />
      </motion.div>

      {open && <Disclaimer open={open} setOpen={setOpen} />}
    </div>
  );
};

export default Home;
