import { useState } from "react";
import { SkeletonLoading } from "../Common/Skeleton";
import { Link } from "react-router-dom";

export const InsightsCard = ({ item, index }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Link
      to={`/blog/${index}`}
      className="bg-white-500 shadow-lg p-4 cursor-pointer  rounded-lg  "
    >
      <div className="w-full h-44 md:h-52">
        {isLoading && <SkeletonLoading />}
        <img
          className="w-full h-full object-fill rounded-md"
          src={item?.img}
          alt="Service"
          onLoad={() => setIsLoading(false)}
        />
      </div>
      <div className="mt-2 ">
        <span className="font-normal text-sm ">{item?.title}</span>
        <h3 className="font-bold text-md my-2">{item?.heading}</h3>
        <p>{item?.description}</p>
      </div>
    </Link>
  );
};
