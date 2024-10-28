import Img1 from "../../assets/Download.png";
import { Link } from "react-router-dom";

export const DownloadApp = () => {
  return (
    <div className="md:flex mdd:justify-between items-center gap-2 ">
      <div className="md:w-1/2">
        <h1 className="text-2xl md:text-4xl text-blue-500 font-semibold">
          Download Taxbharo for mobile
        </h1>
        <p className="text-md text-black-500 my-4  ">
          Want to manage your taxes and complaince on the go? Download our iOS
          and Android apps.
        </p>
        <Link to="#" className="text-blue-500 text-lg">
          Download apps &#8594;{" "}
        </Link>
      </div>
      <div className="md:w-1/2    ">
        <img src={Img1} alt="" className=" object-contain" />
      </div>
    </div>
  );
};
