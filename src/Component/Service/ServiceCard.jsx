import { useEffect } from "react";
import Img1 from "../../assets/Service.jpg";

import { Button } from "../Common/Button";
import { get } from "../Hook/api";

export const ServiceCard = () => {
  const fetchServiceDetails = async () => {
    const api = `http://localhost:1337/admin/api/categories`;
    const res = await get(api);
    console.log(res);
  };
  useEffect(() => {
    fetchServiceDetails();
  });
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-x-40 gap-y-14 my-10 md:my-20">
      <div className="rounded-xl overflow-hidden w-full md:h-[42vh] shadow-lg">
        <img src={Img1} alt="" className=" object-contain " />
      </div>
      <div className="p-4 shadow-lg rounded-xl bg-blue-100 ">
        <h1 className="text-xl font-semibold ">Income Tax Filing</h1>
        <ul className="text-lg text-black-300 list-disc pl-8 mt-6">
          <li>Login & Submit basic documents </li>
          <li>Our advisor will reach you in 24 hours </li>
          <li> Discuss and File your ITR </li>
          <li> Receive your file</li>
        </ul>
        <div className="mt-6">
          <Button text="Start Process" />
        </div>
      </div>
      <div className="p-4  shadow-lg rounded-xl bg-blue-100 ">
        <h1 className="text-xl font-semibold ">Documents Required</h1>
        <ul className="text-lg text-black-300 list-disc pl-4 mt-6">
          <li>Pan Card </li>
          <li>Bank Statement </li>
          <li>
            {" "}
            Policies and other documents (our advisor <br /> will discuss on
            case to case bases){" "}
          </li>
        </ul>
        <div></div>
      </div>
      <div className="p-4 shadow-lg rounded-xl bg-blue-100">
        <h1 className="text-xl font-semibold ">
          Penalty for Late Filing Income Tax Return
        </h1>
        <p className="mt-6">
          Taxpayers who do not file their income tax return on time are subject
          to penalty and charged an interest on the late payment of income tax.
        </p>
        <ul className="text-lg text-black-300 list-disc pl-8 mt-2 ">
          <li>Late Filing between 1st August and 31st December - Rs.5000 </li>
          <li>Our advisor will reach you in 24 hours </li>
          <li>Late Filing After 31st December - Rs.10,000 </li>
          <li> Penalty if taxable income is less than Rs.5 lakhs - Rs.1000</li>
        </ul>
      </div>
    </div>
  );
};
