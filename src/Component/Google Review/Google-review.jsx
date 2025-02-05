import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import StarIcon from "@mui/icons-material/Star";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { get } from "../Hook/api";
import useMediaQuery from "@mui/material/useMediaQuery";
export const GoogleReview = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const isSm = useMediaQuery("(max-width:760px)"); // Mobile
  const isMd = useMediaQuery("(max-width:1060px)"); // Tablet

  const fetchGoogleReviews = async () => {
    try {
      const response = await get("/google-reviews");

      if (response?.data?.status === "success") {
        setReviews(response?.data?.reviews || []);
      } else {
        console.error("something went wrong");
      }
    } catch (err) {
      console.error("An error occurred while fetching reviews:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGoogleReviews();
  }, []);
  const getColorForLetter = (letter) => {
    const char = letter.toUpperCase(); // Ensure case-insensitivity
    if (char >= "A" && char <= "D") return "bg-blue-600";
    if (char >= "E" && char <= "H") return "bg-yellow-500";
    if (char >= "I" && char <= "M") return "bg-yellow-400";
    if (char >= "N" && char <= "Z") return "bg-yellow-300";
    return "bg-gray-500";
  };

  return (
    <div className="w-full   md:py-16   py-10 text-center text-white-500">
      <h2 className="text-2xl md:text-3xl mt-3 font-semibold text-blue-500">
        Client Feedback & Reviews
      </h2>
      {loading && (
        <p className="text-center text-black-300 text-lg ">
          Fetch Live Google My Business profile Review
        </p>
      )}
      <div className=" mt-16">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={isSm ? 1 : isMd ? 2 : 3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          // autoplay={{
          //   delay: 5000,
          //   disableOnInteraction: false,
          // }}
          className="bg-white-500"
        >
          {reviews?.map((item, index) => (
            <SwiperSlide key={index} className="bg-white-500">
              <div className="w-full  min-h-40 border m-auto rounded-[50px] overflow-hidden border-pink-500 flex flex-col justify-center items-center py-10 bg-blue-500">
                <div
                  className={`size-28 border-2 rounded-full flex justify-center items-center ${
                    item?.author_name
                      ? getColorForLetter(item.author_name.charAt(0))
                      : "bg-gray-500"
                  }`}
                >
                  {!item?.profile_photo_url ? (
                    <img
                      src={item?.profile_photo_url}
                      alt={`${item?.author_name.charAt(0)}`}
                    />
                  ) : (
                    <p className="text-4xl "> {item?.author_name.charAt(0)}</p>
                  )}
                </div>

                <h3 className="text-xl font-semibold  mt-4">
                  {item?.author_name}
                </h3>
                <div className="mt-2">
                  {Array.from({ length: item?.rating || 0 }).map((_, index) => (
                    <StarIcon key={index} className="text-yellow-500" />
                  ))}
                </div>

                <p className="my-6 w-[80%] text-white-500 text-sm ">
                  {item?.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
