/* eslint-disable no-undef */
import axios, { AxiosInstance } from "axios";
import React from "react";

export const ServicesContext = React.createContext({
  api: {} as AxiosInstance,
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
