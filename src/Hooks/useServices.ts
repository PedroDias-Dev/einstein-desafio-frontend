import { ServicesContext } from "Contexts/Services";
import { useContext } from "react";

const UseServices = () => {
  const { api } = useContext(ServicesContext);

  return {
    api,
  };
};

export default UseServices;
