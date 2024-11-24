/* eslint-disable no-undef */
import axios from "axios";
import React from "react";

export const ServicesContext = React.createContext({
  api: {},
});

const ServicesProvider = ({ children }: React.PropsWithChildren) => {
  const apiURL = "https://fakestoreapi.com";

  const api = axios.create({
    baseURL: apiURL,
  });

  const contextValue = {
    api,
  };

  return (
    <>
      <ServicesContext.Provider value={contextValue}>
        {children}
      </ServicesContext.Provider>
    </>
  );
};

export default ServicesProvider;
