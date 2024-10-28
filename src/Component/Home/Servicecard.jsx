// import { useState } from "react";

import { Link } from "react-router-dom";

export const ServiceCard = ({ data }) => {
  // const [isLoading, setIsLoading] = useState(true);

  return (
    <Link
      to="/service"
      className="bg-blue-100 shadow-lg p-4 cursor-pointer rounded-lg boxshadow md:flex justify-between"
    >
      <div className="md:w-1/2">
        <h3 className="font-semibold text-xl mb-2 text-black">{data?.title}</h3>
        <p className="text-black-400 leading-5">{data?.description}</p>
      </div>
      <div className="md:w-1/2 h-28 md:h-52 md:flex items-center justify-center">
        <img
          className="w-full h-full object-contain rounded-md bg-transparent"
          src={data?.img}
          alt={data?.title}
        />
      </div>
    </Link>
  );
};
