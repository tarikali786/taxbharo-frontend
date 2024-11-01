import { Link } from "react-router-dom";
import { NavbarData } from "../../data/data";
import { useCallback, useState } from "react";
import { useTaxbharoContext } from "../ContextHook/taxbharoProvider";

export const DesktopNavbar = ({ navbarData }) => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [activeTab, setActivetab] = useState("");
  const { disclaimerModel } = useTaxbharoContext();

  const handleActivetab = useCallback((tab) => {
    setActivetab(tab);
  }, []);

  return (
    <div className={`sticky hidden  top-12   z-50  md:flex flex-wrap w-full md:px-10 lg:px-16 xl:px-44 px-2  py-4 shadow-sm items-center justify-between gap-2  bg-white-500 ${disclaimerModel && "filter blur-md pointer-events-none "}`}>
      <Link to="/" className=" md:w-32 md:h-10 w-28 h-8  ">
        <img
          src="https://www.taxbharo.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-blue.f73a0aaf.png&w=1920&q=75"
          alt=""
        />
      </Link>
      <div className="xl:gap-8 lg:gap-6 md:gap-4  hidden md:flex relative">
        {NavbarData?.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoverIndex(index)}
            className="relative group"
            onClick={() => handleActivetab(item?.name)}
          >
            <p
              className={`cursor-pointer hover:text-blue-500 font-medium text-black ${
                activeTab == item?.name &&
                "text-blue-500 border-b-2  border-blue-500 "
              }`}
            >
              {item?.name}
            </p>

            {item?.children && hoverIndex === index && (
              <div
                className="lg:w-[30rem] md:w-[20rem] absolute top-10 left-[-12rem] bg-white-500 shadow-lg rounded-md p-4 z-50 grid md:grid-cols-2 lg:grid-cols-2 "
                onMouseLeave={() => setHoverIndex(null)}
              >
                {item.children.map((child, childIndex) => (
                  <p
                    key={childIndex}
                    className="text-sm py-1 px-2 hover:bg-blue-100 rounded-md cursor-pointer"
                  >
                    {child.title ? child.title : child.segment}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* <div className=" gap-4 items-center hidden md:flex">
        <Link
          to="/auth/sign-in"
          className=" bg-blue-500 rounded-full text-white-500 px-4 pt-2 pb-3 "
        >
          Sign-up
        </Link>
        <Link to="/auth/sign-in" className="text-black-600 font-medium ">
          Login
        </Link>
      </div> */}
    </div>
  );
};
