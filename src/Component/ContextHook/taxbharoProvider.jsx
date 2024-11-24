/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { get } from "../Hook/api";
import { Loading } from "../Common";

const MyContext = createContext();

// Create a provider component
export const MyProvider = ({ children }) => {
  const [navbardData, setNavbarData] = useState([]);
  const [loading, setLoading] = useState(false);
  const FetchNavbarData = async () => {
    const response = await get("/categories-with-services");
    setNavbarData(response.data.data);
    setLoading(false);
  };
  useEffect(() => {
    setLoading(true);
    FetchNavbarData();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <MyContext.Provider value={{ navbardData }}>{children}</MyContext.Provider>
  );
};

// Custom hook to use the context
export const useTaxbharoContext = () => {
  return useContext(MyContext);
};
