import { InsightsCard } from "../Home/InsightsCard";
import { useEffect, useState } from "react";
import { get } from "../Hook/api";

export const Blogs = () => {
  const [insights, setInsights] = useState([]); // Stores all the blog data
  const [page, setPage] = useState(1); // Tracks the current page
  const [loading, setLoading] = useState(false); // Tracks loading state
  const [hasMore, setHasMore] = useState(true); // Indicates if there is more data to load

  const itemsPerPage = 10; // Number of blog posts to fetch per page
  console.log(insights);

  // Fetch blog data with pagination
  const handlefetchblogData = async () => {
    if (loading || !hasMore) return; // Prevent multiple requests at once and if no more data
    setLoading(true);

    try {
      const response = await get(
        `/blogs?populate=*&pagination[page]=${page}&pagination[pageSize]=${itemsPerPage}&sort[0]=createdAt:desc`
      );

      // Check if there's more data to load
      const fetchedData = response?.data?.data || [];
      setInsights((prevInsights) => [...prevInsights, ...fetchedData]);

      // If less than `itemsPerPage` is returned, no more data is available
      if (fetchedData.length < itemsPerPage) {
        setHasMore(false);
      }

      setLoading(false);
    } catch (error) {
      console.error("Error fetching blog data:", error);
      setLoading(false);
    }
  };

  // Fetch data on component mount and when `page` changes
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when page loads
    handlefetchblogData(); // Fetch the initial data
  }, [page]);

  // Load more data when user reaches the end of the page
  const loadMore = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="w-full md:my-8 md:px-10 lg:px-16 xl:px-44 px-6 py-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {insights?.map((item, index) => (
          <InsightsCard key={index} item={item} index={index} />
        ))}
      </div>
      {loading && <p>Loading...</p>}{" "}
      {/* Show loading state while data is being fetched */}
      {hasMore && !loading && (
        <div className="w-full flex justify-center mt-8">
          <button
            onClick={loadMore}
            className="px-8 py-2 bg-blue-500 text-white rounded-lg"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};
