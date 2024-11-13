import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import {
  AboutUs,
  BlogDetails,
  Blogs,
  FAQs,
  Message,
  PrivacyAndPolicy,
  Service,
  ServiceDetails,
  SignIn,
  TermsAndCondition,
  VerifyNumber,
  VerifyOTP,
  WhatsApp,
} from "./Component";
import Layout1 from "./Layout/Layout1";
import AuthLayout from "./Layout/AuthLayout";
import WithLazyComponet from "./LazyLoading/WithLazyLoading";
const LazyHome = WithLazyComponet(() => import("./Component/Home/Home"));

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <WhatsApp />
      {/* <Message /> */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout1 />}>
          <Route index element={<LazyHome />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/service" element={<Service />} />
          <Route path="/service/:seriveURL" element={<ServiceDetails />} />
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
      </Routes>
    </AnimatePresence>
  );
}

export default App;
