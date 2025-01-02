import { memo, useEffect, useState } from "react";
import { SkeletonLoading } from "../Common/Skeleton";
import { get } from "../Hook/api";
import { Link, useParams } from "react-router-dom";

export const BlogDetails = memo(() => {
  const [isLoading, setIsLoading] = useState(true);
  const [blogDetail, setBlogDetails] = useState(null);
  const { url } = useParams();

  const fetchServiceDetails = async () => {
    try {
      const response = await get(`/blogs/${url}?populate=*`);
      setBlogDetails(response?.data?.data);
    } catch (error) {
      console.error("Error fetching blog details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchServiceDetails();
    window.scrollTo(0, 0);
  }, []);

  console.log(blogDetail);

  return (
    <div className="w-full md:my-8 md:px-10 lg:px-16 xl:px-44 px-6 py-4 flex justify-between gap-y-10 md:gap-6 md:flex-row flex-col">
      <div className="md:w-2/3">
        <div className="w-full h-48 md:h-96 my-4">
          {isLoading ? (
            <SkeletonLoading />
          ) : (
            <img
              className="w-full h-full object-fill rounded-md"
              src={`${import.meta.env.VITE_IMAGE_URL}${
                blogDetail?.attributes?.image?.data?.attributes?.url || ""
              }`}
              alt="Blog"
              onLoad={() => setIsLoading(false)}
            />
          )}
        </div>
        <h1 className="text-xl md:text-3xl font-semibold text-blue-500 my-6 hover:scale-x-50">
          {blogDetail?.attributes?.title}
        </h1>

        <div
          dangerouslySetInnerHTML={{
            __html: blogDetail?.attributes?.description || "",
          }}
        />
      </div>
      <div className="md:w-1/3 md:ml-[5%]">
        <p className="text-2xl font-semibold">Related Services</p>
        <div className="flex flex-col gap-y-6 mt-4">
          {blogDetail?.attributes?.services?.data?.length > 0 ? (
            blogDetail.attributes.services.data.map((item, index) => (
              <Link
                to={item?.attributes?.pageUrl || "#"}
                className="border rounded-lg py-2 px-3 hover:border-blue-500 hover:border-2 hover:bg-blue-100"
                key={index}
              >
                <h3 className="text-[16px] font-semibold text-blue-500">
                  {item?.attributes?.service_name}
                </h3>
                <p className="text-sm mt-1 text-black-300">
                  {item?.attributes?.details}
                </p>
              </Link>
            ))
          ) : (
            <p>No Service Found</p>
          )}
        </div>
      </div>
    </div>
  );
});

BlogDetails.displayName = "BlogDetails";
