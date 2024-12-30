import { Link } from "react-router-dom";
import Logo from "../assets/logo.webp";
import ErrorImage from "../assets/Error.png";
export const ErrorPage = () => {
  return (
    <div className=" w-full md:px-10 lg:px-16 xl:px-44 pb-10  px-6 h-screen flex items-center justify-center relative bg-blue-500">
      <div className="w-full flex flex-col  justify-center items-center ">
        <div className=" w-[80%] h-[20vh] md:h-[30vh] lg:h-[50vh]  ">
          <img src={ErrorImage} alt="" />
        </div>
        <div className="text-center mt-6">
          <h1 className="text-2xl md:text-4xl font-bold text-white-500">
            404 - Page Not Found
          </h1>
          <p
            className="text-lg text-blue-100 md:mt-2 lg:mb-8 mb-4"
            style={{ paddingBlock: "10px" }}
          >
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="bg-white-500 px-6 py-3  rounded-lg  font-semibold"
          >
            Back to Home
          </Link>
        </div>
      </div>
      <Link
        to="/"
        className=" absolute top-6 w-36 md:w-40 lg:w-48 h-12 left-10 "
      >
        <img src={Logo} alt="" />
      </Link>
    </div>
  );
};
