import { ServiceData } from "../../data/data";
import { ServiceCard } from "./ServiceCard";

export const Service = () => {
  return (
    <div className="my-10">
      <h1 className="text-center text-blue-500 font-bold text-3xl">
        Curated Services Exclusively for you
      </h1>
      <p className="text-center w-full md:w-1/3 m-auto text-lg mt-4">
        Our services are curated as per the needs of clients and their business
        requirements
      </p>
      <div className="my-10 md:my-20 grid grid-cols-1 sm:grid-cols-2  gap-8">
        {ServiceData.map((item, index) => (
          <ServiceCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};
