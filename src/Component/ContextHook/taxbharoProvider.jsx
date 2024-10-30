/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const MyContext = createContext();

// Create a provider component
export const MyProvider = ({ children }) => {
  const [disclaimerModel, setDisclaimerModel] = useState(true);

  return (
    <MyContext.Provider value={{ disclaimerModel, setDisclaimerModel }}>
      {children}
    </MyContext.Provider>
  );
};

// Custom hook to use the context
export const useTaxbharoContext = () => {
  return useContext(MyContext);
};
