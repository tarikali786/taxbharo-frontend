import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import {
  AboutUs,
  BlogDetails,
  Blogs,
  Calendar,
  Donate,
  Fail,
  FAQs,
  PrivacyAndPolicy,
  Service,
  ServiceDetails,
  SignIn,
  Success,
  TermsAndCondition,
  VerifyNumber,
  VerifyOTP,
  WhatsApp,
} from "./Component";
import { ToastContainer } from "react-toastify";

import Layout1 from "./Layout/Layout1";
import AuthLayout from "./Layout/AuthLayout";
import WithLazyComponet from "./LazyLoading/WithLazyLoading";
import { ErrorPage } from "./ErrorBoundary";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
const LazyHome = WithLazyComponet(() => import("./Component/Home/Home"));

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <WhatsApp />
      {/* <Message /> */}
      <ErrorBoundary>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout1 />}>
            <Route index element={<LazyHome />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:url" element={<BlogDetails />} />
            <Route path="/service" element={<Service />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/service/:seriveURL" element={<ServiceDetails />} />
            <Route path="/privacy-and-policy" element={<PrivacyAndPolicy />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndCondition />}
            />
            <Route path="/faq" element={<FAQs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/success" element={<Success />} />
            <Route path="/fail" element={<Fail />} />
          </Route>

          <Route path="/auth" element={<AuthLayout />}>
            <Route path="sign-in" element={<SignIn />} />
            <Route path="verify-number" element={<VerifyNumber />} />
            <Route path="verify-otp" element={<VerifyOTP />} />
          </Route>

          <Route path="*" element={<ErrorPage />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          closeOnClick
          pauseOnHover
          draggable
        />
      </ErrorBoundary>
      <Calendar />
    </AnimatePresence>
  );
}

export default App;
