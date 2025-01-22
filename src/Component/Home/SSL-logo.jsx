import SSL2 from "../../assets/SSL2.png";

export const SSLLogo = () => {
  return (
    <div className="flex justify-between items-center md:flex-row flex-col ">
      <div className="md:w-1/2 md:text-left text-center">
        <h2 className="text-2xl font-semibold text-blue-500">
          Your Data, Secured with SSL Encryption
        </h2>
        <p className="text-lg mt-4 text-black-400 mb-6">
          At Taxbharo, we prioritize your security. Our SSL-secured platform
          ensures all your financial and taxation data is protected while
          offering services like Tax Filing, GST Returns, Bookkeeping, and more.
        </p>
        <i className="text-[20px] text-black-500 ">
          Experience safe and trusted services with Taxbharo.
        </i>
      </div>
      <div className="h-16 lg:h-20">
        <img src={SSL2} alt="ssl-logo" loading="lazy" />
      </div>
    </div>
  );
};
