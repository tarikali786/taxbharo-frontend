import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Button } from "../Common/Button";
import { get } from "../Hook/api";
import { InsightsCard } from "./InsightsCard";

export const Insights = () => {
  const [page, setPage] = useState(1);
  const [blogsData, setBlogsData] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 3;

  // Fetch blog data with pagination
  const handlefetchblogData = async () => {
    try {
      const response = await get(
        `/blogs?populate=*&pagination[page]=${page}&pagination[pageSize]=${itemsPerPage}&sort[0]=createdAt:desc`
      );

      // Update state with fetched data and pagination details
      setBlogsData(response?.data?.data || []);
      setPageCount(response?.data?.meta?.pagination?.pageCount || 0);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  // Fetch data on component mount and when `page` changes
  useEffect(() => {
    handlefetchblogData();
  }, [page]);

  return (
    <div>
      <h1 className="text-center text-blue-500 font-bold text-3xl">
        Latest Insights and Updates
      </h1>
      <p className="text-center w-full md:w-1/3 m-auto text-lg mt-4">
        Stay updated with our latest <br /> articles and insights.
      </p>

      <div className="my-10 md:mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
        {blogsData.map((item, index) => (
          <InsightsCard key={index} item={item} index={index} />
        ))}
      </div>

      <Stack className="flex justify-center items-center mb-8">
        <Pagination
          count={pageCount} // Total pages from Strapi response
          page={page} // Current page
          onChange={(event, value) => setPage(value)} // Update page on change
          variant="outlined"
          color="secondary"
        />
      </Stack>

      <div className="w-full flex items-center justify-center md:mt-14 mt-6">
        <Button text="All Blogs" link="/blogs" />
      </div>
    </div>
  );
};
