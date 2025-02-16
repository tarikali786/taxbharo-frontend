import { memo, useState } from "react";
import { SkeletonLoading } from "../Common/Skeleton";
import { Link } from "react-router-dom";

export const InsightsCard = memo(({ item }) => {
  return (
    <Link
      to={`/blog/${item?.attributes?.url}`}
      className="bg-white-500 shadow-lg p-4 cursor-pointer  rounded-lg  "
    >
      <div className="w-full h-44 md:h-52">
        {item?.attributes?.image?.data?.attributes?.url ? (
          <img
            className="w-full h-full object-fill rounded-md"
            src={`${import.meta.env.VITE_IMAGE_URL}${
              item?.attributes?.image?.data?.attributes?.url
            }`}
            alt="Service"
          />
        ) : (
          <SkeletonLoading />
        )}
      </div>
      <div className="mt-2 ">
        <h3 className="font-bold text-md my-2">{item?.attributes?.title}</h3>
        <div
          className=" line-clamp-3"
          dangerouslySetInnerHTML={{ __html: item?.attributes?.description }}
        />
      </div>
    </Link>
  );
});

InsightsCard.displayName = "InsightsCard";
