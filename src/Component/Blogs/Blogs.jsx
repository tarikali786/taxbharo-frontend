import { InsightsCard } from "../Home/InsightsCard";
import { useEffect, useState } from "react";
import { get } from "../Hook/api";

export const Blogs = () => {
  const [insights, setInsights] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const itemsPerPage = 10;
  let scrollTimeout = null;

  const handlefetchblogData = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const response = await get(
        `/blogs?populate=*&pagination[page]=${page}&pagination[pageSize]=${itemsPerPage}&sort[0]=createdAt:desc`
      );

      const fetchedData = response?.data?.data || [];
      setInsights((prevInsights) => {
        const newData = fetchedData.filter(
          (newItem) =>
            !prevInsights.some((oldItem) => oldItem.id === newItem.id)
        );
        return [...prevInsights, ...newData];
      });

      if (fetchedData.length < itemsPerPage) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching blog data:", error);
    } finally {
      setLoading(false);
    }
  };



  const handleScroll = () => {
    if (scrollTimeout) clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        handlefetchblogData();
      }
    }, 100); 
  };

  useEffect(() => {
    handlefetchblogData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasMore, loading]);

  return (
    <div className="w-full md:my-8 md:px-10 lg:px-16 xl:px-44 px-6 py-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {insights.map((item, index) => (
          <InsightsCard key={item.id || index} item={item} index={index} />
        ))}
      </div>
      {loading && <p>Loading...</p>}
      {/* {!loading && !hasMore && <p>No more blogs to show.</p>} */}
    </div>
  );
};
