import { useState } from "react";
import { InsightData } from "../../data/data"; // Correct import
import { InsightsCard } from "./InsightsCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { Button } from "../Common/Button";

export const Insights = () => {
  const [page, setPage] = useState(1);

  const itemsPerPage = 3;

  const insightItems = InsightData || [];

  const totalPages = Math.ceil(insightItems.length / itemsPerPage);

  const currentItems = insightItems.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  // Handle page change
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <h1 className="text-center text-blue-500 font-bold text-3xl">
        Latest Insights and Updates
      </h1>
      <p className="text-center w-full md:w-1/3 m-auto text-lg mt-4">
        Stay updated with our latest <br /> articles and insights.
      </p>
      <div className="my-10 md:mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
        {currentItems.map((item, index) => (
          <InsightsCard key={index} item={item} index={index} />
        ))}
      </div>
      <Stack className="flex justify-center items-center mb-8">
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChange}
          variant="outlined"
          color="secondary"
        />
      </Stack>

      <div className="w-full flex items-center justify-center md:mt-14 mt-6">
        <Button text="Read More" link="/blogs" />
      </div>
    </div>
  );
};
