import { InsightData } from "../../data/data";
import { InsightsCard } from "../Home/InsightsCard";
import { useEffect } from "react";

export const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="w-full md:my-8 md:px-28 lg:px-44  px-2 py-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {InsightData?.map((item, index) => (
        <InsightsCard key={index} item={item} index={index} />
      ))}
    </div>
  );
};
