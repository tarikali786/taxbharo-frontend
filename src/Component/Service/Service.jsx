import { useEffect, useState } from "react";
import { RelatedBlog } from "../../data/data";
import { Button } from "../Common/Button";
import { DownloadApp } from "../Home/DownloadApp";
import { InsightsCard } from "../Home/InsightsCard";
import { FAQ } from "./FAQ";
import { Hero } from "./Hero";
import { ServiceCard } from "./ServiceCard";
import { get } from "../Hook/api";
import { useTaxbharoContext } from "../ContextHook/taxbharoProvider";

export const Service = () => {
  const [serviceData, setServiceData] = useState([]);
  const { setDisclaimerModel } = useTaxbharoContext();
  const fetchServicData = async () => {
    try {
      const res = await get("/services?populate=*");
      console.log(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setDisclaimerModel();
    fetchServicData();
  }, []);
  return (
    <div className="w-full md:px-10 lg:px-16 xl:px-44 md:py-16  px-2 py-10">
      <Hero />
      <ServiceCard />
      <FAQ />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 ">
        {RelatedBlog?.map((item, index) => (
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
