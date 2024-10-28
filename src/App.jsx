import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import {
  AboutUs,
  BlogDetails,
  Blogs,
  FAQs,
  PrivacyAndPolicy,
  Service,
  SignIn,
  TermsAndCondition,
  VerifyNumber,
  VerifyOTP,
} from "./Component";
import Layout1 from "./Layout/Layout1";
import AuthLayout from "./Layout/AuthLayout";
import WithLazyComponet from "./LazyLoading/WithLazyLoading";
import Test from "./Component/test/test";
const LazyHome = WithLazyComponet(() => import("./Component/Home/Home"));

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout1 />}>
          <Route index element={<LazyHome />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/service" element={<Service />} />
          {/* <Route path="/service/:title" element={<Service />} /> */}
          <Route path="/privacy-and-policy" element={<PrivacyAndPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
          <Route path="/faq" element={<FAQs />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="verify-number" element={<VerifyNumber />} />
          <Route path="verify-otp" element={<VerifyOTP />} />
        </Route>
        <Route>
          <Route path="/text" element={<Test />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
