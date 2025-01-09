import React, { useEffect, useRef, useState } from "react";
import AnimatedNumbers from "react-animated-numbers";
import { get } from "../Hook/api";
import CountUp from "react-countup";

export const Business = () => {
  const [Business, setBusiness] = useState([]);
  const handleBusinessData = async () => {
    const response = await get("/user-numbers");
    setBusiness(response?.data?.data);
  };

  useEffect(() => {
    handleBusinessData();
  }, []);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-4 my-14" ref={ref}>
      {Business?.map((item, index) => (
        <div key={index} className="text-center md:text-left">
          <h2 className="text-5xl font-bold text-blue-500">
            {isVisible && (
              <CountUp
                start={0}
                end={item?.attributes?.count}
                decimals={0}
                duration={2}
              />
            )}
            %
          </h2>
          <h3 className="text-xl font-semibold text-black-500 my-2">
            {item?.attributes?.title}
          </h3>
          <p className="text-black-300"> {item?.attributes?.details}</p>
        </div>
      ))}
    </div>
  );
};
