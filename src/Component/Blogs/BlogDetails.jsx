import { memo, useEffect, useState } from "react";
import { SkeletonLoading } from "../Common/Skeleton";
import { get } from "../Hook/api";
import { useParams } from "react-router-dom";

export const BlogDetails = memo(() => {
  const [isLoading, setIsLoading] = useState(true);
  const [blogDetail, setBlogDetails] = useState(null);
  const { url } = useParams();

  const fetchServiceDetails = async () => {
    const response = await get(`/blogs/${url}?populate=*`);
    setBlogDetails(response?.data?.data);
  };
  console.log(blogDetail);

  useEffect(() => {
    fetchServiceDetails();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full md:my-8 md:px-10 lg:px-16 xl:px-44  px-2 py-4 flex justify-between gap-2 md:flex-row flex-col-reverse ">
      <div className="md:w-2/3">
        <div className="w-full h-48 md:h-96 my-4">
          {isLoading && <SkeletonLoading />}
          <img
            className="w-full h-full object-fill rounded-md"
            src={`${import.meta.env.VITE_IMAGE_URL}${
              blogDetail?.attributes?.image?.data?.attributes?.url
            }`}
            alt=""
            onLoad={() => setIsLoading(false)}
          />
        </div>
        <h1 className=" text-xl md:text-3xl font-bold text-blue-500 my-6">
          {blogDetail?.attributes?.title}
        </h1>

        <div
          dangerouslySetInnerHTML={{
            __html: blogDetail?.attributes?.description,
          }}
        />
      </div>
      <div>
        <p>
          <b> Related Services </b> <br />
          This feture is Coming Soon
        </p>
      </div>
    </div>
  );
});

BlogDetails.displayName = "BlogDetails";
