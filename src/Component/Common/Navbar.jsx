import { useTaxbharoContext } from "../ContextHook/taxbharoProvider";
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";
export const Navbar = () => {
  const { disclaimerModel } = useTaxbharoContext();

  return (
    <div
      className={`${
        disclaimerModel && "filter blur-md pointer-events-none scroll-none"
      }`}
    >
      <DesktopNavbar />
      <MobileNavbar />
    </div>
  );
};
