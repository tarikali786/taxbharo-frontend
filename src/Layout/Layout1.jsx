import { Outlet } from "react-router-dom";
import { Footer, Header, Navbar } from "../Component";
const Layout1 = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout1;
