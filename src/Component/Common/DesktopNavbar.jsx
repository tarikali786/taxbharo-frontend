import { Link } from "react-router-dom";
import { NavbarData } from "../../data/data";
import { useState } from "react";
export const DesktopNavbar = ({ navbarData }) => {
  const [hoverIndex, setHoverIndex] = useState(null);
  return (
    <>
      <Link to="/" className=" md:w-32 md:h-10 w-28 h-8  ">
        <img
          src="https://www.taxbharo.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-blue.f73a0aaf.png&w=1920&q=75"
          alt=""
        />
      </Link>
      <div className="gap-8 hidden md:flex relative">
        {navbarData?.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoverIndex(index)}
            className="relative group"
          >
            <p className="cursor-pointer hover:text-blue-500 font-medium text-black">
              {item?.attributes?.category?.data?.attributes?.Category}
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
    </>
  );
};
