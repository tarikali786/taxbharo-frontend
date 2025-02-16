import { useEffect, useState } from "react";
import { RelatedBlog } from "../../data/data";
import { Button } from "../Common/Button";
import { DownloadApp } from "../Home/DownloadApp";
import { InsightsCard } from "../Home/InsightsCard";
import { FAQ } from "./FAQ";
import { Hero } from "./Hero";
import { ServiceCard } from "./Servicecard";
import { get } from "../Hook/api";

export const Service = () => {
  const [serviceData, setServiceData] = useState([]);
  const fetchServicData = async () => {
    try {
      const res = await get("/blogs?populate=*");
      setServiceData(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchServicData();
  }, []);
  return (
    <div className="w-full md:px-10 lg:px-16 xl:px-44 md:py-16  px-6 py-10">
      <Hero />
      <ServiceCard />
      <FAQ />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 ">
        {serviceData?.map((item, index) => (
          <InsightsCard key={index} item={item} />
        ))}
      </div>
      <div className="w-full flex items-center justify-center mt-14">
        <Button text="Read More" link="/blogs" />
      </div>
      {/* <DownloadApp /> */}
    </div>
  );
};
