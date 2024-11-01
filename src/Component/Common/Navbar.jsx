import { useTaxbharoContext } from "../ContextHook/taxbharoProvider";
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";
export const Navbar = () => {

  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
    </>
  );
};
