import { Link } from "react-router-dom";
import { memo, useCallback, useState } from "react";
export const DesktopNavbar = memo(({ navbardData }) => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [activeTab, setActivetab] = useState("");

  const handleActivetab = useCallback((tab) => {
    setActivetab(tab);
  }, []);

  return (
    <div
      className={`sticky hidden top-12 z-50 md:flex flex-wrap w-full md:px-10 lg:px-16 xl:px-44 px-2 py-4 shadow-sm items-center justify-between gap-2 bg-blue-500 `}
    >
      <Link to="/" className="md:w-32 md:h-10 w-28 h-8">
        <img
          src="https://www.taxbharo.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-white.6272d145.png&w=1920&q=75"
          alt=""
        />
      </Link>
      <div className="xl:gap-6 lg:gap-4 md:gap-2 hidden md:flex relative">
        {navbardData?.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoverIndex(index)}
            className="relative group"
            onClick={() => handleActivetab(item?.category_name)}
          >
            <p
              className={`cursor-pointer hover:text-white-500 font-medium text-sm  text-white-500 ${
                activeTab === item?.category_name &&
                "text-white-500 border-b-2 border-white-500"
              }`}
            >
              {item?.category_name}
            </p>

            {item?.services && hoverIndex === index && (
              <div
                className={`w-[30rem] absolute top-10 left-[-12rem] bg-white-500 shadow-lg rounded-md p-4 z-50 grid md:grid-cols-3 lg:grid-cols-2 ItemNavbar${index}`}
                onMouseLeave={() => setHoverIndex(null)}
              >
                {item?.services.map((child, childIndex) => (
                  <Link
                    to={`/service/${child.pageUrl}`}
                    key={childIndex}
                    className="text-sm py-1 px-2 hover:bg-blue-100 rounded-md cursor-pointer"
                  >
                    {child.service_name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

DesktopNavbar.displayName = "DesktopNavbar";
