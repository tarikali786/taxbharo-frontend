import { useEffect, useState, useMemo } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { get } from "../Hook/api";
import { Link, useParams } from "react-router-dom";
import { SkeletonLoading } from "../Common/Skeleton";
import { FAQ } from "../About/FAQ";

export const ServiceDetails = () => {
  const { seriveURL } = useParams();
  const [serviceDetails, setServiceDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchServiceDetails = async () => {
    const response = await get(`/services/${seriveURL}?populate=*`);
    setServiceDetails(response?.data?.data);
  };

  useEffect(() => {
    fetchServiceDetails();
  }, [seriveURL]);

  console.log(serviceDetails);

  const formattedSteps = useMemo(() => {
    const description = serviceDetails?.attributes?.service_description_1;
    if (!description) return [];

    return description
      .split(/Step \d+:/)
      .map((step) => {
        const linkMatch = step.match(/\((https?:\/\/[^\)]+)\)/);
        const text = step.replace(/\((https?:\/\/[^\)]+)\)/, "").trim();
        const link = linkMatch ? linkMatch[1] : "";
        return { text, link };
      })
      .filter((step) => step.text !== "");
  }, [serviceDetails]);

  return (
    <div className="md:px-10 lg:px-20  md:py-16  px-6 py-10">
      <div className=" flex lg:flex-row flex-col gap-8 justify-center ">
        <div className="grid gap-y-10 md:gap-y-14 lg:w-[75%]  ">
          <div>
            <h1 className=" text-center text-2xl font-medium text-blue-500 ">
              {serviceDetails?.attributes?.service_name}
            </h1>

            <p className=" text-center  text-lg   text-black-400 my-6 ">
              {serviceDetails?.attributes?.details}
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 lg:gap-x-4 xl:gap-x-8 gap-6">
            <div className="rounded-xl overflow-hidden w-full h-[26vh] lg:h-[42vh] shadow-lg">
              {serviceDetails?.attributes?.photo?.data?.attributes?.url ? (
                <img
                  alt=""
                  src={`${import.meta.env.VITE_IMAGE_URL}${
                    serviceDetails?.attributes?.photo?.data?.attributes?.url
                  }`}
                  className="object-fill w-full h-full"
                  loading="lazy"
                  onLoad={() => setIsLoading(false)}
                />
              ) : (
                <SkeletonLoading />
              )}
            </div>
            <div className="p-4 shadow-lg rounded-xl bg-blue-100">
              <h1 className="text-xl font-semibold">Documents Required</h1>

              <p className="text-lg text-black-300  mt-6">
                {serviceDetails?.attributes?.documents_required}
              </p>
            </div>
          </div>

          <div className="grid gap-y-10">
            <div className="md:w-full p-4 md:p-10 shadow-lg rounded-xl bg-blue-100">
              <h1 className="text-xl font-semibold">
                {" "}
                {serviceDetails?.attributes?.service_heading_1}
              </h1>
              <Stepper
                activeStep={formattedSteps.length}
                orientation="vertical"
                className="my-10 w-full"
              >
                {formattedSteps.map((label, index) => (
                  <Step key={index}>
                    <StepLabel>
                      <p className="text-black-400 text-sm">{label.text}</p>

                      {label.link && (
                        <Link
                          to={label.link}
                          target="_blank"
                          className=" block mt-2 bg-blue-500 max-w-min px-4 py-1 text-white-500 rounded-xl "
                        >
                          Click
                        </Link>
                      )}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
              <div className="mt-6 flex gap-10 items-center flex-wrap">
                <Link
                  to={serviceDetails?.attributes?.Button_Url}
                  className="relative bg-blue-500 md:px-6 md:py-2 px-4 py-2 rounded-md text-white-500  text-center transition-transform duration-300 hover:scale-105 
                 shadow-[0_0_20px_rgba(71,98,255,0.7),0_0_40px_rgba(71,98,255,0.5),0_0_60px_rgba(71,98,255,0.3)] 
                 hover:shadow-[0_0_25px_rgba(71,98,255,1),0_0_50px_rgba(71,98,255,0.8),0_0_75px_rgba(71,98,255,0.6)]"
                >
                  {serviceDetails?.attributes?.Button_name
                    ? serviceDetails.attributes.Button_name
                    : "Start Process"}
                </Link>
                <p
                  className={`bg-[#277d2e] md:px-6 md:py-2 px-2 py-1  text-nowrap  rounded-md text-white-500   `}
                >
                  {` ${
                    serviceDetails?.attributes?.price
                      ? serviceDetails.attributes.price
                      : "0"
                  }`}
                </p>
                <p className="">
                  <b className="mr-2">Disclaimer</b>
                  All the services listed are inclusive of taxes (GST), but the
                  audit fee is not included.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-10">
              <div className="lg:w-1/2 p-4 md:p-8 w-full shadow-lg rounded-xl bg-blue-100">
                <h1 className="text-xl font-semibold ">Estimated Time</h1>
                <p className="mt-6">{serviceDetails?.attributes?.notes}</p>
              </div>
              <div className="lg:w-1/2 p-4 md:p-8 w-full shadow-lg rounded-xl bg-blue-100">
                <h1 className="text-xl font-semibold">Notes / Remarks</h1>
                <p className="mt-6">{serviceDetails?.attributes?.remarks}</p>
              </div>
            </div>
          </div>
        </div>

        {serviceDetails?.attributes?.related_services.data.length != 0 && (
          <div className="lg:w-[25%] md:ml-4 ">
            <p className="text-2xl font-semibold">Related Services</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-6  mt-4">
              {serviceDetails?.attributes?.related_services.data.map(
                (item, index) => (
                  <Link
                    to={`/service/${item?.attributes?.pageUrl}`}
                    className="border rounded-lg py-2 px-2 hover:border-blue-500 hover:border-2 hover:bg-blue-100 flex gap-4 items-center"
                    key={index}
                  >
                    <div className="w-[30%] h-12 ">
                      {/* <img
                        alt=""
                        src={`${import.meta.env.VITE_IMAGE_URL}${
                          item?.attributes?.photo?.data?.attributes?.url
                        }`}
                        className="object-fill w-full h-full  rounded-md"
                        onLoad={() => setIsLoading(false)}
                      /> */}

                      {item?.attributes?.photo?.data?.attributes?.url ? (
                        <img
                          alt=""
                          src={`${import.meta.env.VITE_IMAGE_URL}${
                            item?.attributes?.photo?.data?.attributes?.url
                          }`}
                          className="object-fill w-full h-full"
                          loading="lazy"
                        />
                      ) : (
                        <SkeletonLoading />
                      )}
                    </div>
                    <p className="w-[60%] text-sm mt-1 text-black-500 line-clamp-4">
                      {item?.attributes?.service_name}
                    </p>
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>

      {/* Related Blog */}
      <div className="mt-16">
        {serviceDetails?.attributes?.related_blogs.data.length !== 0 && (
          <div className="w-full md:ml-4 ">
            <p className="text-2xl font-semibold text-center mb-8">
              Related Blogs
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6  mt-2">
              {serviceDetails?.attributes?.related_blogs.data.map(
                (item, index) => (
                  <Link
                    to={`/blog/${item?.attributes?.url}`}
                    className="border rounded-lg py-2 px-2 hover:border-blue-500 hover:border-2 hover:bg-blue-100 flex flex-col gap-4 "
                    key={index}
                  >
                    <div className="w-full h-40 ">
                      <img
                        alt=""
                        src={`${import.meta.env.VITE_IMAGE_URL}${
                          item?.attributes?.photo?.data?.attributes?.url
                        }`}
                        className="object-fill w-full h-full"
                        onLoad={() => setIsLoading(false)}
                      />
                    </div>
                    <p className=" mt-1 font-semibold text-black-500 line-clamp-4">
                      {item?.attributes?.title}
                    </p>
                    <div
                      className="line-clamp-4"
                      dangerouslySetInnerHTML={{
                        __html: item?.attributes?.description,
                      }}
                    ></div>
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
