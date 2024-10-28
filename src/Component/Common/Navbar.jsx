import { useEffect, useState } from "react";
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";
import { get } from "../Hook/api";
export const Navbar = () => {
  const [navbarData, setNavbarData] = useState(null);
  const fatchNavbarData = async () => {
    const api =
      "/services?fields=id&fields=pageUrl&fields=service_name&populate=category";
    const response = await get(api);
    console.log(response?.data?.data);
    setNavbarData(response?.data?.data);
  };
  useEffect(() => {
    fatchNavbarData();
  }, []);
  return (
    <div className="  sticky  top-0  md:top-12   z-50  flex flex-wrap w-full md:px-28 lg:px-44 px-2  py-5 shadow-sm items-center justify-between gap-2  bg-white-500">
      <DesktopNavbar navbarData={navbarData} />
      <MobileNavbar navbarData={navbarData} />
    </div>
  );
};
