import { useTaxbharoContext } from "../ContextHook/taxbharoProvider";
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";
export const Navbar = () => {
  const { navbardData } = useTaxbharoContext();

  return (
    <>
      <DesktopNavbar navbardData={navbardData} />
      <MobileNavbar navbardData={navbardData}/>
    </>
  );
};
