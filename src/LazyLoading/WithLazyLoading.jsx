import { Suspense, lazy } from "react";
import { Loading } from "../Component/Common";

const WithLazyComponet = (importFuc) => {
  const LazyComponent = lazy(importFuc);
  return (props) => (
    <Suspense fallback={<Loading/>}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default WithLazyComponet;
